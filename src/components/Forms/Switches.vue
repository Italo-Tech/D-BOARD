<template>
  <div class="min-h-screen w-full p-4">
    <!--TITLE-->
    <div class="section-title w-full mb-6 pt-3">
      <div class="flex flex-row items-center justify-between mb-4">
        <div class="flex flex-col">
          <div class="text-xs uppercase font-light text-gray-500">Forms</div>
          <div class="text-xl font-bold">Switches</div>
        </div>
      </div>
    </div>

    <!--Default Switches-->
    <section class="w-full p-4 mb-4 rounded-lg bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-800">
      <div class="flex flex-row items-center justify-between mb-6">
        <div class="flex flex-col">
          <div class="text-sm font-light text-gray-500">Default switches</div>
          <div class="text-sm font-bold">
            <span>It's Switch component for simple switches</span>
          </div>
        </div>
      </div>
      <div class="flex flex-col lg:flex-row lg:flex-wrap w-full">
        <div class="flex items-center justify-between w-full lg:w-1/4 lg:pr-4 mb-2 lg:mb-2">
          <div class="flex flex-col">
            <div class="text-sm">API Access</div>
            <div class="text-xs text-gray-500 font-light">Enable access</div>
          </div>
          <!--switch-->
          <div>
            <div class="">
            <input type="checkbox" class="relative appearance-none bg-gray-300 outline-none" style="height: 24px; width: 52px">
          </div>
          </div>
        </div>
        <div class="flex items-center justify-between w-full lg:w-1/4 lg:pr-4 mb-2 lg:mb-2">
          <div class="flex flex-col">
            <div class="text-sm">API Access</div>
            <div class="text-xs text-gray-500 font-light">Enable access</div>
          </div>
          <!--switch-->
          <div>
            <div class="">
              <input type="checkbox" class="relative appearance-none bg-gray-300 outline-none" style="height: 24px; width: 52px">
            </div>
          </div>
        </div>
      </div>
    </section>

    <!--Switch Colors-->
    <section class="w-full p-4 mb-4 rounded-lg bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-800">
      <!--Title-->
      <div class="flex flex-row items-center justify-between mb-6">
        <div class="flex flex-col">
          <div class="text-sm font-light text-gray-500">Switch Colors</div>
          <div class="text-sm font-bold">
            <span>It's Switch component with the color prop to change the Switch color</span>
          </div>
        </div>
      </div>
      <!--Content-->
      <div class="flex flex-col lg:flex-row lg:flex-wrap w-full">
        <!--gray-->
        <div class="flex items-center justify-start w-full lg:w-1/4 lg:pr-4 mb-2 lg:mb-4">
          <div class="flex flex-col">
            <div class="text-sm">Gray</div>
            <div class="text-xs text-gray-500 font-light">Sample label</div>
          </div>
          <!--switch-->
          <div class="ml-6">
            <input type="checkbox" class="gray-color relative appearance-none bg-gray-300 outline-none" style="height: 24px; width: 52px">
          </div>
        </div>
        <!--blue-->
        <div class="flex items-center justify-start w-full lg:w-1/4 lg:pr-4 mb-2 lg:mb-4">
          <div class="flex flex-col">
            <div class="text-sm">Blue</div>
            <div class="text-xs text-gray-500 font-light">Sample label</div>
          </div>
          <!--switch-->
          <div class="ml-6">
            <input type="checkbox" class="blue-color relative appearance-none bg-gray-300 outline-none" style="height: 24px; width: 52px">
          </div>
        </div>
        <!--red-->
        <div class="flex items-center justify-start w-full lg:w-1/4 lg:pr-4 mb-2 lg:mb-4">
          <div class="flex flex-col">
            <div class="text-sm">Red</div>
            <div class="text-xs text-gray-500 font-light">Sample label</div>
          </div>
          <!--switch-->
          <div class="ml-6">
            <input type="checkbox" class="red-color relative appearance-none bg-gray-300 outline-none" style="height: 24px; width: 52px">
          </div>
        </div>
        <!--indigo-->
        <div class="flex items-center justify-start w-full lg:w-1/4 lg:pr-4 mb-2 lg:mb-4">
          <div class="flex flex-col">
            <div class="text-sm">Indigo</div>
            <div class="text-xs text-gray-500 font-light">Sample label</div>
          </div>
          <!--switch-->
          <div class="ml-6">
            <input type="checkbox" class="indigo-color relative appearance-none bg-gray-300 outline-none" style="height: 24px; width: 52px">
          </div>
        </div>
        <!--yellow-->
        <div class="flex items-center justify-start w-full lg:w-1/4 lg:pr-4 mb-2 lg:mb-4">
          <div class="flex flex-col">
            <div class="text-sm">Yellow</div>
            <div class="text-xs text-gray-500 font-light">Sample label</div>
          </div>
          <!--switch-->
          <div class="ml-6">
            <input type="checkbox" class="yellow-color relative appearance-none bg-gray-300 outline-none" style="height: 24px; width: 52px">
          </div>
        </div>
        <!--purple-->
        <div class="flex items-center justify-start w-full lg:w-1/4 lg:pr-4 mb-2 lg:mb-4">
          <div class="flex flex-col">
            <div class="text-sm">Purple</div>
            <div class="text-xs text-gray-500 font-light">Sample label</div>
          </div>
          <!--switch-->
          <div class="ml-6">
            <input type="checkbox" class="purple-color relative appearance-none bg-gray-300 outline-none" style="height: 24px; width: 52px">
          </div>
        </div>
        <!--green-->
        <div class="flex items-center justify-start w-full lg:w-1/4 lg:pr-4 mb-2 lg:mb-4">
          <div class="flex flex-col">
            <div class="text-sm">Green</div>
            <div class="text-xs text-gray-500 font-light">Sample label</div>
          </div>
          <!--switch-->
          <div class="ml-6">
            <input type="checkbox" class="green-color relative appearance-none bg-gray-300 outline-none" style="height: 24px; width: 52px">
          </div>
        </div>
        <!--pink-->
        <div class="flex items-center justify-start w-full lg:w-1/4 lg:pr-4 mb-2 lg:mb-4">
          <div class="flex flex-col">
            <div class="text-sm">Pink</div>
            <div class="text-xs text-gray-500 font-light">Sample label</div>
          </div>
          <!--switch-->
          <div class="ml-6">
            <input type="checkbox" class="pink-color relative appearance-none bg-gray-300 outline-none" style="height: 24px; width: 52px">
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Switches"
}
</script>

