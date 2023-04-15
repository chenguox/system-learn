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
    // 1. 根据传入的 key 获取对应的 hashCode (也就是数组的index)
    const index = this.hashFunc(key, this.length);

    // 2. 从哈希表的 index 位置中取出桶（另一个数组）
    let bucket = this.storage[index];

    // 3. 查看上一步的 bucket 是否为 null
    if (!bucket) {
      bucket = [];
      this.storage[index] = bucket;
    }

    // 4. 查看之前桶中之前已经放置过 key 对应的 value
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

    // 4.2 如果没有，就是插入新数据
    if (!isCover) {
      bucket.push([key, value]);
      // 4.3. 总数量发生改变
      this.count++;
    }
  }
}

const hashTable = new HashTable();
hashTable.put("aaa", 100);
hashTable.put("aaa", 200);
hashTable.put("bbb", 300);

const tuple: [number, number][][] = [[[111, 222]]];
console.log(hashTable);

export default HashTable;
