//EXECUTE A JOB
data = JSON.stringify({"workflow_id": "b472e2eb553fa0d1","history_id": "7b668ee810f6cf46", "ds_map": {"0": {"src": "hda", "id": "72ad249754f05d26"}}})

$.ajax({
  type: "POST", contentType: 'application/json; charset=utf-8',
  url : "http://192.168.0.99/galaxydev/api/workflows/b472e2eb553fa0d1/invocations",
  data:data
});

//GET HISTORY CONTENT
http://192.168.0.99/galaxydev/api/histories/7b668ee810f6cf46/contents

//GET WORKFLOW COTENTS
http://192.168.0.99/galaxydev/api/workflows/b472e2eb553fa0d1/download
http://192.168.0.99/galaxydev/api/workflows/b472e2eb553fa0d1/invocations
