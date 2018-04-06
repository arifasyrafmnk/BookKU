'use strict';

import mongoose from 'mongoose';
import {registerEvents} from './book.events';

var BookSchema = new mongoose.Schema({
  name: String,
  info: String,
  active: Boolean
});

registerEvents(BookSchema);
export default mongoose.model('Book', BookSchema);