<style scoped>
  /*default main*/
  input[type="checkbox"] {
    border-radius: 20px;
    box-shadow: inset 0 0 5px rgba(0,0,0,.2);
    transition: .5s;
  }
  input:checked[type="checkbox"]:before {
    left: 28px;
  }
  input[type="checkbox"]:before {
    content: '';
    position: absolute;
    width: 24px;
    height: 24px;
    border-radius: 20px;
    top: 0;
    left: 0;
    background: #fff;
    transform: scale(1.1);
    box-shadow: 0 2px 5px rgba(0,0,0,.2);
    transition: .5s;
  }

  /*Default*/
  input:checked[type="checkbox"] {
    background: #bfdbfe;
  }
  input:checked[type="checkbox"]:before {
    background: #3b82f6;
  }

  /*gray*/
  input:checked[type="checkbox"].gray-color {
    background: #e4e4e7;
  }
  input:checked[type="checkbox"].gray-color:before {
    background: #71717a;
  }

  /*blue*/
  input:checked[type="checkbox"].blue-color {
    background: #bfdbfe;
  }
  input:checked[type="checkbox"].blue-color:before {
    background: #3b82f6;
  }

  /*red*/
  input:checked[type="checkbox"].red-color {
    background: #fecaca;
  }
  input:checked[type="checkbox"].red-color:before {
    background: #ef4444;
  }

  /*indigo*/
  input:checked[type="checkbox"].indigo-color {
    background: #c7d2fe;
  }
  input:checked[type="checkbox"].indigo-color:before {
    background: #6366f1;
  }

  /*yellow*/
  input:checked[type="checkbox"].yellow-color {
    background: #fef08a;
  }
  input:checked[type="checkbox"].yellow-color:before {
    background: #eab308;
  }

  /*purple*/
  input:checked[type="checkbox"].purple-color {
    background: #e5d1fb;
  }
  input:checked[type="checkbox"].purple-color:before {
    background: #a855f7;
  }

  /*green*/
  input:checked[type="checkbox"].green-color {
    background: #bbf7d0;
  }
  input:checked[type="checkbox"].green-color:before {
    background: #22c55e;
  }

  /*pink*/
  input:checked[type="checkbox"].pink-color {
    background: #fbcfe8;
  }
  input:checked[type="checkbox"].pink-color:before {
    background: #ec4899;
  }
</style>