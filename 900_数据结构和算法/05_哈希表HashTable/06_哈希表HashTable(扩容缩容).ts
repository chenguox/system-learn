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

      // 发现loadFactor比例已经大于0.75, 那么就直接扩容
      const loadFactor = this.count / this.length;
      if (loadFactor > 0.75) {
        this.resize(this.length * 2);
      }
    }
  }

  // 获取数据
  get(key: string): T | undefined {
    const index = this.hashFunc(key, this.length);
    const bucket = this.storage[index];

    if (!bucket) return undefined;

    for (let i = 0; i < bucket.length; i++) {
      const tuple = bucket[i];
      const tupleKey = tuple[0];
      const tupleValue = tuple[1];
      if (tupleKey === key) {
        return tupleValue;
      }
    }

    return undefined;
  }

  // 删除操作
  delete(key: string): T | undefined {
    const index = this.hashFunc(key, this.length);

    const bucket = this.storage[index];

    if (!bucket) return undefined;

    for (let i = 0; i < bucket.length; i++) {
      const tuple = bucket[i];
      const tupleKey = tuple[0];
      const tupleValue = tuple[1];
      if (tupleKey === key) {
        bucket.splice(i, 1);
        this.count--;

        // 如果loadFactor小于0.25, 缩容操作
        const loadFactor = this.count / this.length;
        if (loadFactor < 0.25 && this.length > 7) {
          this.resize(Math.floor(this.length / 2));
        }

        return tupleValue;
      }
    }

    return undefined;
  }

  // 扩容操作
  resize(newLength: number) {
    // 设置新的长度
    this.length = newLength;

    // 获取原来所有的数据，并且重新放入到新的容量数组中
    // 1. 对数据进行初始化操作
    const oldStorage = this.storage;
    this.storage = [];
    this.count = 0;

    // 2. 获取原来数据，放入新的数组中
    oldStorage.forEach((bucket) => {
      if (!bucket) return;

      for (let i = 0; i < bucket.length; i++) {
        const tuple = bucket[i];
        this.put(tuple[0], tuple[1]);
      }
    });
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

console.log("delete:", hashTable.delete("aaa"));
console.log("get:", hashTable.get("aaa"));

export default HashTable;
