const router = require('express').Router();
const zingController = require('../controllers/zing');

// DOCUMENT : https://github.com/shin202/zingmp3-api-next?fbclid=IwAR04R0UpiRclg7eLIO2VeCG1HvHw_6nPGEWnxZd9_5SETWUlMzeDzNN9UmA#get-top-100

router.get('/home', zingController.getHome);

router.get('/song/:id', zingController.getSong);
router.get('/song-info/:id', zingController.getSongInfo);
router.get('/song-lyric/:id', zingController.getSongLyric);

router.get('/home-chart', zingController.getHomeChart);
router.get('/new-release', zingController.getNewRelease);
router.get('/week-chart/:id', zingController.getWeekChart);

router.get('/radio', zingController.getRadio);

router.get('/new-feed/:id', zingController.getNewFeed);

router.get('/artist/:slug', zingController.getArtist);

router.get('/hub-home', zingController.getHubHome);
router.get('/hub-detail/:id', zingController.getHubDetail);

router.get('/top-100', zingController.getTop100);

router.get('/list-mv/:id', zingController.getListMv);
router.get('/category-mv/:id', zingController.getCategoryMv);
router.get('/mv/:id', zingController.getMv);

router.get('/playlist/:id', zingController.getPlaylist);
router.get('/suggest-playlist/:id', zingController.getSuggestPlaylist);

router.get('/event', zingController.getEvent);
router.get('/event-info/:id', zingController.getEventInfo);

router.get('/search-all', zingController.searchAll);
router.get('/search-type', zingController.searchByType);

router.get('/recommend-keyword', zingController.getRecommendKeyword);

router.get('/suggestion-keyword', zingController.getSuggestionKeyword);


module.exports = router;