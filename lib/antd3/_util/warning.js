export default function (valid, component, message) {
  if (valid) {
    return
  }
  console.warn('[antd-compatible: '.concat(component, '] ').concat(message))
}
