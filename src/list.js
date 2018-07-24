let allList = [];

class List {
  constructor(title){
    this.title = title
    allList.push(this)
    this.tasks = []
  }

  static findListByName(name){
    allList.find(function(list){
      return list.title === name
    })
  }

}
