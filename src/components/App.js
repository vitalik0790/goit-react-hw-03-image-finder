import React, { Component } from 'react'
import Button from './button/Button'
import ImageGallery from './imageGallery/ImageGallery'
import Modal from './modal/Modal'
import SearchBar from './searchBar/SearchBar'
import fetchApi from '../servises/Api'
import './App.css'
import Loader from './loader/Loader'
// import * as basicLightbox from 'basiclightbox'

// slr  стрелка
// rfc  так як Андрій робив
// rafc  стрелка
class App extends Component {
    state = {
        query: "",
        page: 1,
        imgList: [],
        loading: false,
        largeImageURL: null,
        error: null,
        hideBtn: true,
        showModal: false,
    }

    onHandleSearch = (e) => {
        this.setState({ query: e.target.value })
    }

    getPhoto = (e) => {
        e.preventDefault();
        this.setState({ loading: true });
        fetchApi(this.state.query, this.state.page)
            .then((response) => {
                this.setState({ imgList: [...response] })
            })
            .catch(error => this.setState({ error }))
            .finally(() => this.setState({ loading: false }))
    }

    loadMore = () => {
        this.setState({ loading: true });
        fetchApi(this.state.query, this.state.page + 1)
            .then((response) => {
                this.setState(prevState => ({ imgList: [...prevState.imgList, ...response], page: prevState.page + 1 }))
                this.setState({ loading: false });
                window.scrollTo({
                    top: document.documentElement.scrollHeight,
                    behavior: "smooth",
                });
            })
    }

    openModal = (e) => {
        console.log(e.target.dataset.sourse)
        this.setState({ largeImageURL: e.target.dataset.sourse })
        this.closeModal();
    }

    closeModal = () => {
        this.setState(({ showModal }) => ({
            showModal: !showModal,
        }));
    }


    render() {
        const { query, imgList, loading, largeImageURL, showModal, error, hideBtn } = this.state;
        return (
            <div>
                <SearchBar
                    search={query}
                    onHandleSearch={this.onHandleSearch}
                    getPhoto={this.getPhoto}
                />
                <main>
                    <ImageGallery imgList={imgList} onImageClick={this.openModal} />

                    {imgList.length > 0 && !loading && hideBtn && (
                        <Button loadMore={this.loadMore} />
                    )}
                    {loading && <Loader />}
                </main>
                {showModal && (
                    <Modal largeImage={largeImageURL} closeModal={this.closeModal} />
                )}
            </div >
        );
    }
}

export default App;