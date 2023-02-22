'use strict';

/**
 * list-article service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::list-article.list-article');
