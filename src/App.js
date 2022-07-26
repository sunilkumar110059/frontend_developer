
import React from 'react';
import { Routes, Route } from "react-router-dom";

import HomeIndex from './component/pages/home/HomeIndex';
import About from './component/pages/about/About';
import PageNotFound from './component/pages/pagenotfound/PageNotFound';

import {
  CrudWrapIndex,
  CrudIndex1, Edit1, View1, Post1,
  CrudIndex2,
  CrudIndex3
} from './component/pages/crudwrap/CrudModule';

import {
  SearchWrapIndex,
  SearchIndex1,
  SearchIndex2,
  SearchIndex3,
  SearchIndex4,
  SearchIndex5,
} from './component/pages/searchwrap/SearchModule'


import {
  TabWrapIndex,
  TabIndex1,
  TabIndex2,
  TabIndex3,
  TabIndex4,
  TabIndex5
} from './component/pages/tabwrap/TabModule';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeIndex />} />
      <Route path="/about" element={<About />} />

      {/* crud start */}
      <Route path="/crudwrap" element={<CrudWrapIndex />} />
      <Route path="/crudwrap/crud1" element={<CrudIndex1 />} />
      <Route path="/crudwrap/crud1/edit1/:editID" element={<Edit1 />} />
      <Route path="/crudwrap/crud1/view1/:viewID" element={<View1 />} />
      <Route path="/crudwrap/crud1/post1" element={<Post1 />} />

      <Route path="/crudwrap/crud2" element={<CrudIndex2 />} />
      <Route path="/crudwrap/crud3" element={<CrudIndex3 />} />
      {/* crud end */}

      {/* Search start */}
      <Route path="/searchwrap" element={<SearchWrapIndex />} />
      <Route path="/searchwrap/search1" element={<SearchIndex1 />} />
      <Route path="/searchwrap/search2" element={<SearchIndex2 />} />
      <Route path="/searchwrap/search3" element={<SearchIndex3 />} />
      <Route path="/searchwrap/search4" element={<SearchIndex4 />} />
      <Route path="/searchwrap/search5" element={<SearchIndex5 />} />
      {/* Search end */}


      {/* Tab start */}
      <Route path="/tabwrap" element={<TabWrapIndex />} />
      <Route path="/tabwrap/tab1" element={<TabIndex1 />} />
      <Route path="/tabwrap/tab2" element={<TabIndex2 />} />
      <Route path="/tabwrap/tab3" element={<TabIndex3 />} />
      <Route path="/tabwrap/tab4" element={<TabIndex4 />} />
      <Route path="/tabwrap/tab5" element={<TabIndex5 />} />
      {/* Tab end */}

      <Route path="*" element={<PageNotFound />} />
    </Routes>

  )
}
export default App
