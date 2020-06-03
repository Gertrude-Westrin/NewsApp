const app = new Vue ({
    el: '#vue-app',
    data: {
        //set filters for the news article searches based on country, category and number of articles.

    selectedCountry: '',
    countries: [
        {
            country: 'United Arab Emirates',
            value: 'ae'
        },
        {
            country: 'Argentina',
            value: 'ar'
        },
        {
            country: 'Austria',
            value: 'at'
        },
        {
            country: 'Australia',
            value: 'au'
        },
        {
            country: 'Belgium',
            value: 'be'
        },
        {
            country: 'Bulgaria',
            value: 'bg'
        },
        {
            country: 'Brazil',
            value: 'br'
        },
        {
            country: 'Canada',
            value: 'ca'
        },
        {
            country: 'Switzerland',
            value: 'ch'
        },
        {
            country: 'China',
            value: 'cn'
        },
        {
            country: 'Colombia',
            value: 'co'
        },
        {
            country: 'Cuba',
            value: 'cu'
        },
        {
            country: 'Czechia',
            value: 'cz'
        },
        {
            country: 'Germany',
            value: 'de'
        },
        {
            country: 'Egypt',
            value: 'eg'
        },
        {
            country: 'France',
            value: 'fr'
        },
        {
            country: 'United Kingdom',
            value: 'gb'
        },
        {
            country: 'Greece',
            value: 'gr'
        },
        {
            country: 'Hong Kong',
            value: 'hk'
        },
        {
            country: 'Hungary',
            value: 'hu'
        },
        {
            country: 'Indonesia',
            value: 'id'
        },
        {
            country: 'Ireland',
            value: 'ie'
        },
        {
            country: 'Israel',
            value: 'il'
        },
        {
            country: 'India',
            value: 'in'
        },
        {
            country: 'Italy',
            value: 'it'
        },
        {
            country: 'Japan',
            value: 'jp'
        },
        {
            country: 'Korea (the Republic of)',
            value: 'kr'
        },
        {
            country: 'Lithuania',
            value: 'lt'
        },
        {
            country: 'Latvia',
            value: 'lv'
        },
        {
            country: 'Morocco',
            value: 'ma'
        },
        {
            country: 'Mexico',
            value: 'mx'
        },
        {
            country: 'Malaysia',
            value: 'my'
        },
        {
            country: 'Nigeria',
            value: 'ng'
        },
        {
            country: 'Netherlands ',
            value: 'nl'
        },
        {
            country: 'Norway',
            value: 'no'
        },
        {
            country: 'New Zealand',
            value: 'nz'
        },
        {
            country: 'Philippines',
            value: 'ph'
        },
        {
            country: 'Poland',
            value: 'pl'
        },
        {
            country: 'Portugal',
            value: 'pt'
        },
        {
            country: 'Romania',
            value: 'ro'
        },
        {
            country: 'Serbia',
            value: 'rs'
        },
        {
            country: 'Russian Federation',
            value: 'ru'
        },
        {
            country: 'Saudi Arabia',
            value: 'sa'
        },
        {
            country: 'Sweden',
            value: 'se'
        },
        {
            country: 'Singapore',
            value: 'sg'
        },
        {
            country: 'Slovenia',
            value: 'si'
        },
        {
            country: 'Slovakia',
            value: 'sk'
        },
        {
            country: 'Thailand',
            value: 'th'
        },
        {
            country: 'Turkey',
            value: 'tr'
        },
        {
            country: 'Taiwan',
            value: 'tw'
        },
        {
            country: 'Ukraine',
            value: 'ua'
        },
        {
            country: 'United States of America',
            value: 'us'
        },
        {
            country: 'Venezuela',
            value: 've'
        },
        {
            country: 'South Africa',
            value: 'za'
        },
    
    ],

    selectedCategory: '',
    categories: [
        {
            category: 'Business',
            value: 'business'
        },
        {
            category: 'Entertainment',
            value: 'entertainment'
        },
        {
            category: 'General',
            value: 'general'
        },
        {
            category: 'Health',
            value: 'health'
        },
        {
            category: 'Science',
            value: 'science'
        },
        {
            category: 'Sports',
            value: 'sports'
        },
        {
            category: 'Technology',
            value: 'technology'
        },
    ],

    selectedNumberOfArticles: '',
    numberOfArticles: [
        {
            display: '1-10',
            value: '10'
        },
        {
            display: '10-20',
            value: '20'
        },
        {
            display: '20-30',
            value: '30'
        },
        {
            display: '30-40',
            value: '40'
        },
        {
            display: '40-50',
            value: '50'
        },
        {
            display: '50-60',
            value: '60'
        },
        {
            display: '60-70',
            value: '70'
        },
        {
            display: '70-80',
            value: '80'
        },
        {
            display: '80-90',
            value: '90'
        },
        {
            display: '90-100',
            value: '100'
        },
    
    ],

    
        //define news articles 
        newsArticles: []
    },

    methods: {
        //set methods to fetch the news based on users choices
        displayNews: function () {
        fetch ('http://newsapi.org/v2/top-headlines?' +
        'country=' +this.selectedCountry +
        '&category=' +this.selectedCategory +
        '&pageSize=' +this.selectedNumberOfArticles +
        '&apiKey=a4d9371617de431f96d284b2d7820ec4')
        .then(response => response.json()) 
        .then(news => {
        this.newsArticles = news.articles; 
        console.log(this.newsArticles);
        })

    }, 
        //define what happens when user makes a choice and check in console that everything works. 
        countryChoice(event) {
            console.log(event.target.value);
        },

        categoryChoice(event) {
            console.log(event.target.value);
        },

        articleNumberChoice(event) {
            console.log(event.target.value);
        }
    },

})






