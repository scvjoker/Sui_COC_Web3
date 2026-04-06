/**
 * useAssets.ts
 * 從鏈上查詢 USDC / TAX_COIN 餘額，以及持有的 Invoice 彩券物件
 */
import { useState, useEffect, useCallback } from 'react';
import { useCurrentAccount, useCurrentClient } from '@mysten/dapp-kit-react';
import {
  USDC_TYPE,
  TAX_COIN_TYPE,
  INVOICE_TYPE,
} from '../contracts/invoice';

export interface InvoiceFields {
  id: { id: string };
  invoice_number: number;
  protocol: string;
  amount: number;
  timestamp: string;
}

export interface InvoiceObject {
  objectId: string;
  fields: InvoiceFields;
}

/** 查詢 USDC 餘額（合計所有持有的 USDC coin 物件） */
export function useUsdcBalance() {
  const account = useCurrentAccount();
  const client = useCurrentClient();
  const [balance, setBalance] = useState<bigint>(0n);
  const [isLoading, setIsLoading] = useState(false);

  const fetch = useCallback(async () => {
    if (!account?.address) { setBalance(0n); return; }
    setIsLoading(true);
    try {
      const res = await client.getBalance({
        owner: account.address,
        coinType: USDC_TYPE,
      });
      setBalance(BigInt(res.totalBalance ?? 0));
    } catch (e) {
      console.error('useUsdcBalance error:', e);
      // getBalance may fail if coin type not found → treat as 0
      setBalance(0n);
    } finally {
      setIsLoading(false);
    }
  }, [account, client]);

  useEffect(() => { fetch(); }, [fetch]);
  return { balance, isLoading, refetch: fetch };
}

/** 查詢 TAX_COIN 餘額 */
export function useTaxBalance() {
  const account = useCurrentAccount();
  const client = useCurrentClient();
  const [balance, setBalance] = useState<bigint>(0n);
  const [isLoading, setIsLoading] = useState(false);

  const fetch = useCallback(async () => {
    if (!account?.address) { setBalance(0n); return; }
    setIsLoading(true);
    try {
      const res = await client.getBalance({
        owner: account.address,
        coinType: TAX_COIN_TYPE,
      });
      setBalance(BigInt(res.totalBalance ?? 0));
    } catch {
      setBalance(0n);
    } finally {
      setIsLoading(false);
    }
  }, [account, client]);

  useEffect(() => { fetch(); }, [fetch]);
  return { balance, isLoading, refetch: fetch };
}

/** 查詢持有的 Invoice 彩券物件 */
export function useMyInvoices() {
  const account = useCurrentAccount();
  const client = useCurrentClient();
  const [invoices, setInvoices] = useState<InvoiceObject[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetch = useCallback(async () => {
    if (!account?.address) { setInvoices([]); return; }
    setIsLoading(true);
    try {
      const res = await client.getOwnedObjects({
        owner: account.address,
        filter: { StructType: INVOICE_TYPE },
        options: { showContent: true },
      });

      const parsed: InvoiceObject[] = (res.data ?? [])
        .map((item) => {
          const content = item.data?.content;
          if (!content || content.dataType !== 'moveObject') return null;
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const f = content.fields as Record<string, any>;
          return {
            objectId: item.data?.objectId ?? '',
            fields: {
              id: f.id,
              invoice_number: Number(f.invoice_number ?? 0),
              protocol: f.protocol as string,
              amount: Number(f.amount ?? 0),
              timestamp: f.timestamp?.toString() ?? '',
            },
          };
        })
        .filter(Boolean) as InvoiceObject[];

      setInvoices(parsed);
    } catch (e) {
      console.error('useMyInvoices error:', e);
      setInvoices([]);
    } finally {
      setIsLoading(false);
    }
  }, [account, client]);

  useEffect(() => { fetch(); }, [fetch]);
  return { invoices, isLoading, refetch: fetch };
}

/** 查詢 Invoice System 的抽獎池資訊 */
export function useLotteryPool(systemObjectId: string) {
  const client = useCurrentClient();
  const [pool, setPool] = useState<{ poolSize: bigint; winnerIndex: number | null } | null>(null);

  const fetch = useCallback(async () => {
    if (!systemObjectId || systemObjectId.includes('TODO')) return;
    try {
      const res = await client.getObject({
        id: systemObjectId,
        options: { showContent: true },
      });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const f = res.data?.content?.dataType === 'moveObject' ? (res.data.content.fields as Record<string, any>) : null;
      if (!f) return;
      setPool({
        poolSize: BigInt(f.count ?? 0),
        winnerIndex: f.winner != null ? Number(f.winner) : null,
      });
    } catch (e) {
      console.error('useLotteryPool error:', e);
    }
  }, [systemObjectId, client]);

  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => { fetch(); }, [fetch]);
  return { pool, refetch: fetch };
}

/** 取出目前錢包持有的第一顆 USDC Coin Object ID（交易用） */
export function useFirstUsdcCoin() {
  const account = useCurrentAccount();
  const client = useCurrentClient();
  const [coinId, setCoinId] = useState<string | null>(null);

  const fetch = useCallback(async () => {
    if (!account?.address) { setCoinId(null); return; }
    try {
      const res = await client.getOwnedObjects({
        owner: account.address,
        filter: { StructType: `0x2::coin::Coin<${USDC_TYPE}>` },
        options: { showContent: false },
      });
      const first = res.data?.[0]?.data?.objectId;
      setCoinId(first ?? null);
    } catch {
      setCoinId(null);
    }
  }, [account, client]);

  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => { fetch(); }, [fetch]);
  return { coinId, refetch: fetch };
}

/** 取出目前錢包持有的第一顆 TAX_COIN Object ID（交易用） */
export function useFirstTaxCoin() {
  const account = useCurrentAccount();
  const client = useCurrentClient();
  const [coinId, setCoinId] = useState<string | null>(null);

  const fetch = useCallback(async () => {
    if (!account?.address) { setCoinId(null); return; }
    try {
      const res = await client.getOwnedObjects({
        owner: account.address,
        filter: { StructType: `0x2::coin::Coin<${TAX_COIN_TYPE}>` },
        options: { showContent: false },
      });
      const first = res.data?.[0]?.data?.objectId;
      setCoinId(first ?? null);
    } catch {
      setCoinId(null);
    }
  }, [account, client]);

  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => { fetch(); }, [fetch]);
  return { coinId, refetch: fetch };
}
