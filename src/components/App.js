import React, { Component } from 'react'
import Button from './button/Button'
import ImageGallery from './imageGallery/ImageGallery'
import Modal from './modal/Modal'
import SearchBar from './searchBar/SearchBar'
import fetchApi from '../servises/Api'
import './App.css'
// import * as basicLightbox from 'basiclightbox'

// slr  стрелка
// rfc  так як Андрій робив
// rafc  стрелка
class App extends Component {
    state = {
        query: "",
        page: 1,
        imgList: [],
        modalIsOpen: false,
        loading: false,
    }

    onHandleSearch = (e) => {
        this.setState({ query: e.target.value })
    }

    getPhoto = (e) => {
        e.preventDefault();
        fetchApi(this.state.query, this.state.page)
            .then((response) => {
                this.setState({ imgList: [...response] })
            })
    }

    loadMore = () => {
        fetchApi(this.state.query, this.state.page + 1)
            .then((response) => {
                this.setState(prevState => ({ imgList: [...prevState.imgList, ...response], page: prevState.page + 1 }))
            })
    }

    render() {
        return (
            <div>
                <SearchBar
                    search={this.state.query}
                    onHandleSearch={this.onHandleSearch}
                    getPhoto={this.getPhoto}
                />
                <main>
                    <ImageGallery imgList={this.state.imgList} />
                    <Button loadMore={this.loadMore} />
                </main>
                <Modal />
            </div >
        );
    }
}

export default App;