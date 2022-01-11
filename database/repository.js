
module.exports.selectById = async (data) => {
  let response = { status: false };
  try {
    const doc = await data.model.findById(data._id, data.projection);
    response = {
      status: true,
      result: doc,
    };
  } catch(err) {
    console.log('ERROR-repository-selectById: ', err);
  }
  return response;
}

module.exports.selectAll = async (data) => {
  let response = { status: false };
  try {
    // const doc = await data.model.find(data.findQuery, data.projection, {skip: data.skip, limit: data.limit});
    const doc = await data.model.find(data.findQuery, data.projection).skip(data.skip).limit(data.limit);
    response = {
      status: true,
      result: doc,
    };
  } catch(err) {
    console.log('ERROR-repository-selectAll: ', err);
  }
  return response;
}