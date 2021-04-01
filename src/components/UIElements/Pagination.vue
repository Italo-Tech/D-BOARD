<template>
  <div class="min-h-screen w-full p-4">
    <!--TITLE-->
    <div class="section-title w-full mb-6 pt-3">
      <div class="flex flex-row items-center justify-between mb-4">
        <div class="flex flex-col">
          <div class="text-xs uppercase font-light text-gray-500">UI Elements</div>
          <div class="text-xl font-bold">Pagination</div>
        </div>
      </div>
    </div>
    <!---->
    <section class="w-full p-4 mb-6 rounded-lg bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-800">
      <div class="flex flex-row items-center justify-between mb-6">
        <div class="flex flex-col">
          <div class="text-sm font-light text-gray-500">Default Progress bars</div>
          <div class="text-sm font-bold">
            <span>Use any component or text for the <code>Previous</code> and <code>Next</code> props</span>
          </div>
        </div>
      </div>
      <div class="flex flex-col w-full">
        <div class="flex flex-wrap items-center justify-start space-x-2 pagination">
          <button class="btn btn-default bg-transparent hover:bg-gray-200 text-gray-900 dark:text-white focus:outline-none">Previous</button>
          <button class="btn btn-circle bg-transparent hover:bg-gray-200 text-gray-900 dark:text-white focus:outline-none">1</button>
          <button class="btn btn-circle bg-transparent hover:bg-gray-200 text-gray-900 dark:text-white focus:outline-none">2</button>
          <button class="btn btn-circle bg-transparent hover:bg-gray-200 text-gray-900 dark:text-white focus:outline-none">3</button>
          <button class="btn btn-circle bg-transparent hover:bg-gray-200 text-gray-900 dark:text-white focus:outline-none">4</button>
          <button class="btn btn-circle bg-blue-500 hover:bg-blue-600 text-white focus:outline-none">5</button>
          <button class="btn btn-circle bg-transparent hover:bg-gray-200 text-gray-900 dark:text-white focus:outline-none">6</button>
          <button class="btn btn-circle bg-transparent hover:bg-gray-200 text-gray-900 dark:text-white focus:outline-none">7</button>
          <button class="btn btn-circle bg-transparent hover:bg-gray-200 text-gray-900 dark:text-white focus:outline-none">8</button>
          <button class="btn btn-circle bg-transparent hover:bg-gray-200 text-gray-900 dark:text-white focus:outline-none">9</button>
          <button class="btn btn-circle bg-transparent hover:bg-gray-200 text-gray-900 dark:text-white focus:outline-none">10</button>
          <button class="btn btn-default bg-transparent hover:bg-gray-200 text-gray-900 dark:text-white focus:outline-none">Next</button>
        </div>
      </div>
    </section>

    <section class="w-full p-4 mb-6 rounded-lg bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-800">
      <div class="flex flex-row items-center justify-between mb-6">
        <div class="flex flex-col">
          <div class="text-sm font-light text-gray-500">Default Progress bars</div>
          <div class="text-sm font-bold">
            <span>Use any component or text for the <code>Previous</code> and <code>Next</code> props</span>
          </div>
        </div>
      </div>
      <div class="flex flex-col w-full mt-2">
        <div class="flex flex-wrap items-center justify-start space-x-2 pagination">
          <button class="btn btn-default bg-transparent hover:bg-gray-200 text-gray-900 dark:text-white focus:outline-none">
            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="stroke-current" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><polyline points="15 18 9 12 15 6"></polyline></svg>
          </button>
          <button class="btn btn-circle bg-transparent hover:bg-gray-200 text-gray-900 dark:text-white focus:outline-none">1</button>
          <button class="btn btn-circle bg-transparent hover:bg-gray-200 text-gray-900 dark:text-white focus:outline-none">2</button>
          <button class="btn btn-circle bg-transparent hover:bg-gray-200 text-gray-900 dark:text-white focus:outline-none">3</button>
          <button class="btn btn-circle bg-transparent hover:bg-gray-200 text-gray-900 dark:text-white focus:outline-none">4</button>
          <button class="btn btn-circle bg-blue-500 hover:bg-blue-600 text-white focus:outline-none">5</button>
          <button class="btn btn-circle bg-transparent hover:bg-gray-200 text-gray-900 dark:text-white focus:outline-none">6</button>
          <button class="btn btn-circle bg-transparent hover:bg-gray-200 text-gray-900 dark:text-white focus:outline-none">7</button>
          <button class="btn btn-circle bg-transparent hover:bg-gray-200 text-gray-900 dark:text-white focus:outline-none">8</button>
          <button class="btn btn-circle bg-transparent hover:bg-gray-200 text-gray-900 dark:text-white focus:outline-none">9</button>
          <button class="btn btn-circle bg-transparent hover:bg-gray-200 text-gray-900 dark:text-white focus:outline-none">10</button>
          <button class="btn btn-default bg-transparent hover:bg-gray-200 text-gray-900 dark:text-white focus:outline-none">
            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="stroke-current" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </button>
        </div>
      </div>
      <div class="flex flex-col w-full mt-2">
        <div class="flex flex-wrap items-center justify-start space-x-2 pagination">
          <button class="btn btn-default bg-transparent hover:bg-gray-200 text-gray-900 dark:text-white focus:outline-none">
            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="stroke-current" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><polyline points="11 17 6 12 11 7"></polyline><polyline points="18 17 13 12 18 7"></polyline></svg>
          </button>
          <button class="btn btn-circle bg-transparent hover:bg-gray-200 text-gray-900 dark:text-white focus:outline-none">1</button>
          <button class="btn btn-circle bg-transparent hover:bg-gray-200 text-gray-900 dark:text-white focus:outline-none">2</button>
          <button class="btn btn-circle bg-transparent hover:bg-gray-200 text-gray-900 dark:text-white focus:outline-none">3</button>
          <button class="btn btn-circle bg-transparent hover:bg-gray-200 text-gray-900 dark:text-white focus:outline-none">4</button>
          <button class="btn btn-circle bg-blue-500 hover:bg-blue-600 text-white focus:outline-none">5</button>
          <button class="btn btn-circle bg-transparent hover:bg-gray-200 text-gray-900 dark:text-white focus:outline-none">6</button>
          <button class="btn btn-circle bg-transparent hover:bg-gray-200 text-gray-900 dark:text-white focus:outline-none">7</button>
          <button class="btn btn-circle bg-transparent hover:bg-gray-200 text-gray-900 dark:text-white focus:outline-none">8</button>
          <button class="btn btn-circle bg-transparent hover:bg-gray-200 text-gray-900 dark:text-white focus:outline-none">9</button>
          <button class="btn btn-circle bg-transparent hover:bg-gray-200 text-gray-900 dark:text-white focus:outline-none">10</button>
          <button class="btn btn-default bg-transparent hover:bg-gray-200 text-gray-900 dark:text-white focus:outline-none">
            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="stroke-current" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><polyline points="13 17 18 12 13 7"></polyline><polyline points="6 17 11 12 6 7"></polyline></svg>
          </button>
        </div>
      </div>
      <div class="flex flex-col w-full mt-2">
        <div class="flex flex-wrap items-center justify-start space-x-2 pagination">
          <button class="btn btn-default bg-transparent hover:bg-gray-200 text-gray-900 dark:text-white focus:outline-none">
            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="stroke-current" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
          </button>
          <button class="btn btn-circle bg-transparent hover:bg-gray-200 text-gray-900 dark:text-white focus:outline-none">1</button>
          <button class="btn btn-circle bg-transparent hover:bg-gray-200 text-gray-900 dark:text-white focus:outline-none">2</button>
          <button class="btn btn-circle bg-transparent hover:bg-gray-200 text-gray-900 dark:text-white focus:outline-none">3</button>
          <button class="btn btn-circle bg-transparent hover:bg-gray-200 text-gray-900 dark:text-white focus:outline-none">4</button>
          <button class="btn btn-circle bg-blue-500 hover:bg-blue-600 text-white focus:outline-none">5</button>
          <button class="btn btn-circle bg-transparent hover:bg-gray-200 text-gray-900 dark:text-white focus:outline-none">6</button>
          <button class="btn btn-circle bg-transparent hover:bg-gray-200 text-gray-900 dark:text-white focus:outline-none">7</button>
          <button class="btn btn-circle bg-transparent hover:bg-gray-200 text-gray-900 dark:text-white focus:outline-none">8</button>
          <button class="btn btn-circle bg-transparent hover:bg-gray-200 text-gray-900 dark:text-white focus:outline-none">9</button>
          <button class="btn btn-circle bg-transparent hover:bg-gray-200 text-gray-900 dark:text-white focus:outline-none">10</button>
          <button class="btn btn-default bg-transparent hover:bg-gray-200 text-gray-900 dark:text-white focus:outline-none">
            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="stroke-current" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Pagination"
}

</script>

<style scoped>

</style>
