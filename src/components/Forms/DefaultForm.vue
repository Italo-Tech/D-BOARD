<template>
  <div class="min-h-screen w-full p-4">
    <!--TITLE-->
    <div class="section-title w-full mb-6 pt-3">
      <div class="flex flex-row items-center justify-between mb-4">
        <div class="flex flex-col">
          <div class="text-xs uppercase font-light text-gray-500">Forms</div>
          <div class="text-xl font-bold">Input</div>
        </div>
      </div>
    </div>

    <!--Regular-->
    <section class="w-full p-4 mb-4 rounded-lg bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-800">
      <div class="flex flex-row items-center justify-between mb-6">
        <div class="flex flex-col">
          <div class="text-sm font-light text-gray-500">Regular</div>
          <div class="text-sm font-bold">
            <span>Text inputs</span>
          </div>
        </div>
      </div>
      <div class="flex flex-col lg:flex-row lg:flex-wrap w-full lg:space-x-4">
        <div class="w-full lg:w-1/4">
          <div class=" flex flex-col mb-4 text-gray-500">
            <div class="mb-2">Label</div>
            <input name="name" type="text" class="block text-sm leading-none w-full appearance-none bg-white border px-2 py-3 rounded border-gray-500 focus:outline-none" placeholder="Enter something...">
            <div class="text-xs leading-none whitespace-normal text-gray-400 mt-2">This is a hint</div>
          </div>
        </div>
        <div class="w-full lg:w-1/4">
          <div class=" flex flex-col mb-4 text-gray-500">
            <div class="mb-2">First Name</div>
            <input name="name" type="text" class="block text-sm leading-none w-full appearance-none bg-white border px-2 py-3 rounded border-red-500 focus:outline-black" placeholder="Enter something...">
            <div class="text-xs leading-none whitespace-normal text-red-400 mt-2">First name is required</div>
          </div>
        </div>
        <div class="w-full lg:w-1/4">
          <div class=" flex flex-col mb-4 text-gray-500">
            <div class="mb-2">First Name</div>
            <input name="name" type="text" class="block text-sm leading-none w-full appearance-none bg-white border px-2 py-3 rounded border-green-500 focus:outline-none" placeholder="Enter something...">
            <div class="text-xs leading-none whitespace-normal text-green-400 mt-2">First name is required</div>
          </div>
        </div>
      </div>
    </section>

    <!--Inline-->
    <section class="w-full p-4 mb-4 rounded-lg bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-800">
      <div class="flex flex-row items-center justify-between mb-6">
        <div class="flex flex-col">
          <div class="text-sm font-light text-gray-500">Inline</div>
          <div class="text-sm font-bold">
            <span>Inline Text Inputs</span>
          </div>
        </div>
      </div>

      <div class="flex flex-col lg:flex-row lg:flex-wrap w-full lg:w-1/2">
        <div class="w-full mb-4">
          <div class="flex flex-row justify-center items-center mb-4 text-gray-500">
            <div class="mr-2 whitespace-nowrap">Label</div>
            <input name="name" type="text" class="block text-sm leading-none w-full appearance-none bg-white border px-2 py-3 rounded border-gray-500 focus:outline-none" placeholder="Enter something...">
            <div class="text-xs leading-none whitespace-nowrap text-gray-400 ml-2">This is a hint</div>
          </div>
        </div>
        <div class="w-full mb-4">
          <div class="flex flex-row justify-center items-center mb-4 text-gray-500">
            <div class="mr-2 whitespace-nowrap">First Name</div>
            <input name="name" type="text" class="block text-sm leading-none w-full appearance-none bg-white border px-2 py-3 rounded border-red-500 focus:outline-none" placeholder="Enter something...">
            <div class="text-xs leading-none whitespace-nowrap text-red-400 ml-2">First Name is Required</div>
          </div>
        </div>
        <div class="w-full mb-4">
          <div class="flex flex-row justify-center items-center mb-4 text-gray-500">
            <div class="mr-2 whitespace-nowrap">First Name</div>
            <input name="name" type="text" class="block text-sm leading-none w-full appearance-none bg-white border px-2 py-3 rounded border-green-500 focus:outline-none" placeholder="Enter something...">
            <div class="text-xs leading-none whitespace-nowrap text-green-400 ml-2">First Name is Required</div>
          </div>
        </div>
      </div>
    </section>

    <!--Select-->
    <section class="w-full p-4 mb-4 rounded-lg bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-800">
      <div class="flex flex-row items-center justify-between mb-6">
        <div class="flex flex-col">
          <div class="text-sm font-light text-gray-500">Selects</div>
          <div class="text-sm font-bold">
            <span>Select Inputs</span>
          </div>
        </div>
      </div>
      <div class="flex flex-col lg:flex-row lg:flex-wrap w-full lg:space-x-4">

        <div class="w-full lg:w-1/4">
          <div class=" flex flex-col mb-4 text-gray-500">
            <div class="mb-2">Example 1</div>
            <select class="block text-sm leading-5 w-full appearance-none bg-white border px-2 py-3 rounded border-gray-500 focus:outline-none">
              <option value="">Option 1</option>
              <option value="">Option 2</option>
              <option value="">Option 3</option>
            </select>
            <div class="text-xs leading-none whitespace-nowrap text-gray-400 mt-2">This is a hint</div>
          </div>
        </div>

        <div class="w-full lg:w-1/4">
          <div class=" flex flex-col mb-4 text-gray-500">
            <div class="mb-2">Example 2</div>
            <select class="block text-sm leading-5 w-full appearance-none bg-white border px-2 py-3 rounded border-red-500 focus:outline-none">
              <option value="">Option 1</option>
              <option value="">Option 2</option>
              <option value="">Option 3</option>
            </select>
            <div class="text-xs leading-none whitespace-nowrap text-red-400 mt-2">This is a hint</div>
          </div>
        </div>

        <div class="w-full lg:w-1/4">
          <div class=" flex flex-col mb-4 text-gray-500">
            <div class="mb-2">Example 3</div>
            <select class="block text-sm leading-5 w-full appearance-none bg-white border px-2 py-3 rounded border-green-500 focus:outline-none">
              <option value="">Option 1</option>
              <option value="">Option 2</option>
              <option value="">Option 3</option>
            </select>
            <div class="text-xs leading-none whitespace-nowrap text-green-400 mt-2">This is a hint</div>
          </div>
        </div>
      </div>
    </section>

    <!--Radios-->
    <section class="w-full p-4 mb-4 rounded-lg bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-800">
      <div class="flex flex-row items-center justify-between mb-6">
        <div class="flex flex-col">
          <div class="text-sm font-light text-gray-500">Radios</div>
          <div class="text-sm font-bold">
            <span>Radio Inputs</span>
          </div>
        </div>
      </div>
      <div class="flex flex-col lg:flex-row lg:flex-wrap w-full lg:w-1/2">
        <div class="w-full">
          <div class=" flex flex-row justify-start items-center mb-4 text-gray-500">
            <div class="mr-2"> First Example</div>
            <div class="flex items-center justify-start space-x-2">
              <div class="inline-flex items-center space-x-2">
                <input type="radio" name="r1" class="form-radio text-blue-500 h-5 w-5" value="0">
                <span>Option 1</span>
              </div>
              <div class="inline-flex items-center space-x-2">
                <input type="radio" name="r1" class="form-radio text-blue-500 h-5 w-5" value="1">
                <span>Option 2</span>
              </div>
              <div class="form-success font-bold">First example is valid</div>
            </div>
          </div>
        </div>

        <div class="w-full">
          <div class=" flex flex-row justify-start items-center mb-4 text-gray-500">
            <div class="mr-2 mt-3 bg-">Second Example</div>
            <div class="flex items-center justify-start space-x-2">
              <div class="inline-flex items-center radio-item">
                <input id="ritema" type="radio" name="r1" class="text-red-500" value="0">
                <label for="ritema" class="text-red-500">Option 1</label>
              </div>

              <div class="inline-flex items-center radio-item">
                <input id="ritemb" type="radio" name="r1" class="text-red-500" value="1">
                <label for="ritemb" class="text-red-500">Option 2</label>
              </div>
              <div class="form-success mt-4 font-bold">Second is valid</div>
            </div>
          </div>
        </div>

        <div class="w-full">
          <div class=" flex flex-row justify-start items-center mb-4 text-gray-500">
            <div class="mr-2 mt-3 bg-">Third Example</div>
            <div class="flex items-center justify-start space-x-2">
              <div class="inline-flex items-center radio-item2">
                <input id="ritemc" type="radio" name="r1" class="text-green-500" value="0">
                <label for="ritemc" class="text-green-500">Option 1</label>
              </div>

              <div class="inline-flex items-center radio-item2">
                <input id="ritemd" type="radio" name="r1" class="text-green-500" value="1">
                <label for="ritemd" class="text-green-500">Option 2</label>
              </div>
              <div class="form-success mt-4 font-bold">Third example is valid</div>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
