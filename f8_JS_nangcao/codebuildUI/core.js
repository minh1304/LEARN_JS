export default function html([first,...string],... values) {
    return values.reduce(
        (acc,cur) => acc.concat(cur,string.shift()),
        [first]
    )
    .filter(x => x && x !== true || x===0)
    .join('')
}