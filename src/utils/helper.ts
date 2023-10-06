//Reg
export const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const patternURL = /^\/events\/[a-zA-Z0-9-]+$/

// Function
export const formatNumberWithCommas = (number: number) => {
  if (!isNaN(number)) {
    return '¥' + number.toLocaleString('en-US')
  }
  return 0
}

export const sortDataByIdAscending = (data: any[]) => {
  return data.length > 0 ? [...data].sort((a, b) => a.id - b.id) : []
}
