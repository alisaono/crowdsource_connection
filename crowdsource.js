const locations = {
  // California, US
  'LA-CA': { coords: [34.0522, -118.2437], label: 'Los Angeles, CA' },
  'SD-CA': { coords: [32.7157, -117.1611], label: 'San Diego, CA' },
  'RC-CA': { coords: [34.1064, -117.5931], label: 'Rancho Cucamonga, CA' },
  'RH-CA': { coords: [33.9761, -117.9053], label: 'Rowland Heights, CA' },
  // Georgia, US
  'PS-GA': { coords: [33.8595, -84.6838], label: 'Powder Springs, GA' },
  // Florida, US
  'TL-FL': { coords: [30.4383, -84.2807], label: 'Tallahassee, FL' },
  // Illinois, US
  'DP-IL': { coords: [42.0334, -87.8834], label: 'Des Plaines, IL' },
  // Indiana, US
  'IN-IN': { coords: [39.7684, -86.1581], label: 'Indianapolis, IN' },
  // Maryland, US
  'MD': { coords: [39.0458, -76.6413], label: 'Maryland' },
  // Massachusetts, US
  'MA': { coords: [42.4072, -71.3824], label: 'Massachusetts'},
  'BO-MA': { coords: [42.3601, -71.0589], label: 'Boston, MA' },
  'CA-MA': { coords: [42.3736, -71.1097], label: 'Cambridge, MA' },
  // Michigan, US
  'EL-MI': { coords: [42.7370, -84.4839], label: 'East Lansing, MI' },
  'GR-MI': { coords: [42.9634, -85.6681], label: 'Grand Rapids, MI' },
  'ST-MI': { coords: [42.0145, -86.5195], label: 'Stevensville, MI' },
  'TR-MI': { coords: [42.6064, -83.1498], label: 'Troy, MI' },
  // Minnesota, US
  'SP-MN': { coords: [44.9537, -93.0900], label: 'St. Paul, MN' },
  // New Jersey, US
  'GR-NJ': { coords: [40.9629, -74.1329], label: 'Glen Rock, NJ' },
  // New York, US
  'BR-NY': { coords: [40.6782, -73.9442], label: 'Brooklyn, NY' },
  'IT-NY': { coords: [42.4440, -76.5019], label: 'Ithaca, NY' },
  'NY-NY': { coords: [40.7128, -74.0060], label: 'New York City, NY' },
  'QE-NY': { coords: [40.7282, -73.7949], label: 'Queens, NY' },
  // Pennsylvania, US
  'PA': { coords: [41.2033, -77.1945], label: 'Pennsylvania' },
  'LN-PA': { coords: [40.0379, -76.3055], label: 'Lancaster, PA' },
  'PH-PA': { coords: [39.9526, -75.1652], label: 'Philadelphia, PA' },
  // Texas, US
  'CA-TX': { coords: [29.3558, -98.8786], label: 'Castroville, TX' },
  // Virginia, US
  'AX-VA': { coords: [38.8048, -77.0469], label: 'Alexandria, VA' },
  'AN-VA': { coords: [38.8304, -77.1964], label: 'Annandale, VA' },
  // Wisconsin, US
  'WI': { coords: [43.7844, -88.7879], label: 'Wisconsin' },
  'MA-WI': { coords: [43.0731, -89.4012], label: 'Madison, WI' },
  // Brazil
  'BZ': { coords: [-14.2350, -51.9253], label: 'Brazil' },
  'SP-BZ': { coords: [-23.5505, -46.6333], label: 'São Paulo, Brazil' },
  // China
  'CN': { coords: [35.8617, 104.1954], label: 'China' },
  'BJ-CN': { coords: [39.9042, 116.4074], label: 'Beijing, China' },
  'GZ-CN': { coords: [23.1291, 113.2644], label: 'Guangzhou, China' },
  'GD-CN': { coords: [23.3790, 113.7633], label: 'Guangdong, China' },
  'SH-CN': { coords: [31.2304, 121.4737], label: 'Shanghai, China' },
  'WH-CN': { coords: [30.5928, 114.3055], label: 'Wuhan, China' },
  // Japan
  'TK-JP': { coords: [35.6895, 139.6917], label: 'Tokyo, Japan' },
  // South Korea
  'SK': { coords: [35.9078, 127.7669], label: 'South Korea' },
  // Thailand
  'TH': { coords: [15.8700, 100.9925], label: 'Thailand' },
  'BK-TH': { coords: [13.7563, 100.5018], label: 'Bangkok, Thailand' },
}

