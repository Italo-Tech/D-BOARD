<template>
  <div class="min-h-screen w-full p-4">
    <!--TITLE-->
    <div class="section-title w-full mb-6 pt-3">
      <div class="flex flex-row items-center justify-between mb-4">
        <div class="flex flex-col">
          <div class="text-xs uppercase font-light text-gray-500">Forms</div>
          <div class="text-xl font-bold">Sample forms</div>
        </div>
      </div>
    </div>

    <!--Contact us-->
    <section class="w-full p-4 mb-4 rounded-lg bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-800">
      <div class="flex flex-row items-center justify-between mb-6">
        <div class="flex flex-col">
          <div class="text-sm font-light text-gray-500">Contact us</div>
          <div class="text-sm font-bold">
            <span>Sample contact us form</span>
          </div>
        </div>
      </div>
      <div class="w-full flex">
        <div class="w-full lg:w-1/2">
          <div class="flex flex-col">
            <form action="" class="form flex flex-wrap w-full">
              <div class="w-full">
                <!--Name-->
                <div class="flex flex-col mb-4">
                  <div class="mb-2">Name</div>
                  <input name="name" type="text" class="block text-sm text-gray-500 leading-none w-full px-2 py-3 border border-gray-500 rounded focus:outline-none" placeholder="Enter you name">
                </div>
                <!--Email-->
                <div class="flex flex-col mb-4">
                  <div class="mb-2">Email</div>
                  <input name="name" type="email" class="block text-sm text-gray-500 leading-none w-full px-2 py-3 border border-gray-500 rounded focus:outline-none" placeholder="Enter you email">
                </div>
                <!--Message-->
                <div class="flex flex-col mb-4">
                  <div class="mb-2">Message</div>

                  <textarea class="block text-sm text-gray-500 leading-none w-full px-2 py-3 border border-gray-500 rounded focus:outline-none"
                            cols="30" rows="4" placeholder="Enter you message...">

                  </textarea>
                </div>
              </div>
              <input type="submit" class="btn btn-default bg-blue-500 hover:bg-blue-600 text-white rounded-md cursor-pointer focus:outline-none">
            </form>
          </div>
        </div>
      </div>
    </section>

    <!--Login-->
    <section class="w-full p-4 mb-4 rounded-lg bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-800">
      <div class="flex flex-row items-center justify-between mb-6">
        <div class="flex flex-col">
          <div class="text-sm font-light text-gray-500">Login</div>
          <div class="text-sm font-bold">
            <span>Sample login form</span>
          </div>
        </div>
      </div>
      <div class="w-full flex">
        <div class="w-full lg:w-1/2">
          <div class="flex flex-col">
            <form action="" class="form flex flex-wrap w-full">
              <div class="w-full">
                <!--Email-->
                <div class="flex flex-col mb-4">
                  <div class="mb-2">Email</div>
                  <input name="name" type="Email" class="block text-sm text-gray-500 leading-none w-full px-2 py-3 border border-gray-500 rounded focus:outline-none" placeholder="Enter you email">
                </div>
                <!--Password-->
                <div class="flex flex-col mb-4">
                  <div class="mb-2">Password</div>
                  <input name="name" type="password" class="block text-sm text-gray-500 leading-none w-full px-2 py-3 border border-gray-500 rounded focus:outline-none" placeholder="Enter you email">
                </div>
              </div>
              <input type="submit" class="btn btn-default bg-blue-500 hover:bg-blue-600 text-white rounded-md cursor-pointer focus:outline-none">
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "SampleForm"
}
</script>

<style scoped>

</style>