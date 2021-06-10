<template>
  <div>
    <div v-if="weather.current.weather[number].main === 'Clear'" class="mb-3">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="72" height="72">
        <path fill="none" d="M0 0h24v24H0z"/>
        <path
          d="M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05 3.515 4.93zM16.95 18.364l1.414-1.414 2.121 2.121-1.414 1.414-2.121-2.121zm2.121-14.85l1.414 1.415-2.121 2.121-1.414-1.414 2.121-2.121zM5.636 16.95l1.414 1.414-2.121 2.121-1.414-1.414 2.121-2.121zM23 11v2h-3v-2h3zM4 11v2H1v-2h3z"
          fill="rgba(255,173,0,1)"/>
      </svg>
    </div>
    <div v-if="weather.current.weather[number].main === 'Rain'" class="mb-3">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="72" height="72">
        <path fill="none" d="M0 0h24v24H0z"/>
        <path
          d="M16 18v-2h1a4 4 0 1 0-2.157-7.37A6 6 0 1 0 8 15.917v2.022A8.001 8.001 0 0 1 9 2a7.998 7.998 0 0 1 6.98 4.087A6 6 0 1 1 17 18h-1zm-5.768.732L12 16.964l1.768 1.768a2.5 2.5 0 1 1-3.536 0z"
          fill="rgba(149,164,166,1)"/>
      </svg>
    </div>
    <div v-if="weather.current.weather[number].main === 'Clouds'" class="mb-3">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="72" height="72">
        <path fill="none" d="M0 0h24v24H0z"/>
        <path
          d="M9.5 6a6.5 6.5 0 0 0 0 13h7a4.5 4.5 0 1 0-.957-8.898A6.502 6.502 0 0 0 9.5 6zm7 15h-7a8.5 8.5 0 1 1 7.215-12.997A6.5 6.5 0 0 1 16.5 21z"
          fill="rgba(149,164,166,1)"/>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IconCurrentWeather',
  props: [
    'weather',
    'number'
  ]
}
</script>