const colors = {
  'white': { hex: '#ffffff', label: 'White' },
  'black': { hex: '#333333', label: 'Black' },
  'red': { hex: '#e50d00', label: 'Red' },
  'orange': { hex: '#ffa64d', label: 'Orange' },
  'yellow': { hex: '#ffff4d', label: 'Yellow' },
  'teal': { hex: '#008080', label: 'Teal' },
  'green': { hex: '#66c766', label: 'Green' },
  'blue': { hex: '#1959b3', label: 'Blue' },
  'sky_blue': { hex: '#7ec0ee', label: 'Sky Blue' },
  'cobalt_blue': { hex: '#0047ab', label: 'Cobalt Blue' },
  'pastel_blue': { hex: '#add8e6', label: 'Pastel Blue' },
  'light_blue': { hex: '#add8e6', label: 'Light Blue' },
  'lavender': { hex: '#bcbcf2', label: 'Lavender' },
  'purple': { hex: '#885ead', label: 'Purple' },
  'deep_purple': { hex: '#4c177d', label: 'Deep Purple' },
  'pink': { hex: '#f47983', label: 'Pink' },
  'light_pink': { hex: '#f9bcc1', label: 'Light Pink' },
}

// SVG marker for the maps
const mapPointSVG = "M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z"

let queue = d3.queue()
  .defer(d3.csv, './crowdsource.csv', parseData)
  .await(dataLoaded)

function parseData(d){
  let location = d["Location"]
  if (location === 'BO-MA' || location === 'CA-MA') {
    location = 'MA'
  } else if (location === 'QE-NY') {
    location = 'NY-NY'
  }
  return {
    id: +d["ID"],
    referrer: +d["Referrer"],
    time: +d["Time"],
    origin: d["Origin"],
    location: location,
    food: d["Food"],
    color: d["Color"],
    animal: d["Animal"],
  }
}

function dataLoaded(err, data){
  // Sort the data by ID
  data.sort((a, b) => { return a.id - b.id })

  // Create the map of locations
  let locationLinesPoints = getMapLinesPoints(data, 'location')
  makeMapChart('location-map', locationLinesPoints[0], locationLinesPoints[1])
  // Create the map of origins
  let originLinesPoints = getMapLinesPoints(data, 'origin')
  makeMapChart('origin-map', originLinesPoints[0], originLinesPoints[1])

  // Randomize the card order
  let cardsOrder = []
  data.map(x => {
    cardsOrder.push([x.id, 'animal'], [x.id, 'food'])
  })
  cardsOrder.sort((a, b) => { return 0.5 - Math.random() }) // Shuffle the cards order
  // Append cards
  for (let i of cardsOrder) {
    if (i[1] === 'animal') {
      appendAnimalCard(i[0])
    } else {
      appendFoodCard(i[0])
    }
  }
  // Add click events to cards
  $('.animal').on('click', animalOnClick)
  $('.food').on('click', foodOnClick)

  // Populate the photos section
  for (let d of data) {
    let $photo = $('<div>').addClass('card').addClass('photo')
    $photo.append($('<img>').prop('src', `./img/people/${d.id}.jpg`))
    $('#photos-container').append($photo)
  }
}

// Create and add an animal card for id to the #cards-container
function appendAnimalCard(id){
  let $card = $('<div>').addClass('card').addClass('animal').attr('id', `anim-${id}`)
  $card.append($('<img>').prop('src', `./img/animal/${id}.svg`))
  $('#cards-container').append($card)
}

// Create and add a food card for id to the #cards-container
function appendFoodCard(id){
  let $card = $('<div>').addClass('card').addClass('food').attr('id', `food-${id}`)
  $card.append($('<img>').prop('src', `./img/food/${id}.jpg`))
  $('#cards-container').append($card)
}

// Click event for animal cards
function animalOnClick(){
  $('.card').off() // Disable click events on card
  let thisID = $(this).attr('id').substring(5)
  $(this).empty().removeClass('animal').addClass('person')
  $(this).append($('<img>').prop('src', `./img/people/${thisID}.jpg`))
  flip(thisID, 'animal')
}

