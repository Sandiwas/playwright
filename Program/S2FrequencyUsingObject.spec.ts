const arr = [1, 2, 44, 1, 2, 3, 45, 78, 77, 77, 45];
const map=new Map<number,number>();

for(let i=0;i<arr.length;i++){
const count=1;
    if(!map.has(arr[i])){
        map.set(arr[i],count);
    }else{
        map.set(arr[i],map.get(arr[i])!+count);
    }
}
for(const [key,value] of map){
    if(value>1){
console.log(`${key} -> ${value}`)
    }
}

/* 
| Java          | TypeScript |
| ------------- | ---------- |
| HashMap       | Map        |
| containsKey() | has()      |
| get()         | get()      |
| put()         | set()      |
 */
// My recommendation for you
// Since your background is Java + Selenium, don't learn TypeScript as a completely new language. Think of it like this:

/* | Java                 | TypeScript    |
| -------------------- | ------------- |
| HashMap              | Map           |
| ArrayList            | Array         |
| System.out.println() | console.log() |
| equals()             | `===`         |
| put()                | set()         |
| containsKey()        | has()         |
| get()                | get()         |
| for loop             | Same          |
| if/else              | Same          |
| switch               | Same          |
| methods              | Same concept  |
| classes              | Same concept  |
| inheritance          | Same concept  |
| interfaces           | Same concept  | */
