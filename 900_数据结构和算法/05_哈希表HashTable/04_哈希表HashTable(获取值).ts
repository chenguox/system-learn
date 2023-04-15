class HashTable<T = any> {
  private storage: [string, T][][] = [];
  private length: number = 7;
  private count: number = 0;

  private hashFunc(key: string, max: number) {
    let hashCode = 0;
    const length = key.length;
    for (let i = 0; i < length; i++) {
      hashCode = 31 * hashCode + key.charCodeAt(i);
    }

    const index = hashCode % max;

    return index;
  }

  // 插入/修改
  put(key: string, value: T) {
    const index = this.hashFunc(key, this.length);
    let bucket = this.storage[index];
    if (!bucket) {
      bucket = [];
      this.storage[index] = bucket;
    }
    let isCover = false;
    for (let i = 0; i < bucket.length; i++) {
      const tuple = bucket[i];
      const tupleKey = tuple[0];
      // 4.1 如果放置过，那么就是替换操作
      if (tupleKey === key) {
        tuple[1] = value;
        isCover = true;
      }
    }
    if (!isCover) {
      bucket.push([key, value]);
      this.count++;
    }
  }

  // 获取数据
  get(key: string): T | undefined {
    // 1. 根据key获取hashCode（也就是index）
    const index = this.hashFunc(key, this.length);

    // 2. 根据index取出bucket
    const bucket = this.storage[index];

    // 3. 如果取出的 bucket 为 null，那么说明这个位置之前并没有插入过数据
    if (!bucket) return undefined;

    // 4. 有了 bucket, 就遍历，并且如果找到，就将对应的 value 返回
    for (let i = 0; i < bucket.length; i++) {
      const tuple = bucket[i];
      const tupleKey = tuple[0];
      const tupleValue = tuple[1];
      if (tupleKey === key) {
        return tupleValue;
      }
    }

    // 5. 没有找到，返回 undefined
    return undefined;
  }
}
const hashTable = new HashTable();
hashTable.put("aaa", 100);
hashTable.put("aaa", 200);
hashTable.put("bbb", 300);
hashTable.put("ccc", 400);

console.log(hashTable.get("aaa"));
console.log(hashTable.get("bbb"));
console.log(hashTable.get("ccc"));

console.log(hashTable.get("ddd"));
console.log(hashTable.get("abc"));

export default HashTable;
