export const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const formatNumberWithCommas = (number: number) => {
  if (!isNaN(number)) {
    return '¥' + number.toLocaleString('en-US')
  }
  return 'null'
}

export const isCustomHeaderFooter = (location: { pathname: string }, routerPaths: any[]) => {
  return routerPaths.some((page) => {
    const regex = new RegExp(`^${page.replace(/:[^\s/]+/g, '[^\\s/]+')}$`)
    return regex.test(location.pathname)
  })
}
// const customHeaderFooter = isCustomHeaderFooter(location, [ROUTER.HOME_PAGE, ROUTER.ABOUT_PAGE])
