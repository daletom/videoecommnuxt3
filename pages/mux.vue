<template>
  <div class="bg-white">
    <!-- Mobile menu -->
    <TransitionRoot as="template" :show="open">
      <Dialog as="div" class="fixed inset-0 flex z-40 lg:hidden" @close="open = false">
        <TransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="transition-opacity ease-linear duration-300" leave-from="opacity-100" leave-to="opacity-0">
          <DialogOverlay class="fixed inset-0 bg-black bg-opacity-25" />
        </TransitionChild>

        <TransitionChild as="template" enter="transition ease-in-out duration-300 transform" enter-from="-translate-x-full" enter-to="translate-x-0" leave="transition ease-in-out duration-300 transform" leave-from="translate-x-0" leave-to="-translate-x-full">
          <div class="relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto">
            <div class="px-4 pt-5 pb-2 flex">
              <button type="button" class="-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400" @click="open = false">
                <span class="sr-only">Close menu</span>
                <XIcon class="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            <!-- Links -->
            <TabGroup as="div" class="mt-2">
              <div class="border-b border-gray-200">
                <TabList class="-mb-px flex px-4 space-x-8">
                  <Tab as="template" v-for="category in navigation.categories" :key="category.name" v-slot="{ selected }">
                    <button :class="[selected ? 'text-indigo-600 border-indigo-600' : 'text-gray-900 border-transparent', 'flex-1 whitespace-nowrap py-4 px-1 border-b-2 text-base font-medium']">
                        {{ category.name }}
                    </button>
                  </Tab>
                </TabList>
              </div>
              <TabPanels as="template">
                <TabPanel v-for="category in navigation.categories" :key="category.name" class="px-4 py-6 space-y-12">
                  <div class="grid grid-cols-2 gap-x-4 gap-y-10">
                    <div v-for="item in category.featured" :key="item.name" class="group relative">
                      <div class="aspect-w-1 aspect-h-1 rounded-md bg-gray-100 overflow-hidden group-hover:opacity-75">
                        <img :src="item.imageSrc" :alt="item.imageAlt" class="object-center object-cover" />
                      </div>
                      <a :href="item.href" class="mt-6 block text-sm font-medium text-gray-900">
                        <span class="absolute z-10 inset-0" aria-hidden="true" />
                        {{ item.name }}
                      </a>
                      <p aria-hidden="true" class="mt-1 text-sm text-gray-500">Shop now</p>
                    </div>
                  </div>
                </TabPanel>
              </TabPanels>
            </TabGroup>

            <div class="border-t border-gray-200 py-6 px-4 space-y-6">
              <div v-for="page in navigation.pages" :key="page.name" class="flow-root">
                <a :href="page.href" class="-m-2 p-2 block font-medium text-gray-900">{{ page.name }}</a>
              </div>
            </div>

            <div class="border-t border-gray-200 py-6 px-4 space-y-6">
              <div class="flow-root">
                <a href="#" class="-m-2 p-2 block font-medium text-gray-900">Create an account</a>
              </div>
              <div class="flow-root">
                <a href="#" class="-m-2 p-2 block font-medium text-gray-900">Sign in</a>
              </div>
            </div>

            <div class="border-t border-gray-200 py-6 px-4 space-y-6">
              <!-- Currency selector -->
              <form>
                <div class="inline-block">
                  <label for="mobile-currency" class="sr-only">Currency</label>
                  <div class="-ml-2 group relative border-transparent rounded-md focus-within:ring-2 focus-within:ring-white">
                    <select id="mobile-currency" name="currency" class="bg-none border-transparent rounded-md py-0.5 pl-2 pr-5 flex items-center text-sm font-medium text-gray-700 group-hover:text-gray-800 focus:outline-none focus:ring-0 focus:border-transparent">
                      <option v-for="currency in currencies" :key="currency">{{ currency }}</option>
                    </select>
                    <div class="absolute right-0 inset-y-0 flex items-center pointer-events-none">
                      <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" class="w-5 h-5 text-gray-500">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 8l4 4 4-4" />
                      </svg>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </TransitionChild>
      </Dialog>
    </TransitionRoot>

    <header class="relative">
      <nav aria-label="Top">
        <!-- Top navigation -->
        <div class="bg-gray-900">
          <div class="max-w-7xl mx-auto h-10 px-4 flex items-center justify-between sm:px-6 lg:px-8">
            <!-- Currency selector -->
            <form>
              <div>
                <label for="desktop-currency" class="sr-only">Currency</label>
                <div class="-ml-2 group relative bg-gray-900 border-transparent rounded-md focus-within:ring-2 focus-within:ring-white">
                  <select id="desktop-currency" name="currency" class="bg-none bg-gray-900 border-transparent rounded-md py-0.5 pl-2 pr-5 flex items-center text-sm font-medium text-white group-hover:text-gray-100 focus:outline-none focus:ring-0 focus:border-transparent">
                    <option v-for="currency in currencies" :key="currency">{{ currency }}</option>
                  </select>
                  <div class="absolute right-0 inset-y-0 flex items-center pointer-events-none">
                    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" class="w-5 h-5 text-gray-300">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 8l4 4 4-4" />
                    </svg>
                  </div>
                </div>
              </div>
            </form>

            <div class="flex items-center space-x-6">
              <a href="#" class="text-sm font-medium text-white hover:text-gray-100">Sign in</a>
              <a href="#" class="text-sm font-medium text-white hover:text-gray-100">Create an account</a>
            </div>
          </div>
        </div>

        <!-- Secondary navigation -->
        <div class="bg-white">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="h-16 flex items-center justify-between">
              <!-- Logo (lg+) -->
              <div class="hidden lg:flex-1 lg:flex lg:items-center">
                <a href="/">
                  <span class="sr-only">Workflow</span>
                  <img class="h-8 w-auto" src="https://ix-www.imgix.net/press/imgix-press-kit.pdf?page=5&w=100&fm=png" alt="imgix logo" />
                </a>
              </div>

              <div class="hidden h-full lg:flex">
                <!-- Flyout menus -->
                <PopoverGroup class="px-4 bottom-0 inset-x-0">
                  <div class="h-full flex justify-center space-x-8">
                    <Popover v-for="category in navigation.categories" :key="category.name" class="flex" v-slot="{ open }">
                      <div class="relative flex">
                        <PopoverButton :class="[open ? 'text-indigo-600' : 'text-gray-700 hover:text-gray-800', 'relative flex items-center justify-center transition-colors ease-out duration-200 text-sm font-medium']">
                          {{ category.name }}
                          <span :class="[open ? 'bg-indigo-600' : '', 'absolute z-20 -bottom-px inset-x-0 h-0.5 transition ease-out duration-200']" aria-hidden="true" />
                        </PopoverButton>
                      </div>

                      <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0" enter-to-class="opacity-100" leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100" leave-to-class="opacity-0">
                        <PopoverPanel class="absolute z-10 top-full inset-x-0 bg-white text-sm text-gray-500">
                          <!-- Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow -->
                          <div class="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true" />
                          <!-- Fake border when menu is open -->
                          <div class="absolute inset-0 top-0 h-px max-w-7xl mx-auto px-8" aria-hidden="true">
                            <div :class="[open ? 'bg-gray-200' : 'bg-transparent', 'w-full h-px transition-colors ease-out duration-200']" />
                          </div>

                          <div class="relative">
                            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                              <div class="grid grid-cols-4 gap-y-10 gap-x-8 py-16">
                                <div v-for="item in category.featured" :key="item.name" class="group relative">
                                  <div class="aspect-w-1 aspect-h-1 rounded-md bg-gray-100 overflow-hidden group-hover:opacity-75">
                                    <img :src="item.imageSrc" :alt="item.imageAlt" class="object-center object-cover" />
                                  </div>
                                  <a :href="item.href" class="mt-4 block font-medium text-gray-900">
                                    <span class="absolute z-10 inset-0" aria-hidden="true" />
                                    {{ item.name }}
                                  </a>
                                  <p aria-hidden="true" class="mt-1">Shop now</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </PopoverPanel>
                      </transition>
                    </Popover>

                    <a v-for="page in navigation.pages" :key="page.name" :href="page.href" class="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">{{ page.name }}</a>
                  </div>
                </PopoverGroup>
              </div>

              <!-- Mobile menu and search (lg-) -->
              <div class="flex-1 flex items-center lg:hidden">
                <button type="button" class="-ml-2 bg-white p-2 rounded-md text-gray-400" @click="open = true">
                  <span class="sr-only">Open menu</span>
                  <MenuIcon class="h-6 w-6" aria-hidden="true" />
                </button>

                <!-- Search -->
                <a href="#" class="ml-2 p-2 text-gray-400 hover:text-gray-500">
                  <span class="sr-only">Search</span>
                  <SearchIcon class="w-6 h-6" aria-hidden="true" />
                </a>
              </div>

              <!-- Logo (lg-) -->
              <a href="/" class="lg:hidden">
                <span class="sr-only">Workflow</span>
                <img src="https://ix-www.imgix.net/press/imgix-press-kit.pdf?page=2&w=100&fm=png" alt="" class="h-8 w-auto" />
              </a>

              <div class="flex-1 flex items-center justify-end">
                <a href="#" class="hidden text-sm font-medium text-gray-700 hover:text-gray-800 lg:block">
                  Search
                </a>

                <div class="flex items-center lg:ml-8">
                  <!-- Help -->
                  <a href="#" class="p-2 text-gray-400 hover:text-gray-500 lg:hidden">
                    <span class="sr-only">Help</span>
                    <QuestionMarkCircleIcon class="w-6 h-6" aria-hidden="true" />
                  </a>
                  <a href="#" class="hidden text-sm font-medium text-gray-700 hover:text-gray-800 lg:block">Help</a>

                  <!-- Cart -->
                  <div class="ml-4 flow-root lg:ml-8">
                    <a href="#" class="group -m-2 p-2 flex items-center">
                      <ShoppingBagIcon class="flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
                      <span class="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
                      <span class="sr-only">items in cart, view bag</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>

    <main>
      <!-- Hero section -->
      <div class="relative">
        <!-- Background image and overlap -->
        <div aria-hidden="true" class="hidden absolute inset-0 sm:flex sm:flex-col">
          <div class="flex-1 relative w-full bg-gray-800">
            <div class="absolute inset-0 overflow-hidden">
              <!--
              <img src="https://ix-www.imgix.net/press/imgixcollage.jpg?crop=focal&fit=crop&q=70&markpad=0&markalign=middle%2Ccenter&mark64=aHR0cHM6Ly9hc3NldHMuaW1naXgubmV0L3ByZXNza2l0L2ltZ2l4LXByZXNza2l0LnBkZj9mbT1wbmcmcGFnZT00&bm=normal&usm=2O&chromasub=444&blend64=OTkwQzMyNDk&w=1820&h=678" alt="" class="w-full h-full object-center object-cover" /> 
              -->
              <video ref="videoStreaming" muted autoplay loop class="w-full">
                <source src="">
              </video>
            </div>
            <div class="absolute inset-0 bg-gray-900 opacity-50" />
          </div>
          <div class="w-full bg-white h-32 md:h-40 lg:h-48" />
        </div>

        <div class="relative max-w-3xl mx-auto pb-96 px-4 text-center sm:pb-0 sm:px-6 lg:px-8">
          <!-- Background image and overlap -->
          <div aria-hidden="true" class="absolute inset-0 flex flex-col sm:hidden">
            <div class="flex-1 relative w-full bg-gray-800">
              <div class="absolute inset-0 overflow-hidden">
                <img src="https://ix-www.imgix.net/press/imgixcollage.jpg?crop=focal&fit=crop&q=70&markpad=0&markalign=middle%2Ccenter&mark64=aHR0cHM6Ly9hc3NldHMuaW1naXgubmV0L3ByZXNza2l0L2ltZ2l4LXByZXNza2l0LnBkZj9mbT1wbmcmcGFnZT00&bm=normal&usm=2O&chromasub=444&blend64=OTkwQzMyNDk&w=640&h=550&dpr=2&auto=format" alt="" class="w-full h-full object-center object-cover" />
              </div>
              <div class="absolute inset-0 bg-gray-900 opacity-50" />
            </div>
            <div class="w-full bg-white h-48" />
          </div>
          <div class="relative py-32">
            <h1 class="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">Mux Sized Full Width</h1>
            <div class="mt-4 sm:mt-6">
              <a href="#" class="inline-block bg-indigo-600 border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-indigo-700">Check Gifts</a>
            </div>
          </div>
        </div>

        <section aria-labelledby="collection-heading" class="-mt-96 relative sm:mt-0">
          <h2 id="collection-heading" class="sr-only">Collections</h2>
          <div class="max-w-md mx-auto grid grid-cols-1 gap-y-6 px-4 sm:max-w-7xl sm:px-6 sm:grid-cols-3 sm:gap-y-0 sm:gap-x-6 lg:px-8 lg:gap-x-8">
            <div v-for="collection in collections" :key="collection.name" class="group relative h-96 bg-white rounded-lg shadow-xl sm:h-auto sm:aspect-w-4 sm:aspect-h-5">
              <div>
                <div aria-hidden="true" class="absolute inset-0 rounded-lg overflow-hidden">
                  <div class="absolute inset-0 overflow-hidden group-hover:opacity-75">
                    <img
                      :src="collection.imageSrc"
                      :alt="collection.imageAlt"
                      class="w-full h-full object-center object-cover"
                      width="384"
                      height="480"
                    />
                  </div>
                  <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50" />
                </div>
                <div class="absolute inset-0 rounded-lg p-6 flex items-end">
                  <div>
                    <p aria-hidden="true" class="text-sm text-white">
                      Shop the collection
                    </p>
                    <h3 class="mt-1 font-semibold text-white">
                      <a :href="collection.href">
                        <span class="absolute inset-0" />
                        {{ collection.name }}
                      </a>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section aria-labelledby="trending-heading">
        <div class="max-w-7xl mx-auto py-24 px-4 sm:px-6 sm:py-32 lg:pt-32 lg:px-8">
          <div class="md:flex md:items-center md:justify-between">
            <h2 id="favorites-heading" class="text-2xl font-extrabold tracking-tight text-gray-900">Trending Products</h2>
            <a href="#" class="hidden text-sm font-medium text-indigo-600 hover:text-indigo-500 md:block">Shop the collection<span aria-hidden="true"> &rarr;</span></a>
          </div>

          <div class="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8">
            <div v-for="product in trendingProducts" :key="product.id" class="group relative">
              <div class="w-full h-56 rounded-md overflow-hidden group-hover:opacity-75 lg:h-72 xl:h-80">
                <img
                  :src="product.imageSrc"
                  :srcset="product.imageSrc + ' 1x, ' + product.imageSrc + '&dpr2 2x, ' + product.imageSrc + '&dpr=2.5 3x'"
                  :alt="product.imageAlt"
                  class="w-full h-full object-center object-cover"
                  width="280"
                  height="320"
                />
              </div>
              <h3 class="mt-4 text-sm text-gray-700">
                <a :href="product.href">
                  <span class="absolute inset-0" />
                  {{ product.name }}
                </a>
              </h3>
              <p class="mt-1 text-sm text-gray-500">{{ product.color }}</p>
              <p class="mt-1 text-sm font-medium text-gray-900">{{ product.price }}</p>
            </div>
          </div>

          <div class="mt-8 text-sm md:hidden">
            <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">Shop the collection<span aria-hidden="true"> &rarr;</span></a>
          </div>
        </div>
      </section>

      <section aria-labelledby="perks-heading" class="bg-gray-50 border-t border-gray-200">
        <h2 id="perks-heading" class="sr-only">Our perks</h2>

        <div class="max-w-7xl mx-auto py-24 px-4 sm:px-6 sm:py-32 lg:px-8">
          <div class="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-0">
            <div v-for="perk in perks" :key="perk.name" class="text-center md:flex md:items-start md:text-left lg:block lg:text-center">
              <div class="md:flex-shrink-0">
                <div class="flow-root">
                  <img class="-my-1 h-24 w-auto mx-auto" :src="perk.imageUrl" alt="" width="112" height="96" />
                </div>
              </div>
              <div class="mt-6 md:mt-0 md:ml-4 lg:mt-6 lg:ml-0">
                <h3 class="text-sm font-semibold tracking-wide uppercase text-gray-900">
                  {{ perk.name }}
                </h3>
                <p class="mt-3 text-sm text-gray-500">
                  {{ perk.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer aria-labelledby="footer-heading" class="bg-gray-50">
      <h2 id="footer-heading" class="sr-only">Footer</h2>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="border-t border-gray-200 py-20">
          <div class="grid grid-cols-1 md:grid-cols-12 md:grid-flow-col md:gap-x-8 md:gap-y-16 md:auto-rows-min">
            <!-- Image section -->
            <div class="col-span-1 md:col-span-2 lg:row-start-1 lg:col-start-1">
              <img src="https://ix-www.imgix.net/press/imgix-press-kit.pdf?page=2&w=100&fm=png" alt="" class="h-8 w-auto" />
            </div>

            <!-- Sitemap sections -->
            <div class="mt-10 col-span-6 grid grid-cols-2 gap-8 sm:grid-cols-3 md:mt-0 md:row-start-1 md:col-start-3 md:col-span-8 lg:col-start-2 lg:col-span-6">
              <div class="grid grid-cols-1 gap-y-12 sm:col-span-2 sm:grid-cols-2 sm:gap-x-8">
                <div>
                  <h3 class="text-sm font-medium text-gray-900">
                    Products
                  </h3>
                  <ul role="list" class="mt-6 space-y-6">
                    <li v-for="item in footerNavigation.products" :key="item.name" class="text-sm">
                      <a :href="item.href" class="text-gray-500 hover:text-gray-600">
                        {{ item.name }}
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 class="text-sm font-medium text-gray-900">
                    Company
                  </h3>
                  <ul role="list" class="mt-6 space-y-6">
                    <li v-for="item in footerNavigation.company" :key="item.name" class="text-sm">
                      <a :href="item.href" class="text-gray-500 hover:text-gray-600">
                        {{ item.name }}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <h3 class="text-sm font-medium text-gray-900">
                  Customer Service
                </h3>
                <ul role="list" class="mt-6 space-y-6">
                  <li v-for="item in footerNavigation.customerService" :key="item.name" class="text-sm">
                    <a :href="item.href" class="text-gray-500 hover:text-gray-600">
                      {{ item.name }}
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <!-- Newsletter section -->
            <div class="mt-12 md:mt-0 md:row-start-2 md:col-start-3 md:col-span-8 lg:row-start-1 lg:col-start-9 lg:col-span-4">
              <h3 class="text-sm font-medium text-gray-900">Sign up for our newsletter</h3>
              <p class="mt-6 text-sm text-gray-500">The latest deals and savings, sent to your inbox weekly.</p>
              <form class="mt-2 flex sm:max-w-md">
                <label for="email-address" class="sr-only">Email address</label>
                <input id="email-address" type="text" autocomplete="email" required="" class="appearance-none min-w-0 w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" />
                <div class="ml-4 flex-shrink-0">
                  <button type="submit" class="w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Sign up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div class="border-t border-gray-100 py-10 text-center">
          <p class="text-sm text-gray-500">&copy; 2021 Workflow, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { ref } from 'vue'
import Hls from "hls.js";
import {
  Dialog,
  DialogOverlay,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'
import { MenuIcon, QuestionMarkCircleIcon, SearchIcon, ShoppingBagIcon, XIcon } from '@heroicons/vue/outline'

const currencies = ['USD', 'CAD', 'AUD', 'EUR', 'GBP']
const navigation = {
  pages: [
    { name: 'MP4', href: '/' },
    { name: 'HLS', href: '/hls' },
    { name: 'HLS W-full', href: '/hlsw' },
    { name: 'Youtube', href: '/yt' },
  ],
}
const collections = [
  {
    name: "Home Goods",
    href: '#',
    imageSrc: 'https://images.prismic.io/tdecomm21/3e7084a4-04d6-44b0-bc45-ecaed8586c0b_ix_coffee_maker.png?w=384&auto=format,compress&cs=srgb',
    imageAlt: 'A compact coffee maker.',
  },
  {
    name: "Shirts",
    href: '#',
    imageSrc: 'https://images.prismic.io/tdecomm21/de0680b1-d97e-464b-bc34-0e78a03f1e7c_ix_grey_shirt.png?w=384&auto=format,compress&cs=srgb',
    imageAlt: 'A comfortable and casual cotton t-shirt.',
  },
  {
    name: 'Desk Accessories',
    href: '#',
    imageSrc: 'https://images.unsplash.com/photo-1494173853739-c21f58b16055?&auto=format,compress&w=384&cs=srgb',
    imageAlt: 'Desktop items and a computer.',
  },
]
const trendingProducts = [
  {
    id: 1,
    name: 'Holographic Stickers',
    color: 'Holographic',
    price: '$2',
    href: '#',
    imageSrc: 'https://tom.imgix.net/examples/ecomm/ix_holo_sticker.jpg?w=280&h=320&fit=crop&crop=edges&auto=format,compress&cs=srgb',
    imageAlt: 'Holographic Stickers',
  },
  {
    id: 2,
    name: 'Coffee Mug',
    color: 'Blue',
    price: '$12',
    href: '#',
    imageSrc: 'https://tom.imgix.net/examples/ecomm/ix_coffee_mug.png?bg=gray&w=280&h=320&fit=crop&crop=edges&auto=format,compress&cs=srgb',
    imageAlt: 'Left Handed Coffee Mug',
  },
  {
    id: 3,
    name: 'Gamer Jersey',
    color: 'Black with Blue Stripe',
    price: '$42',
    href: '#',
    imageSrc: 'https://tom.imgix.net/examples/ecomm/ix_gamer_jersey.png?bg=gray&w=280&h=320&fit=crop&auto=format,compress&cs=srgb',
    imageAlt: '423 Gamer Jersey',
  },
  {
    id: 4,
    name: 'Vintage IX Hoodie',
    color: 'Dark Blue',
    price: '$35',
    href: '#',
    imageSrc: 'https://tom.imgix.net/examples/ecomm/ix_blue_hoodie.png?bg=gray&w=280&h=320&fit=crop&dpr=2&auto=format,compress&cs=srgb',
    imageAlt: 'Vintage imgix hoodie',
  },
  // More products...
]
const perks = [
  {
    name: 'Free returns',
    imageUrl: 'https://tom.imgix.net/icon-returns-light.svg',
    description: 'Not what you expected? Place it back in the parcel and attach the pre-paid postage stamp.',
  },
  {
    name: 'Same day delivery',
    imageUrl: 'https://tom.imgix.net/icon-calendar-light.svg',
    description:
      'We offer a delivery service that has never been done before. Checkout today and receive your products within hours.',
  },
  {
    name: 'All year discount',
    imageUrl: 'https://tom.imgix.net/icon-gift-card-light.svg',
    description: 'Looking for a deal? You can use the code "ALLYEAR" at checkout and get money off all year round.',
  },
  {
    name: 'For the planet',
    imageUrl: 'https://tom.imgix.net/icon-planet-light.svg',
    description: 'We’ve pledged 1% of sales to the preservation and restoration of the natural environment.',
  },
]
const footerNavigation = {
  products: [
    { name: 'Bags', href: '#' },
    { name: 'Tees', href: '#' },
    { name: 'Objects', href: '#' },
    { name: 'Home Goods', href: '#' },
    { name: 'Accessories', href: '#' },
  ],
  company: [
    { name: 'Who we are', href: '#' },
    { name: 'Sustainability', href: '#' },
    { name: 'Press', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Terms & Conditions', href: '#' },
    { name: 'Privacy', href: '#' },
  ],
  customerService: [
    { name: 'Contact', href: '#' },
    { name: 'Shipping', href: '#' },
    { name: 'Returns', href: '#' },
    { name: 'Warranty', href: '#' },
    { name: 'Secure Payments', href: '#' },
    { name: 'FAQ', href: '#' },
    { name: 'Find a store', href: '#' },
  ],
}

export default {
  components: {
    Dialog,
    DialogOverlay,
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
    Tab,
    TabGroup,
    TabList,
    TabPanel,
    TabPanels,
    TransitionChild,
    TransitionRoot,
    MenuIcon,
    QuestionMarkCircleIcon,
    SearchIcon,
    ShoppingBagIcon,
    XIcon,
  },
  mounted() {
    this.videoStreaming();
  },
  methods: {
    videoStreaming() {
      var url = "https://stream.mux.com/01yxcCYViuA57AMqKUfbtxf5YbMO7Eaf2.m3u8";
      const video = this.$refs.videoStreaming;
      console.log("tage video", video);
      const defaultOptions = {};
      if (Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(url);
        hls.on(Hls.Events.MANIFEST_PARSED, function() {
          const availableQualities = hls.levels.map(l => l.height);
          defaultOptions.quality = {
            default: availableQualities[0],
            options: availableQualities,
            forced: true,
            onChange: e => updateQuality(e)
          };
          new Plyr(video, defaultOptions);
        });

        hls.attachMedia(video);
        window.hls = hls;
      } else {
        new Plyr(video, defaultOptions);
      }
    }
  },
  setup() {
    const open = ref(false)

    return {
      currencies,
      navigation,
      collections,
      trendingProducts,
      perks,
      footerNavigation,
      open,
    }
  },
}
</script>