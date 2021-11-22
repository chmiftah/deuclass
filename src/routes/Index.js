import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Content from '../view/Content'
import Explore from '../view/Explore'
import Home from '../view/Home'
import Journey from '../view/Journey'
import Path from '../view/Path'

export default function ReactRouter() {
  return (
    <BrowserRouter>
      <Routes>

        <Route exact path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/content/:slug/:slug" element={<Content />} />
        <Route path="/journey" element={<Journey />} />
        <Route path="/journey/:slug" element={<Path />} />
      </Routes>
    </BrowserRouter>
  )
}
