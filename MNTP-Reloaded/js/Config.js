/// <reference path="MNTPStorage.js" />
/// <reference path="main.js" />

class Config {
    constructor(tileJson) { }
    //Animação dos tiles qndo abre a tela
    static setAnimacaoInicialTiles(animar) {
        if (animar == true)
            Storage.animacaoInicialTiles = 1;

        else
            Storage.animacaoInicialTiles = 0;
    }
    static getAnimacaoInicialTiles() {
        if (Storage.animacaoInicialTiles && Storage.animacaoInicialTiles == 1)
            return true;

        else
            return false;
    }
    //Velocidade da animacao
    static setVelocidadeAnimacaoInicialTiles(n) {
        Storage.velocidadeAnimacaoInicialTiles = n;
    }
    static getVelocidadeAnimacaoInicialTiles() {
        if (!Storage.velocidadeAnimacaoInicialTiles)
            return 500;

        else
            return parseInt(Storage.velocidadeAnimacaoInicialTiles);
    }
    //Esconder botão +
    static setHideAddButton(hide) {
        if (hide == true)
            Storage.hideAddButton = 1;

        else
            Storage.hideAddButton = 0;
    }
    static getHideAddButton() {
        if (Storage.hideAddButton && Storage.hideAddButton == 1)
            return true;

        else
            return false;
    }
    //Numero de linhas
    static setRowNumber(n) {
        Storage.rowNumber = n;
    }
    static getRowNumber() {
        if (!Storage.rowNumber)
            return 0;

        else
            return parseInt(Storage.rowNumber);
    }
    //Numero de colunas
    static setColumnNumber(n) {
        Storage.columnNumber = n;
    }
    static getColumnNumber() {
        if (!Storage.columnNumber)
            return 0;

        else
            return parseInt(Storage.columnNumber);
    }
    static setSmoothScroll(smooth) {
        if (smooth == true)
            Storage.smoothScroll = 1;

        else
            Storage.smoothScroll = 0;
    }
    static getSmoothScroll() {
        if (Storage.smoothScroll == undefined)
            return true;
        else if (Storage.smoothScroll == 1)
            return true;

        else
            return false;
    }
    //Mostrar ultimas abas fechadas
    static setShowClosedTabs(show) {
        if (show == true)
            Storage.showClosedTabs = 1;

        else
            Storage.showClosedTabs = 0;
    }
    static getShowClosedTabs() {
        if (Storage.showClosedTabs == undefined)
            return true;
        else if (Storage.showClosedTabs == 1)
            return true;

        else
            return false;
    }
    //Mostrar bookmarks
    static setShowBookmarks(show) {
        if (show == true)
            Storage.showBookmarks = 1;

        else
            Storage.showBookmarks = 0;
    }
    static getShowBookmarks() {
        if (Storage.showBookmarks == undefined)
            return true;
        else if (Storage.showBookmarks == 1)
            return true;

        else
            return false;
    }
    //Mostrar aplicativos em aba separada
    static setShowAppsSeparatePage(show) {
        if (show == true)
            Storage.showAppsSeparatePage = 1;

        else
            Storage.showAppsSeparatePage = 0;
    }
    static getShowAppsSeparatePage() {
        if (Storage.showAppsSeparatePage == undefined)
            return false;
        else if (Storage.showAppsSeparatePage == 1)
            return true;

        else
            return false;
    }
    //Posição Footer
    static setFooterPosition(p) {
        Storage.footerPosition = p;
    }
    static getFooterPosition() {
        if (!Storage.footerPosition)
            return "bottom right";

        else
            return Storage.footerPosition;
    }
    //Orientação dos tiles ("H"orizontal ou "V"ertical)
    static getTilesOrientation() {
        return "H";
    }
}
























