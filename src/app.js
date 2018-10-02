import {api, view, port} from '../config/site';
import * as logger from './common/log';

const app = require('express')();
const http = require('http').Server(app);

http.listen(port, () => {
    logger.info(`listening to port ${port}`);
});

app.get(`${api.prefix}/user`, (req, res) => {
    res.json({
        name: 'zyp',
        id: 1
    });
});