// Click event for food cards
function foodOnClick(){
  $('.card').off() // Disable click events on card
  let thisID = $(this).attr('id').substring(5)
  $(this).empty().removeClass('food').addClass('person')
  $(this).append($('<img>').prop('src', `./img/people/${thisID}.jpg`))
  flip(thisID, 'food')
}

// First of the pair of flipped cards
let flipped = null

// Update 'flipped' and check for match or mismatch
function flip(id, type){
  if (flipped === null) { // First card
    flipped = [id, type]

  } else {
    let $first = $(`#${flipped[1].substring(0,4)}-${flipped[0]}`)
    let $second = $(`#${type.substring(0,4)}-${id}`)

    if (flipped[0] !== id) { // Mismatch
      $first.addClass('mismatched')
      $second.addClass('mismatched')
      setTimeout(function(){ // Add back click events to animal, food cards
        // Unflip the second card
        $second.empty().removeClass('person').removeClass('mismatched').addClass(type)
        $second.append($('<img>').prop('src', `./img/${type}/${id}.${type==='food'?'jpg':'svg'}`))
        // Unflip the first card
        $first.empty().removeClass('person').removeClass('mismatched').addClass(flipped[1])
        $first.append($('<img>').prop('src', `./img/${flipped[1]}/${flipped[0]}.${flipped[1]==='food'?'jpg':'svg'}`))
        flipped = null
        $('.animal').on('click', animalOnClick)
        $('.food').on('click', foodOnClick)
      }, 600)
      return
    }

    if (flipped[0] === id && flipped[1] !== type) { // Match
      $first.addClass('matched')
      $second.addClass('matched')
      flipped = null
    }
  }

  setTimeout(function(){ // Add back click events to animal, food cards
    $('.animal').on('click', animalOnClick)
    $('.food').on('click', foodOnClick)
  }, 600)
}

// Returns [lines, points] for marking a map, given data and type as prop
function getMapLinesPoints(data, prop) {
  let lines = []
  let points = []
  let lineArcs = {}
  let pointsVisited = {}

  for (let d of data) {
    if (!(d[prop] in pointsVisited)) {
      let location = locations[d[prop]]
      pointsVisited[d[prop]] = 1
      points.push({
        id: d[prop],
        svgPath: mapPointSVG,
        title: location.label,
        latitude: location.coords[0],
        longitude: location.coords[1],
      })
    } else {
      pointsVisited[d[prop]] += 1
    }

    let refLocationID = data[d.referrer][prop]
    if (d.id !== d.referrer && d[prop] !== refLocationID) {
      let thisLocation = locations[d[prop]]
      let refLocation = locations[refLocationID]
      let arc = -0.85
      if (`${d[prop]}-${refLocationID}` in lineArcs) {
        arc = lineArcs[`${d[prop]}-${refLocationID}`] + 0.05
      }
      lines.push({
        id: `${d.referrer}-${d.id}`,
        arc: arc,
        alpha: 0.3,
        latitudes: [refLocation.coords[0], thisLocation.coords[0]],
        longitudes: [refLocation.coords[1], thisLocation.coords[1]],
      })
      lineArcs[`${d[prop]}-${refLocationID}`] = arc
    }
  }
  let visits = Object.values(pointsVisited)
  let minVisit = Math.min(...visits)
  let maxVisit = Math.max(...visits)
  for (let p of points) {
    p.scale = 1 + 1 * (pointsVisited[p.id] - minVisit) / (maxVisit - minVisit)
  }
  console.log(pointsVisited)
  return [lines, points]
}

// Create a map chart on #plot, marked with lines and points
function makeMapChart(plot, lines, points) {
  let map = AmCharts.makeChart(plot, {
    type: 'map',
    theme: 'none',
    dataProvider: {
      map: 'worldLow',
      zoomLevel: 3.5,
      zoomLongitude: -55,
      zoomLatitude: 42,
      lines: lines,
      images: points,
    },
    areasSettings: {
      unlistedAreasColor: "#8dd9ef"
    },
    imagesSettings: {
      color: "#585869",
      opacity: 0.8,
      rollOverColor: "#585869",
      selectedColor: "#585869",
      pauseDuration: 0.2,
      animationDuration: 2.5,
    },
    linesSettings: {
      color: "#585869",
      alpha: 0.4,
    }
  })
}
