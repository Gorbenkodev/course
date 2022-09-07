// const loader = document.getElementById('loader_inner');

// setTimeout(() => {
//   loader.remove()
// }, 1000)

// export { loader }

export const asyncProvider = async (func) => {
  let body = document.querySelector('body');

  let loadingEl = document.createElement('loading');

  loadingEl.innerHTML = 'Loading popular movies';

  body.append(loadingEl);

  

    try {
      if (typeof func === "function") {
        return await func();
      }
    } catch (error) {
      console.log('Error in provider:', { error });
    }finally {
      loadingEl.remove()
    }
    console.log(loadingEl)
}
