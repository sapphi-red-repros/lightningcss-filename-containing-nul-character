import { bundleAsync } from "lightningcss";

const result = await bundleAsync({
  filename: 'foo\0bar.css',
  resolver: {
    read(file) {
      console.log('file', JSON.stringify(file))
      return `.foo { color: blue }`
    }
  }
})
console.log()
console.log(result.code.toString())
