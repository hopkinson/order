/**
 * @Date:   2017-11-15T15:03:45+08:00
 * @Last modified time: 2017-11-15T15:14:33+08:00
 */
 export default (model, router, permission, actions) => {
   router
     .get(`/${model}`, actions.find)
     .post(`/${model}`, permission, actions.create)
     .get(`/${model}/:id`, permission, actions.findById)
     .put(`/${model}/:id`, permission, actions.updateById)
     .delete(`/${model}/:id`, permission, actions.deleteById)
 }
