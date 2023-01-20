const { zing } = require("zingmp3-api-next");

// DOCUMENT : https://github.com/shin202/zingmp3-api-next?fbclid=IwAR04R0UpiRclg7eLIO2VeCG1HvHw_6nPGEWnxZd9_5SETWUlMzeDzNN9UmA#get-top-100

const zingController = {
    // [GET] /api/home 
    getHome: async (req, res) => {
        try {
            const data = await zing.get_home();
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    // [GET] /api/song/:id 
    getSong: async (req, res) => {
        try {
            const data = await zing.get_song(req.params.id);
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    // [GET] /api/song-info/:id 
    getSongInfo: async (req, res) => {
        try {
            const data = await zing.get_song_info(req.params.id);
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    // [GET] /api/song-lyric/:id 
    getSongLyric: async (req, res) => {
        try {
            const data = await zing.get_song_lyric(req.params.id);
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    // [GET] /api/home-chart 
    getHomeChart: async (req, res) => {
        try {
            const data = await zing.get_home_chart();
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    // [GET] /api/new-release
    getNewRelease: async (req, res) => {
        try {
            const data = await zing.get_new_release_chart();
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    // [GET] /api/week-chart/id?week={1}&year={2023}
    getWeekChart: async (req, res) => {
        const { week = 0, year = 0 } = req.query;
        try {
            const data = await zing.get_week_chart(req.params.id, +week, +year);
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    
    // [GET] /api/radio
    getRadio: async (req, res) => {
        try {
            const data = await zing.get_radio();
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    // [GET] /api/new-feed/:id?page={1}
    getNewFeed: async (req, res) => {
        const {page = 1} = req.query;
        try {
            const data = await zing.get_list_by_genre(req.params.id, +page);
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    // [GET] /api/artist/:slug
    // slug = ten ca si: Son-Tung-M-TP
    getArtist: async (req, res) => {
        try {
            const data = await zing.get_artist(req.params.slug);
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    // [GET] /api/hub-home
    getHubHome: async (req, res) => {
        try {
            const data = await zing.get_hub_home();
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    // [GET] /api/hub-home/:id => id = IWZ9Z09A
    getHubDetail: async (req, res) => {
        try {
            const data = await zing.get_hub_detail(req.params.id);
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    // [GET] /api/top-100
    getTop100: async (req, res) => {
        try {
            const data = await zing.get_top_100();
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    // [GET] /api/list-mv/:id?page={1}&count={15}&sort={listen} 
    // id = IWZ9Z08I
    // sort = listen || hot || new.
    getListMv: async (req, res) => {
        const { page = 1, count = 15, sort = 'listen'} = req.query;
        try {
            const data = await zing.get_list_mv(req.params.id, page,count, sort);
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    // [GET] /api/category-mv/:id => id = IWZ97FCE
    getCategoryMv: async (req, res) => {
        try {
            const data = await zing.get_category_mv(req.params.id);
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    // [GET] /api/mv/:id => id = ZUZBBOFF
    getMv: async (req, res) => {
        try {
            const data = await zing.get_mv(req.params.id);
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    
    // [GET] /api/playlist/:id => id = ZODAB8EF
    getPlaylist: async (req, res) => {
        try {
            const data = await zing.get_playlist(req.params.id);
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    // [GET] /api/suggest-playlist/:id => id = ZODAB8EF
    getSuggestPlaylist: async (req, res) => {
        try {
            const data = await zing.get_suggested_playlists(req.params.id);
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    // [GET] /api/event
    getEvent: async (req, res) => {
        try {
            const data = await zing.get_events();
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    // [GET] /api/event-info/:id => id = IWZ97FZF
    getEventInfo: async (req, res) => {
        try {
            const data = await zing.get_event_info(req.params.id);
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    // [GET] /api/search-all?keyword={Alan Walker}
    searchAll: async (req, res) => {
        try {
            const data = await zing.search_all(req.query.keyword);
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    // [GET] /api/search-type?keyword={Alan Walker}&type={(Music || Playlist || Artist || Video)}&page={1}&count={18}
    searchByType: async (req, res) => {
        const {keyword = '', type = 'song', page = 1, count = 18} = req.query;
        try {
            const data = await zing.search_by_type(keyword, type, page, count);
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    // [GET] /api/recommend-keyword
    getRecommendKeyword: async (req, res) => {
        try {
            const data = await zing.get_recommend_keyword();
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    // [GET] /suggestion-keyword?keyword={son tung}
    getSuggestionKeyword: async (req, res) => {
        try {
            const data = await zing.get_suggestion_keyword(req.query.keyword);
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json(error);
        }
    },
}

module.exports = zingController;