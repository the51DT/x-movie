import menuMockupData from './mock/menu.json'

export function getMenus() {
  return new Promise(function(resolve, reject) {
    resolve(_.cloneDeep(menuMockupData))
  })
}

export function getMenu(menuId) {
  return new Promise(function(resolve, reject) {
    let menu = menuMockupData.filter(m => m.menuId === menuId)
    resolve(menu[0])
  })
}