export default {
  name: "DefaultForm"
}
</script>

<style scoped>
/*Red*/
.radio-item {
  display: inline-block;
  position: relative;
  padding: 0 6px;
  margin: 10px 0 0;
}
.radio-item input[type='radio'] {
  display: none;
}
.radio-item label:before {
  content: "";
  display: inline-block;
  position: relative;
  top: 5px;
  margin: 0 5px 0 0;
  width: 20px;
  height: 20px;
  border-radius: 11px;
  border: 1px solid gray!important;
  background-color: transparent;
}
.radio-item input[type=radio]:checked + label:after {
  border-radius: 11px;
  width: 12px;
  height: 12px;
  position: absolute;
  top: 9px;
  left: 10px;
  content: " ";
  display: block;
  background: red!important;
}

/*Green*/
.radio-item2 {
  display: inline-block;
  position: relative;
  padding: 0 6px;
  margin: 10px 0 0;
}
.radio-item2 input[type='radio'] {
  display: none;
}
.radio-item2 label:before {
  content: "";
  display: inline-block;
  position: relative;
  top: 5px;
  margin: 0 5px 0 0;
  width: 20px;
  height: 20px;
  border-radius: 11px;
  border: 1px solid gray!important;
  background-color: transparent;
}
.radio-item2 input[type=radio]:checked + label:after {
  border-radius: 11px;
  width: 12px;
  height: 12px;
  position: absolute;
  top: 9px;
  left: 10px;
  content: " ";
  display: block;
  background: #35b335 !important;
}
</style>