function LoadShader(fileName, index, callback) {
  jQuery.get(fileName, (data) => {
    callback(data, index);
  });
}

export function LoadShaders(fileNames, callback, errorCallback) {
  let loaded_files = 0;
  let shader_files = [];
  for (let file_index = 0; file_index < fileNames.length; file_index++) {
      LoadShader(fileNames[file_index], file_index, (data, shader_index) => {
        shader_files[shader_index] = data;

        loaded_files++;
        if (loaded_files == fileNames.length) {
          let total_shader_data = '';
          for (let shader_data of shader_files) {
            total_shader_data += shader_data;
          }
          callback(total_shader_data);
        }
      });

  }
}
