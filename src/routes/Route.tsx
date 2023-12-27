import React from 'react'
import { BrowserRouter, Routes } from "react-router-dom";
import { Route } from "react-router-dom";

import Home from '../pages/Home';
import Blogs from '../pages/home/components/Blogs';
import Contact from '@/pages/home/components/Contact';
import ListProduct from '@/pages/admin/ListProduct';
import ListUser from '@/pages/admin/ListUser';
import Admin from '@/pages/admin/Admin';

import Authen from '@/pages/authen/Authen';
import Register from '@/pages/authen/components/Register';
import Login from '@/pages/authen/components/Login';


export default function RouteCom() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />}>
                        <Route path="blogs" element={<Blogs />} />
                        <Route path="contact" element={<Contact />} />
                    </Route>

                    <Route path="/admin" element={<Admin />}>
                        <Route path="product-manager" element={<ListProduct />} />
                        <Route path="user-manager" element={<ListUser />} />
                    </Route>

                    <Route path='/authen' element={<Authen></Authen>}></Route>
                    <Route path='/register' element={<Register></Register>}></Route>
                    <Route path='/login' element={<Login></Login>}></Route>

                    
                </Routes>

            </BrowserRouter>
        </div>
    )
}
