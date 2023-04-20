let container = null
export async function bootstrap(){
  console.log("应用启动")
}

export async function mount() {
  console.log("正在挂载")
  container = document.createElement('div')
  container.id = "demojsId"
  container.innerHTML = "hello demojs"
  document.body.appendChild(container)
}

export async function unmount() {
  console.log("正在卸载")
  document.body.removeChild(container)
}