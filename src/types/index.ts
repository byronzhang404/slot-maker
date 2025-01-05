export interface SlotGame {
  id: string;
  name: string;
  created_at: string;
  slots: string[][];
  is_locked: boolean;
  creator_ip: string;
}

export interface SlotMachineProps {
  slots: string[][];
  onSpin?: () => void;
  isSpinning?: boolean;
}