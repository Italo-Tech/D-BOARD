<template>
  <div class="min-h-screen w-full p-4">
    <!--TITLE-->
    <div class="section-title w-full mb-6 pt-3">
      <div class="flex flex-row items-center justify-between mb-4">
        <div class="flex flex-col">
          <div class="text-xs uppercase font-light text-gray-500">UI Elements</div>
          <div class="text-xl font-bold">Breadcrumbs</div>
        </div>
      </div>
    </div>

    <!--Example 1-->
    <section class="w-full p-4 mb-4 rounded-lg bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-800">
      <div class="flex flex-row items-center justify-between mb-6">
        <div class="flex flex-col">
          <div class="text-sm font-light text-gray-500">Default Breadcrumbs</div>
          <div class="text-sm font-bold">
            <span>Use the <code>&lt;Breadcrumbs /&gt;</code> component for Breadcrumbs</span>
          </div>
        </div>
      </div>
      <!--home-->
      <div class="flex flex-row mb-4">
        <div class="w-full">
          <nav class="w-full flex">
            <ol class="list-none flex flex-row items-center justify-start">
              <li class="flex items-center">
                <a href="#" class="mr-2">Home</a>
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <!--home -> second Level-->
      <div class="flex flex-row mb-4">
        <div class="w-full">
          <nav class="w-full flex">
            <ol class="list-none flex flex-row items-center justify-start">
              <li class="flex items-center">
                <a href="#" class="mr-2">Home</a>
                <i class='bx bxs-right-arrow-alt h-3 w-3 mr-2 stroke-current'></i>
              </li>
              <li class="flex items-center">
                <a href="#" class="mr-2">Second Level</a>
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <!--home -> second Level -> Third Level-->
      <div class="flex flex-row mb-4">
        <div class="w-full">
          <nav class="w-full flex">
            <ol class="list-none flex flex-row items-center justify-start">
              <li class="flex items-center">
                <a href="#" class="mr-2">Home</a>
                <i class='bx bxs-right-arrow-alt h-3 w-3 mr-2 stroke-current'></i>
              </li>
              <li class="flex items-center">
                <a href="#" class="mr-2">Home</a>
                <i class='bx bxs-right-arrow-alt h-3 w-3 mr-2 stroke-current'></i>
              </li>
              <li class="flex items-center">
                <a href="#" class="mr-2">Second Level</a>
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </section>

    <!--Example 2-->
    <section class="w-full p-4 mb-4 rounded-lg bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-800">
      <div class="flex flex-row items-center justify-between mb-6">
        <div class="flex flex-col">
          <div class="text-sm font-light text-gray-500">Home icon</div>
          <div class="text-sm font-bold">
            <span>Use the <code>home</code> prop for breadcrumbs. Change the icon using the <code>icon</code> prop.</span>
          </div>
        </div>
      </div>
      <!--home-->
      <div class="flex flex-row mb-4">
        <div class="w-full">
          <nav class="w-full flex">
            <ol class="list-none flex flex-row items-center justify-start">
              <li class="flex items-center">
                <i class="fas fa-home mr-2"></i>
                <a href="#" class="mr-2">Home</a>
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <!--home -> second Level-->
      <div class="flex flex-row mb-4">
        <div class="w-full">
          <nav class="w-full flex">
            <ol class="list-none flex flex-row items-center justify-start">
              <li class="flex items-center">
                <i class="fas fa-home mr-2"></i>
                <a href="#" class="mr-2">Home</a>
                <i class='bx bxs-right-arrow-alt h-3 w-3 mr-2 stroke-current'></i>
              </li>
              <li class="flex items-center">
                <a href="#" class="mr-2">Second Level</a>
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <!--home -> second Level -> Third Level-->
      <div class="flex flex-row mb-4">
        <div class="w-full">
          <nav class="w-full flex">
            <ol class="list-none flex flex-row items-center justify-start">
              <li class="flex items-center">
                <i class="fas fa-home mr-2"></i>
                <a href="#" class="mr-2">Home</a>
                <i class='bx bxs-right-arrow-alt h-3 w-3 mr-2 stroke-current'></i>
              </li>
              <li class="flex items-center">
                <a href="#" class="mr-2">Home</a>
                <i class='bx bxs-right-arrow-alt h-3 w-3 mr-2 stroke-current'></i>
              </li>
              <li class="flex items-center">
                <a href="#" class="mr-2">Second Level</a>
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Breadcrumbs"
}
</script>

<style scoped>

</style>
