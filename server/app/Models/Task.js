'use strict'

const Model = use('Model')

class Task extends Model {
    user(){
        return this.belongsTo('App/Models/Project');
    }
}

module.exports = Task
