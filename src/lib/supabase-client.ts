import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// 初始化状态追踪
let isInitialized = false;
let initPromise: Promise<void> | null = null;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// 初始化函数
const initialize = async () => {
  if (isInitialized) return;
  
  try {
    // 测试连接
    await supabase.from('slot_games').select('count').single();
    isInitialized = true;
  } catch (error) {
    console.error('Supabase initialization error:', error);
    throw error;
  }
};

// 确保初始化完成的包装函数
export const ensureInitialized = async () => {
  if (isInitialized) return;
  
  if (!initPromise) {
    initPromise = initialize();
  }
  
  await initPromise;
};