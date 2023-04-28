import React from 'react'
import { Link } from 'react-router-dom';
const Sidebar = () => {

  return (
    <div id="dashboard-sidebar" className="dashboard-sidebar  z-50 w-72 transition-all bg-gray-800 dark:bg-foreground text-gray-100 fixed lg:left-0 top-0 -left-64 h-full">
    <div className="scrollbar scrollbar-thumb-gray-200 overflow-y-scroll   scrollbar-track-[#1F2937FF] h-full">
    <a to="index.html" className="px-6 p-8 flex items-center">
      <img className="w-7 h-7 mr-2" src="assets/img/logo.png" alt="" />
      <p className="text-lg font-semibold">Avon</p>
    </a>
    <div className="p-6 ">
      <ul className="mb-10">
        <p className="uppercase text-gray-500 mb-3 text-sm ml-4">pages</p>
        <li  className="sidebar-link mb-2"  >
          <Link to="/dashboard" className="flex items-center hover:bg-gray-700 hover:text-blue-500 flex-1 py-2 px-3 rounded-lg">
            <svg width={20} height={20} viewBox="0 0 20 20" fill="none" className="mr-2 w-5 h-5" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.14285 2C8.08928 2 8.85714 2.74618 8.85714 3.66667V9.22222C8.85714 10.1424 8.08928 10.8889 7.14285 10.8889H3.71428C2.7675 10.8889 2 10.1424 2 9.22222V3.66667C2 2.74618 2.7675 2 3.71428 2H7.14285ZM7.14285 13.1111C8.08928 13.1111 8.85714 13.8576 8.85714 14.7778V15.8889C8.85714 16.809 8.08928 17.5556 7.14285 17.5556H3.71428C2.7675 17.5556 2 16.809 2 15.8889V14.7778C2 13.8576 2.7675 13.1111 3.71428 13.1111H7.14285Z" fill="currentColor" />
              <path d="M16.2857 2C17.2321 2 18 2.74618 18 3.66667V4.77778C18 5.69792 17.2321 6.44444 16.2857 6.44444H12.8571C11.9107 6.44444 11.1429 5.69792 11.1429 4.77778V3.66667C11.1429 2.74618 11.9107 2 12.8571 2H16.2857ZM16.2857 8.66667C17.2321 8.66667 18 9.41319 18 10.3333V15.8889C18 16.809 17.2321 17.5556 16.2857 17.5556H12.8571C11.9107 17.5556 11.1429 16.809 11.1429 15.8889V10.3333C11.1429 9.41319 11.9107 8.66667 12.8571 8.66667H16.2857Z" fill="#B2DDFF" />
            </svg>
            Dashboard
          </Link>
        </li>
        <li className="sidebar-link mb-2"  >
          <Link to="/allcategories" className="flex items-center flex-1 py-2 px-3 rounded-lg hover:bg-gray-700 hover:text-blue-500">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="mr-2 w-4 h-4">
              <path d="M512 448C512 483.3 483.3 512 448 512H64C28.65 512 0 483.3 0 448V224C0 188.7 28.65 160 64 160H448C483.3 160 512 188.7 512 224V448zM440 80C453.3 80 464 90.75 464 104C464 117.3 453.3 128 440 128H72C58.75 128 48 117.3 48 104C48 90.75 58.75 80 72 80H440zM392 0C405.3 0 416 10.75 416 24C416 37.25 405.3 48 392 48H120C106.7 48 96 37.25 96 24C96 10.75 106.7 0 120 0H392z" fill="currentColor" />
            </svg>
            All Categories
          </Link>
        </li>
        <li className="sidebar-link mb-2"  >
          <Link to="/addcategories" className="flex items-center flex-1 py-2 px-3 rounded-lg hover:bg-gray-700 hover:text-blue-500">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="mr-2 w-4 h-4">
              <path d="M72 48C85.25 48 96 58.75 96 72V120C96 133.3 85.25 144 72 144V232H128C128 218.7 138.7 208 152 208H200C213.3 208 224 218.7 224 232V280C224 293.3 213.3 304 200 304H152C138.7 304 128 293.3 128 280H72V384C72 388.4 75.58 392 80 392H128C128 378.7 138.7 368 152 368H200C213.3 368 224 378.7 224 392V440C224 453.3 213.3 464 200 464H152C138.7 464 128 453.3 128 440H80C49.07 440 24 414.9 24 384V144C10.75 144 0 133.3 0 120V72C0 58.75 10.75 48 24 48H72zM160 96C160 78.33 174.3 64 192 64H480C497.7 64 512 78.33 512 96C512 113.7 497.7 128 480 128H192C174.3 128 160 113.7 160 96zM288 256C288 238.3 302.3 224 320 224H480C497.7 224 512 238.3 512 256C512 273.7 497.7 288 480 288H320C302.3 288 288 273.7 288 256zM288 416C288 398.3 302.3 384 320 384H480C497.7 384 512 398.3 512 416C512 433.7 497.7 448 480 448H320C302.3 448 288 433.7 288 416z" fill="currentColor" />
            </svg>
            Add Categories
          </Link>
        </li>
        <li  className= "sidebar-link mb-2"  >
          <Link to="/allproducts" className="flex items-center flex-1 py-2 px-3 rounded-lg hover:bg-gray-700 hover:text-blue-500">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="mr-2 w-4 h-4">
              <path d="M0 64C0 28.65 28.65 0 64 0H224V128C224 145.7 238.3 160 256 160H384V299.6L289.3 394.3C281.1 402.5 275.3 412.8 272.5 424.1L257.4 484.2C255.1 493.6 255.7 503.2 258.8 512H64C28.65 512 0 483.3 0 448V64zM256 128V0L384 128H256zM564.1 250.1C579.8 265.7 579.8 291 564.1 306.7L534.7 336.1L463.8 265.1L493.2 235.7C508.8 220.1 534.1 220.1 549.8 235.7L564.1 250.1zM311.9 416.1L441.1 287.8L512.1 358.7L382.9 487.9C378.8 492 373.6 494.9 368 496.3L307.9 511.4C302.4 512.7 296.7 511.1 292.7 507.2C288.7 503.2 287.1 497.4 288.5 491.1L303.5 431.8C304.9 426.2 307.8 421.1 311.9 416.1V416.1z" fill="currentColor" />
            </svg>
            All Products
          </Link>
        </li>
        <li   className="sidebar-link mb-2"  >
          <Link to="/addproducts" className="flex items-center flex-1 py-2 px-3 rounded-lg hover:bg-gray-700 hover:text-blue-500">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="mr-2 w-4 h-4">
              <path d="M50.73 58.53C58.86 42.27 75.48 32 93.67 32H208V160H0L50.73 58.53zM240 160V32H354.3C372.5 32 389.1 42.27 397.3 58.53L448 160H240zM448 416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V192H448V416z" fill="currentColor" />
            </svg>
            Add products
          </Link>
        </li>
        <li  className="sidebar-link mb-2"  >
          <Link to="/alltags" className="flex items-center flex-1 py-2 px-3 rounded-lg hover:bg-gray-700 hover:text-blue-500">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="mr-2 w-4 h-4">
              <path d="M377.7 338.8l37.15-92.87C419 235.4 411.3 224 399.1 224h-57.48C348.5 209.2 352 193 352 176c0-4.117-.8359-8.057-1.217-12.08C390.7 155.1 416 142.3 416 128c0-16.08-31.75-30.28-80.31-38.99C323.8 45.15 304.9 0 277.4 0c-10.38 0-19.62 4.5-27.38 10.5c-15.25 11.88-36.75 11.88-52 0C190.3 4.5 181.1 0 170.7 0C143.2 0 124.4 45.16 112.5 88.98C63.83 97.68 32 111.9 32 128c0 14.34 25.31 27.13 65.22 35.92C96.84 167.9 96 171.9 96 176C96 193 99.47 209.2 105.5 224H48.02C36.7 224 28.96 235.4 33.16 245.9l37.15 92.87C27.87 370.4 0 420.4 0 477.3C0 496.5 15.52 512 34.66 512H413.3C432.5 512 448 496.5 448 477.3C448 420.4 420.1 370.4 377.7 338.8zM176 479.1L128 288l64 32l16 32L176 479.1zM271.1 479.1L240 352l16-32l64-32L271.1 479.1zM320 186C320 207 302.8 224 281.6 224h-12.33c-16.46 0-30.29-10.39-35.63-24.99C232.1 194.9 228.4 192 224 192S215.9 194.9 214.4 199C209 213.6 195.2 224 178.8 224h-12.33C145.2 224 128 207 128 186V169.5C156.3 173.6 188.1 176 224 176s67.74-2.383 96-6.473V186z" fill="currentColor" />
            </svg>
            All tags
          </Link>
        </li>
        <li   className="sidebar-link mb-2"  >
          <Link to="/addtags" className="flex items-center flex-1 py-2 px-3 rounded-lg hover:bg-gray-700 hover:text-blue-500">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="mr-2 w-4 h-4">
              <path d="M152.1 38.16C161.9 47.03 162.7 62.2 153.8 72.06L81.84 152.1C77.43 156.9 71.21 159.8 64.63 159.1C58.05 160.2 51.69 157.6 47.03 152.1L7.029 112.1C-2.343 103.6-2.343 88.4 7.029 79.03C16.4 69.66 31.6 69.66 40.97 79.03L63.08 101.1L118.2 39.94C127 30.09 142.2 29.29 152.1 38.16V38.16zM152.1 198.2C161.9 207 162.7 222.2 153.8 232.1L81.84 312.1C77.43 316.9 71.21 319.8 64.63 319.1C58.05 320.2 51.69 317.6 47.03 312.1L7.029 272.1C-2.343 263.6-2.343 248.4 7.029 239C16.4 229.7 31.6 229.7 40.97 239L63.08 261.1L118.2 199.9C127 190.1 142.2 189.3 152.1 198.2V198.2zM224 96C224 78.33 238.3 64 256 64H480C497.7 64 512 78.33 512 96C512 113.7 497.7 128 480 128H256C238.3 128 224 113.7 224 96V96zM224 256C224 238.3 238.3 224 256 224H480C497.7 224 512 238.3 512 256C512 273.7 497.7 288 480 288H256C238.3 288 224 273.7 224 256zM160 416C160 398.3 174.3 384 192 384H480C497.7 384 512 398.3 512 416C512 433.7 497.7 448 480 448H192C174.3 448 160 433.7 160 416zM0 416C0 389.5 21.49 368 48 368C74.51 368 96 389.5 96 416C96 442.5 74.51 464 48 464C21.49 464 0 442.5 0 416z" fill="currentColor" />
            </svg>
            Add tags
          </Link>
        </li>
        <li   className= "sidebar-link mb-2"  >
          <Link to="/allorder" className="flex items-center flex-1 py-2 px-3 rounded-lg hover:bg-gray-700 hover:text-blue-500">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="mr-2 w-4 h-4">
              <path d="M336 64h-53.88C268.9 26.8 233.7 0 192 0S115.1 26.8 101.9 64H48C21.5 64 0 85.48 0 112v352C0 490.5 21.5 512 48 512h288c26.5 0 48-21.48 48-48v-352C384 85.48 362.5 64 336 64zM192 64c17.67 0 32 14.33 32 32c0 17.67-14.33 32-32 32S160 113.7 160 96C160 78.33 174.3 64 192 64zM96 392c-13.25 0-24-10.75-24-24S82.75 344 96 344s24 10.75 24 24S109.3 392 96 392zM112 288C107.9 288 103.8 286.4 100.7 283.3l-32-32c-6.25-6.25-6.25-16.38 0-22.62s16.38-6.25 22.62 0L112 249.4l52.69-52.69c6.25-6.25 16.38-6.25 22.62 0s6.25 16.38 0 22.62l-64 64C120.2 286.4 116.1 288 112 288zM304 384h-128C167.2 384 160 376.8 160 368C160 359.2 167.2 352 176 352h128c8.801 0 16 7.199 16 16C320 376.8 312.8 384 304 384zM304 288h-96C199.2 288 192 280.8 192 272C192 263.2 199.2 256 208 256h96C312.8 256 320 263.2 320 272C320 280.8 312.8 288 304 288z" fill="currentColor" />
            </svg>
            All Orders
          </Link>
        </li>
        <li  className="sidebar-link mb-2"  >
          <Link to="/addorder" className="flex items-center flex-1 py-2 px-3 rounded-lg hover:bg-gray-700 hover:text-blue-500">
            <svg width={20} height={20} viewBox="0 0 20 20" fill="none" className="mr-2 w-5 h-5" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.9 12.4039C10.9 10.0389 12.7141 8.12022 14.95 8.12022C17.1859 8.12022 19 10.0389 19 12.4039C19 14.7688 17.1859 16.6875 14.95 16.6875C12.7141 16.6875 10.9 14.7688 10.9 12.4039ZM16.8428 11.7881C17.02 11.6037 17.02 11.3002 16.8428 11.1158C16.6684 10.9284 16.3816 10.9284 16.2072 11.1158L14.5 12.9215L13.6928 12.0677C13.5184 11.8803 13.2316 11.8803 13.0572 12.0677C12.88 12.2522 12.88 12.5556 13.0572 12.74L14.1822 13.9299C14.3566 14.1173 14.6434 14.1173 14.8178 13.9299L16.8428 11.7881Z" fill="currentColor" />
              <path d="M1 5.74038C1 4.95178 1.60441 4.3125 2.35 4.3125H14.05C14.7953 4.3125 15.4 4.95178 15.4 5.74038C15.4 6.18957 15.2003 6.61199 14.86 6.88269L14.4691 7.19207C12.5959 7.38245 11.0266 8.67945 10.3544 10.4584L8.74 11.7375C8.41938 11.9904 7.98063 11.9904 7.66 11.7375L1.54 6.88269C1.20005 6.61199 1 6.18957 1 5.74038ZM10 12.4038C10 13.6681 10.4247 14.8313 11.1306 15.7356H2.8C1.80578 15.7356 1 14.8818 1 13.8317V7.64423L7.12 12.499C7.76125 13.0077 8.63875 13.0077 9.28 12.499L10.0225 11.91C10.0084 12.0736 10 12.2373 10 12.4038Z" fill="#D0D5DD" />
            </svg>
            Add Orders
          </Link>
        </li>
        <li  className="sidebar-link mb-2"  >
          <Link to="allsale" className="flex items-center flex-1 py-2 px-3 rounded-lg hover:bg-gray-700 hover:text-blue-500">
            <svg width={20} height={20} viewBox="0 0 20 20" fill="none" className="mr-2 w-5 h-5" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 12.715C10 10.2182 12.0156 8.19252 14.5 8.19252C16.9844 8.19252 19 10.2182 19 12.715C19 15.2118 16.9844 17.2375 14.5 17.2375C12.0156 17.2375 10 15.2118 10 12.715ZM16.6031 12.0649C16.8 11.8702 16.8 11.5498 16.6031 11.3551C16.4094 11.1573 16.0906 11.1573 15.8969 11.3551L14 13.2615L13.1031 12.3601C12.9094 12.1623 12.5906 12.1623 12.3969 12.3601C12.2 12.5548 12.2 12.8752 12.3969 13.0699L13.6469 14.3262C13.8406 14.524 14.1594 14.524 14.3531 14.3262L16.6031 12.0649Z" fill="#98A2B3" />
              <path d="M2.58531 2.99571C2.83938 2.48504 3.35875 2.1625 3.92719 2.1625H7.5V6.1825H1L2.58531 2.99571ZM8.5 6.1825V2.1625H12.0719C12.6406 2.1625 13.1594 2.48504 13.4156 2.99571L15 6.1825H8.5ZM14 7.20949C11.1969 7.46388 9 9.83191 9 12.715C9 14.0498 9.47188 15.2778 10.2563 16.2325H3C1.89531 16.2325 1 15.3311 1 14.2225V7.1875H14V7.20949Z" fill="currentColor" />
            </svg>
            All Sale
          </Link>
        </li>
        <li  className="sidebar-link mb-2"  >
          <Link to="addsale" className="flex items-center flex-1 py-2 px-3 rounded-lg hover:bg-gray-700 hover:text-blue-500">
            <svg width={20} height={20} viewBox="0 0 20 20" fill="none" className="mr-2 w-5 h-5" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 12.715C10 10.2182 12.0156 8.19252 14.5 8.19252C16.9844 8.19252 19 10.2182 19 12.715C19 15.2118 16.9844 17.2375 14.5 17.2375C12.0156 17.2375 10 15.2118 10 12.715ZM16.6031 12.0649C16.8 11.8702 16.8 11.5498 16.6031 11.3551C16.4094 11.1573 16.0906 11.1573 15.8969 11.3551L14 13.2615L13.1031 12.3601C12.9094 12.1623 12.5906 12.1623 12.3969 12.3601C12.2 12.5548 12.2 12.8752 12.3969 13.0699L13.6469 14.3262C13.8406 14.524 14.1594 14.524 14.3531 14.3262L16.6031 12.0649Z" fill="#98A2B3" />
              <path d="M2.58531 2.99571C2.83938 2.48504 3.35875 2.1625 3.92719 2.1625H7.5V6.1825H1L2.58531 2.99571ZM8.5 6.1825V2.1625H12.0719C12.6406 2.1625 13.1594 2.48504 13.4156 2.99571L15 6.1825H8.5ZM14 7.20949C11.1969 7.46388 9 9.83191 9 12.715C9 14.0498 9.47188 15.2778 10.2563 16.2325H3C1.89531 16.2325 1 15.3311 1 14.2225V7.1875H14V7.20949Z" fill="currentColor" />
            </svg>
            Add Sale
          </Link>
        </li>
        <li  className="sidebar-link mb-2"  >
          <Link to="allusers" className="flex items-center flex-1 py-2 px-3 rounded-lg hover:bg-gray-700 hover:text-blue-500">
            <svg width={20} height={20} viewBox="0 0 20 20" fill="none" className="mr-2 w-5 h-5" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 12.715C10 10.2182 12.0156 8.19252 14.5 8.19252C16.9844 8.19252 19 10.2182 19 12.715C19 15.2118 16.9844 17.2375 14.5 17.2375C12.0156 17.2375 10 15.2118 10 12.715ZM16.6031 12.0649C16.8 11.8702 16.8 11.5498 16.6031 11.3551C16.4094 11.1573 16.0906 11.1573 15.8969 11.3551L14 13.2615L13.1031 12.3601C12.9094 12.1623 12.5906 12.1623 12.3969 12.3601C12.2 12.5548 12.2 12.8752 12.3969 13.0699L13.6469 14.3262C13.8406 14.524 14.1594 14.524 14.3531 14.3262L16.6031 12.0649Z" fill="#98A2B3" />
              <path d="M2.58531 2.99571C2.83938 2.48504 3.35875 2.1625 3.92719 2.1625H7.5V6.1825H1L2.58531 2.99571ZM8.5 6.1825V2.1625H12.0719C12.6406 2.1625 13.1594 2.48504 13.4156 2.99571L15 6.1825H8.5ZM14 7.20949C11.1969 7.46388 9 9.83191 9 12.715C9 14.0498 9.47188 15.2778 10.2563 16.2325H3C1.89531 16.2325 1 15.3311 1 14.2225V7.1875H14V7.20949Z" fill="currentColor" />
            </svg>
            All Users
          </Link>
        </li>
        <li   className="sidebar-link mb-2"  >
          <Link to="addusers" className="flex items-center flex-1 py-2 px-3 rounded-lg hover:bg-gray-700 hover:text-blue-500">
            <svg width={20} height={20} viewBox="0 0 20 20" fill="none" className="mr-2 w-5 h-5" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 12.715C10 10.2182 12.0156 8.19252 14.5 8.19252C16.9844 8.19252 19 10.2182 19 12.715C19 15.2118 16.9844 17.2375 14.5 17.2375C12.0156 17.2375 10 15.2118 10 12.715ZM16.6031 12.0649C16.8 11.8702 16.8 11.5498 16.6031 11.3551C16.4094 11.1573 16.0906 11.1573 15.8969 11.3551L14 13.2615L13.1031 12.3601C12.9094 12.1623 12.5906 12.1623 12.3969 12.3601C12.2 12.5548 12.2 12.8752 12.3969 13.0699L13.6469 14.3262C13.8406 14.524 14.1594 14.524 14.3531 14.3262L16.6031 12.0649Z" fill="#98A2B3" />
              <path d="M2.58531 2.99571C2.83938 2.48504 3.35875 2.1625 3.92719 2.1625H7.5V6.1825H1L2.58531 2.99571ZM8.5 6.1825V2.1625H12.0719C12.6406 2.1625 13.1594 2.48504 13.4156 2.99571L15 6.1825H8.5ZM14 7.20949C11.1969 7.46388 9 9.83191 9 12.715C9 14.0498 9.47188 15.2778 10.2563 16.2325H3C1.89531 16.2325 1 15.3311 1 14.2225V7.1875H14V7.20949Z" fill="currentColor" />
            </svg>
            Add Users
          </Link>
        </li>
      </ul>
      <ul className="mb-10">
        <p className="uppercase text-gray-500 mb-3 text-sm ml-4">listing</p>
        <li>
          <button type="button" id="listing" aria-expanded="false" data-hc-control="listing" aria-controls="listingNav" className="group w-full flex items-center hover:bg-gray-700 hover:text-blue-500 flex-1 py-2 px-3 rounded-lg">
            <svg width={20} height={20} viewBox="0 0 20 20" fill="none" className="mr-2 w-5 h-5" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.26598 2.16147C9.73163 1.94618 10.2692 1.94618 10.7348 2.16147L17.5664 5.31891C17.832 5.44079 18.0008 5.70642 18.0008 5.97206C18.0008 6.29083 17.832 6.55647 17.5664 6.68147L10.7348 9.83788C10.2692 10.0535 9.73163 10.0535 9.26598 9.83788L2.43533 6.68147C2.16995 6.55647 2 6.29083 2 5.97206C2 5.70642 2.16991 5.44079 2.43533 5.31891L9.26598 2.16147ZM17.5664 13.3193C17.832 13.4412 18.0008 13.7068 18.0008 13.9725C18.0008 14.2912 17.832 14.5569 17.5664 14.6819L10.7348 17.8383C10.2692 18.0539 9.73163 18.0539 9.26598 17.8383L2.43533 14.6819C2.16995 14.5569 2 14.2912 2 13.9725C2 13.7068 2.16991 13.4412 2.43533 13.3193L4.09792 12.5505L8.84721 14.7444C9.5785 15.085 10.4223 15.085 11.1536 14.7444L15.9038 12.5505L17.5664 13.3193Z" fill="currentColor" />
              <path d="M11.1536 10.7442L15.9038 8.55032L17.5664 9.31911C17.832 9.44099 18.0008 9.70663 18.0008 9.97227C18.0008 10.291 17.832 10.5567 17.5664 10.6817L10.7348 13.8381C10.2692 14.0537 9.73163 14.0537 9.26598 13.8381L2.43533 10.6817C2.16995 10.5567 2 10.291 2 9.97227C2 9.70663 2.16991 9.44099 2.43533 9.31911L4.09792 8.55032L8.84721 10.7442C9.5785 11.0848 10.4223 11.0848 11.1536 10.7442Z" fill="#D0D5DD" />
            </svg>
            <div className="w-full flex items-center justify-between">
              <span>Listing</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="h-[14px] w-[14px] group-hover:text-blue-500 ml-5">
                <path d="M336 64h-53.88C268.9 26.8 233.7 0 192 0S115.1 26.8 101.9 64H48C21.5 64 0 85.48 0 112v352C0 490.5 21.5 512 48 512h288c26.5 0 48-21.48 48-48v-352C384 85.48 362.5 64 336 64zM192 64c17.67 0 32 14.33 32 32c0 17.67-14.33 32-32 32S160 113.7 160 96C160 78.33 174.3 64 192 64zM96 392c-13.25 0-24-10.75-24-24S82.75 344 96 344s24 10.75 24 24S109.3 392 96 392zM112 288C107.9 288 103.8 286.4 100.7 283.3l-32-32c-6.25-6.25-6.25-16.38 0-22.62s16.38-6.25 22.62 0L112 249.4l52.69-52.69c6.25-6.25 16.38-6.25 22.62 0s6.25 16.38 0 22.62l-64 64C120.2 286.4 116.1 288 112 288zM304 384h-128C167.2 384 160 376.8 160 368C160 359.2 167.2 352 176 352h128c8.801 0 16 7.199 16 16C320 376.8 312.8 384 304 384zM304 288h-96C199.2 288 192 280.8 192 272C192 263.2 199.2 256 208 256h96C312.8 256 320 263.2 320 272C320 280.8 312.8 288 304 288z" fill="currentColor" />
              </svg>
            </div>
          </button>
          
        </li>
        <li data-active-page="add-listing" data-page-name="bookmarks"  className="sidebar-link mb-2  ">
          <a to="dashboard-bookmarks.html" className="flex items-center flex-1 py-2 px-3 rounded-lg hover:bg-gray-700 hover:text-blue-500">
            <svg width={20} height={20} viewBox="0 0 20 20" fill="none" className="mr-2 w-5 h-5" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 13.5C19 15.9844 16.9844 18 14.5 18C12.0156 18 10 15.9844 10 13.5C10 11.0156 12.0156 8.99997 14.5 8.99997C16.9844 8.99997 19 11.0156 19 13.5ZM14 11.4719V12.9719H12.5C12.225 12.9719 12 13.225 12 13.4719C12 13.775 12.225 13.9719 12.5 13.9719H14V15.4719C14 15.775 14.225 15.9719 14.5 15.9719C14.775 15.9719 15 15.775 15 15.4719V13.9719H16.5C16.775 13.9719 17 13.775 17 13.4719C17 13.225 16.775 12.9719 16.5 12.9719H15V11.4719C15 11.225 14.775 10.9719 14.5 10.9719C14.225 10.9719 14 11.225 14 11.4719Z" fill="#D0D5DD" />
              <path d="M16.8438 8.52184C16.1344 8.18746 15.3375 7.99996 14.5 7.99996C11.4625 7.99996 9.00001 10.4625 9.00001 13.5C9.00001 14.6156 9.33126 15.6531 9.90313 16.5188L9.73126 16.6969C9.32501 17.1 8.67188 17.1 8.29688 16.6969L2.24095 10.4531C0.493138 8.64059 0.586575 5.64369 2.55314 3.95868C4.23751 2.49149 6.82814 2.77243 8.39063 4.36462L9.01251 5.01994L9.60626 4.36462C11.1688 2.77243 13.7281 2.49149 15.475 3.95868C16.8156 5.12807 17.2719 6.92495 16.8438 8.52184Z" fill="currentColor" />
            </svg>
            Bookmarks
          </a>
        </li>
        <li data-active-page="add-listing" data-page-name="reviews"  className="sidebar-link mb-2  ">
          <a to="dashboard-reviews.html" className="flex items-center flex-1 py-2 px-3 rounded-lg hover:bg-gray-700 hover:text-blue-500">
            <svg width={20} height={20} viewBox="0 0 20 20" fill="none" className="mr-2 w-5 h-5" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.99042 15.7432L6.10882 17.8835C5.78183 18.0616 5.38519 18.0335 5.08544 17.8117C4.78569 17.5898 4.63431 17.2086 4.69789 16.8337L5.44272 12.253L2.28718 9.05967C2.02649 8.79096 1.93384 8.39726 2.04829 8.03481C2.16244 7.67548 2.46431 7.41301 2.82734 7.3599L7.1746 6.69748L9.12448 2.56271C9.28495 2.21979 9.62103 2.00163 9.96317 2L9.99042 15.7432ZM14.3867 17.9991C14.3534 18.0023 14.3201 18.0023 14.2868 17.9991H14.3867Z" fill="currentColor" />
              <path d="M5.70004 17.9991C5.66976 18.0023 5.63645 18.0023 5.60315 17.9991H5.70004ZM9.99037 15.7432V2.00001L9.9934 2C10.3658 2 10.7049 2.21851 10.8654 2.56271L12.8122 6.69748L17.1631 7.3599C17.5234 7.41301 17.8262 7.67548 17.9413 8.03481C18.0563 8.39726 17.9625 8.79096 17.7021 9.05967L14.5471 12.253L15.292 16.8337C15.3525 17.2086 15.2011 17.5898 14.9014 17.8117C14.6016 18.0335 14.205 18.0616 13.881 17.8835L9.9934 15.7432H9.99037Z" fill="#D0D5DD" />
            </svg>
            Reviews
          </a>
        </li>
      </ul>
      <ul className="mb-10">
        <p className="uppercase text-gray-500 mb-3 text-sm ml-4">account</p>
        <li data-active-page="add-listing" data-page-name="profile"  className="sidebar-link mb-2  ">
          <a to="dashboard-myprofile.html" className="flex items-center flex-1 py-2 px-3 rounded-lg hover:bg-gray-700 hover:text-blue-500">
            <svg width={20} height={20} viewBox="0 0 20 20" fill="none" className="mr-2 w-5 h-5" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.8296 11.6H8.57036C5.49461 11.6 3 13.988 3 16.9331C3 17.5221 3.49886 18 4.11407 18H16.2866C16.9018 18.0009 17.4 17.5239 17.4 16.9331C17.4 13.988 14.9057 11.6 11.8296 11.6Z" fill="currentColor" />
              <path d="M14.2 6C14.2 8.20906 12.4094 10 10.2 10C7.99064 10 6.20001 8.20937 6.20001 6C6.20001 3.79063 7.99095 2 10.2 2C12.4094 2 14.2 3.79094 14.2 6Z" fill="#D0D5DD" />
            </svg>
            My Profile
          </a>
        </li>
        <li data-active-page="add-listing" data-page-name="purchase"  className="sidebar-link mb-2  ">
          <a to="#" className="flex items-center flex-1 py-2 px-3 rounded-lg hover:bg-gray-700 hover:text-blue-500">
            <svg width={20} height={20} viewBox="0 0 20 20" fill="none" className="mr-2 w-5 h-5" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.7545 10.6395L13.8409 15.7537C13.6031 16.0011 13.2544 16.0687 12.9543 15.9265C12.6542 15.7837 12.4596 15.4576 12.4596 15.0973L12.4564 12.4236L8.09183 12.4236C7.48863 12.4236 7 11.8847 7 11.2202V8.81353C7 8.14906 7.48897 7.61018 8.09183 7.61018L12.4564 7.61022L12.4596 4.90268C12.4596 4.5425 12.6542 4.21639 12.9543 4.07349C13.2545 3.93131 13.6032 3.99889 13.8409 4.24625L18.7545 9.36049C19.0818 9.66554 19.0818 10.2973 18.7545 10.6395Z" fill="currentColor" />
              <path d="M4.5 18H6.83333C7.47865 18 8 17.4893 8 16.8571C8 16.225 7.47865 15.7143 6.83333 15.7143H4.5C3.85578 15.7143 3.33333 15.2025 3.33333 14.5714V5.42857C3.33333 4.7975 3.85578 4.28571 4.5 4.28571H6.83333C7.47865 4.28571 8 3.77393 8 3.14286C8 2.51179 7.47865 2 6.83333 2H4.5C2.56698 2 1 3.535 1 5.42857V14.5714C1 16.4643 2.56698 18 4.5 18Z" fill="#D0D5DD" />
            </svg>
            logout
          </a>
        </li>
      </ul>
    </div>
    <div className="p-6 mt-auto">
      <div className="flex items-center">
        <img className="w-10 h-10 rounded-full border border-white" src="assets/img/faces/2.jpg" alt="" />
        <div className="ml-2">
          <h6 className="text-base font-semibold">Gage Paquette</h6>
          <p className="text-sm font-normal text-gray-300">gagep@accommo.com</p>
        </div>
      </div>
    </div>
    </div>
  </div>
);
  
}

export default Sidebar