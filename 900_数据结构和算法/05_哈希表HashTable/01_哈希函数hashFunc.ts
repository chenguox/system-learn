/**
 * 哈希函数，将 key 映射成 index
 * @param key 转换的key
 * @param max 数组的长度（最大的数值）
 * @returns 索引值
 */
function hashFunc(key: string, max: number): number {
  // 1.计算hashcode, 霍纳法则
  let hashCode = 0;
  const lenght = key.length;
  for (let i = 0; i < lenght; i++) {
    hashCode = 31 * hashCode + key.charCodeAt(i);
  }

  // 2.进行压缩，取余操作，求出索引
  const index = hashCode % max;

  return index;
}

// 测试哈希函数
// loadFactor = 4 / 7 = 0.57...
console.log(hashFunc("abc", 7)); // 6
console.log(hashFunc("cba", 7)); // 1
console.log(hashFunc("nba", 7)); // 2
console.log(hashFunc("mba", 7)); // 0

// loadFactor = 6 / 7 = 0.85...
console.log(hashFunc("aaa", 7)); // 1
console.log(hashFunc("bbb", 7)); // 0

export default hashFunc;
