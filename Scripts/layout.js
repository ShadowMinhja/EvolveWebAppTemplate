//  This function is trigger the Right SideMenu
var layouts = function () {
    //Properties
    this.menuRight = document.getElementById('right-menu');
    this.menuRightButton = document.getElementById('right-menu-button');
    this.hasClass, this.addClass, this.removeClass;

    this.menuRightButton.onclick = function () {
        debugger;
        alert('hi');
        right_menu.toggle(this, 'active');
        right_menu.toggle(menuRight, 'cbp-spmenu-open');
        right_menu.toggle(menuRightButton, 'right-menu-button-open');
    };

    ////Initializer
    //if ('classList' in document.documentElement) {
    //    this.hasClass = function (elem, c) {
    //        return elem.classList.contains(c);
    //    };
    //    this.addClass = function (elem, c) {
    //        elem.classList.add(c);
    //    };
    //    this.removeClass = function (elem, c) {
    //        elem.classList.remove(c);
    //    };
    //}
    //else {
    //    this.hasClass = function (elem, c) {
    //        return classReg(c).test(elem.className);
    //    };
    //    this.addClass = function (elem, c) {
    //        if (!hasClass(elem, c)) {
    //            elem.className = elem.className + ' ' + c;
    //        }
    //    };
    //    this.removeClass = function (elem, c) {
    //        elem.className = elem.className.replace(classReg(c), ' ');
    //    };
    //}

    ////Methods
    //function toggleClass(elem, c) {
    //    var fn = hasClass(elem, c) ? removeClass : addClass;
    //    fn(elem, c);
    //}

    //function classReg(className) {
    //    return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
    //}

    ////Child Object
    //this.right_menu = {
    //    // full names
    //    hasClass: this.hasClass,
    //    addClass: this.addClass,
    //    removeClass: this.removeClass,
    //    toggleClass: this.toggleClass,
    //    // short names
    //    has: this.hasClass,
    //    add: this.addClass,
    //    remove: this.removeClass,
    //    toggle: this.toggleClass
    //};
}

module.exports = layouts;