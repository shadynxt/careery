(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"],{

/***/ "./node_modules/ng-circle-progress/index.js":
/*!**************************************************!*\
  !*** ./node_modules/ng-circle-progress/index.js ***!
  \**************************************************/
/*! exports provided: NgCircleProgressModule, CircleProgressOptions, CircleProgressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgCircleProgressModule", function() { return NgCircleProgressModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CircleProgressOptions", function() { return CircleProgressOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CircleProgressComponent", function() { return CircleProgressComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @record
 */

var CircleProgressOptions = /** @class */ (function () {
    function CircleProgressOptions() {
        this.class = '';
        this.backgroundColor = 'transparent';
        this.backgroundOpacity = 1;
        this.backgroundStroke = 'transparent';
        this.backgroundStrokeWidth = 0;
        this.backgroundPadding = 5;
        this.percent = 0;
        this.radius = 90;
        this.space = 4;
        this.toFixed = 0;
        this.maxPercent = 1000;
        this.renderOnClick = true;
        this.units = '%';
        this.unitsFontSize = '10';
        this.unitsColor = '#444444';
        this.outerStrokeWidth = 8;
        this.outerStrokeColor = '#78C000';
        this.outerStrokeLinecap = 'round';
        this.innerStrokeColor = '#C7E596';
        this.innerStrokeWidth = 4;
        this.titleFormat = undefined;
        this.title = 'auto';
        this.titleColor = '#444444';
        this.titleFontSize = '20';
        this.subtitleFormat = undefined;
        this.subtitle = 'progress';
        this.subtitleColor = '#A9A9A9';
        this.subtitleFontSize = '10';
        this.imageSrc = undefined;
        this.imageHeight = undefined;
        this.imageWidth = undefined;
        this.animation = true;
        this.animateTitle = true;
        this.animateSubtitle = false;
        this.animationDuration = 500;
        this.showTitle = true;
        this.showSubtitle = true;
        this.showUnits = true;
        this.showImage = false;
        this.showBackground = true;
        this.showInnerStroke = true;
        this.clockwise = true;
        this.responsive = false;
        this.startFromZero = true;
    }
    return CircleProgressOptions;
}());
var CircleProgressComponent = /** @class */ (function () {
    function CircleProgressComponent(defaultOptions) {
        var _this = this;
        this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.options = new CircleProgressOptions();
        this.defaultOptions = new CircleProgressOptions();
        this._lastPercent = 0;
        this.render = function () {
            _this.applyOptions();
            if (_this.options.animation && _this.options.animationDuration > 0) {
                _this.animate(_this._lastPercent, _this.options.percent);
            }
            else {
                _this.draw(_this.options.percent);
            }
            _this._lastPercent = _this.options.percent;
        };
        this.polarToCartesian = function (centerX, centerY, radius, angleInDegrees) {
            var /** @type {?} */ angleInRadius = angleInDegrees * Math.PI / 180;
            var /** @type {?} */ x = centerX + Math.sin(angleInRadius) * radius;
            var /** @type {?} */ y = centerY - Math.cos(angleInRadius) * radius;
            return { x: x, y: y };
        };
        this.draw = function (percent) {
            // make percent reasonable
            percent = (percent === undefined) ? _this.options.percent : Math.abs(percent);
            // circle percent shouldn't be greater than 100%.
            var /** @type {?} */ circlePercent = (percent > 100) ? 100 : percent;
            // determine box size
            var /** @type {?} */ boxSize = _this.options.radius * 2 + _this.options.outerStrokeWidth * 2;
            if (_this.options.showBackground) {
                boxSize += (_this.options.backgroundStrokeWidth * 2 + _this.max(0, _this.options.backgroundPadding * 2));
            }
            // the centre of the circle
            var /** @type {?} */ centre = { x: boxSize / 2, y: boxSize / 2 };
            // the start point of the arc
            var /** @type {?} */ startPoint = { x: centre.x, y: centre.y - _this.options.radius };
            // get the end point of the arc
            var /** @type {?} */ endPoint = _this.polarToCartesian(centre.x, centre.y, _this.options.radius, 360 * (_this.options.clockwise ?
                circlePercent :
                (100 - circlePercent)) / 100); // ####################
            // We'll get an end point with the same [x, y] as the start point when percent is 100%, so move x a little bit.
            if (circlePercent === 100) {
                endPoint.x = endPoint.x + (_this.options.clockwise ? -0.01 : +0.01);
            }
            // largeArcFlag and sweepFlag
            var /** @type {?} */ largeArcFlag, /** @type {?} */ sweepFlag;
            if (circlePercent > 50) {
                _a = _this.options.clockwise ? [1, 1] : [1, 0], largeArcFlag = _a[0], sweepFlag = _a[1];
            }
            else {
                _b = _this.options.clockwise ? [0, 1] : [0, 0], largeArcFlag = _b[0], sweepFlag = _b[1];
            }
            // percent may not equal the actual percent
            var /** @type {?} */ titlePercent = _this.options.animateTitle ? percent : _this.options.percent;
            var /** @type {?} */ titleTextPercent = titlePercent > _this.options.maxPercent ?
                _this.options.maxPercent.toFixed(_this.options.toFixed) + "+" : titlePercent.toFixed(_this.options.toFixed);
            var /** @type {?} */ subtitlePercent = _this.options.animateSubtitle ? percent : _this.options.percent;
            // get title object
            var /** @type {?} */ title = {
                x: centre.x,
                y: centre.y,
                textAnchor: 'middle',
                color: _this.options.titleColor,
                fontSize: _this.options.titleFontSize,
                texts: [],
                tspans: []
            };
            // from v0.9.9, both title and titleFormat(...) may be an array of string.
            if (_this.options.titleFormat !== undefined && _this.options.titleFormat.constructor.name === 'Function') {
                var /** @type {?} */ formatted = _this.options.titleFormat(titlePercent);
                if (formatted instanceof Array) {
                    title.texts = formatted.slice();
                }
                else {
                    title.texts.push(formatted.toString());
                }
            }
            else {
                if (_this.options.title === 'auto') {
                    title.texts.push(titleTextPercent);
                }
                else {
                    if (_this.options.title instanceof Array) {
                        title.texts = _this.options.title.slice();
                    }
                    else {
                        title.texts.push(_this.options.title.toString());
                    }
                }
            }
            // get subtitle object
            var /** @type {?} */ subtitle = {
                x: centre.x,
                y: centre.y,
                textAnchor: 'middle',
                color: _this.options.subtitleColor,
                fontSize: _this.options.subtitleFontSize,
                texts: [],
                tspans: []
            };
            // from v0.9.9, both subtitle and subtitleFormat(...) may be an array of string.
            if (_this.options.subtitleFormat !== undefined && _this.options.subtitleFormat.constructor.name === 'Function') {
                var /** @type {?} */ formatted = _this.options.subtitleFormat(subtitlePercent);
                if (formatted instanceof Array) {
                    subtitle.texts = formatted.slice();
                }
                else {
                    subtitle.texts.push(formatted.toString());
                }
            }
            else {
                if (_this.options.subtitle instanceof Array) {
                    subtitle.texts = _this.options.subtitle.slice();
                }
                else {
                    subtitle.texts.push(_this.options.subtitle.toString());
                }
            }
            // get units object
            var /** @type {?} */ units = {
                text: "" + _this.options.units,
                fontSize: _this.options.unitsFontSize,
                color: _this.options.unitsColor
            };
            // get total count of text lines to be shown
            var /** @type {?} */ rowCount = 0, /** @type {?} */ rowNum = 1;
            _this.options.showTitle && (rowCount += title.texts.length);
            _this.options.showSubtitle && (rowCount += subtitle.texts.length);
            // calc dy for each tspan for title
            if (_this.options.showTitle) {
                for (var _i = 0, _c = title.texts; _i < _c.length; _i++) {
                    var span = _c[_i];
                    title.tspans.push({ span: span, dy: _this.getRelativeY(rowNum, rowCount) });
                    rowNum++;
                }
            }
            // calc dy for each tspan for subtitle
            if (_this.options.showSubtitle) {
                for (var _d = 0, _e = subtitle.texts; _d < _e.length; _d++) {
                    var span = _e[_d];
                    subtitle.tspans.push({ span: span, dy: _this.getRelativeY(rowNum, rowCount) });
                    rowNum++;
                }
            }
            // Bring it all together
            // Bring it all together
            _this.svg = {
                viewBox: "0 0 " + boxSize + " " + boxSize,
                // Set both width and height to '100%' if it's responsive
                width: _this.options.responsive ? '100%' : boxSize,
                height: _this.options.responsive ? '100%' : boxSize,
                backgroundCircle: {
                    cx: centre.x,
                    cy: centre.y,
                    r: _this.options.radius + _this.options.outerStrokeWidth / 2 + _this.options.backgroundPadding,
                    fill: _this.options.backgroundColor,
                    fillOpacity: _this.options.backgroundOpacity,
                    stroke: _this.options.backgroundStroke,
                    strokeWidth: _this.options.backgroundStrokeWidth,
                },
                path: {
                    // A rx ry x-axis-rotation large-arc-flag sweep-flag x y (https://developer.mozilla.org/en/docs/Web/SVG/Tutorial/Paths#Arcs)
                    d: "M " + startPoint.x + " " + startPoint.y + "\n        A " + _this.options.radius + " " + _this.options.radius + " 0 " + largeArcFlag + " " + sweepFlag + " " + endPoint.x + " " + endPoint.y,
                    stroke: _this.options.outerStrokeColor,
                    strokeWidth: _this.options.outerStrokeWidth,
                    strokeLinecap: _this.options.outerStrokeLinecap,
                    fill: 'none'
                },
                circle: {
                    cx: centre.x,
                    cy: centre.y,
                    r: _this.options.radius - _this.options.space - _this.options.outerStrokeWidth / 2 - _this.options.innerStrokeWidth / 2,
                    fill: 'none',
                    stroke: _this.options.innerStrokeColor,
                    strokeWidth: _this.options.innerStrokeWidth,
                },
                title: title,
                units: units,
                subtitle: subtitle,
                image: {
                    x: centre.x - _this.options.imageWidth / 2,
                    y: centre.y - _this.options.imageHeight / 2,
                    src: _this.options.imageSrc,
                    width: _this.options.imageWidth,
                    height: _this.options.imageHeight,
                },
            };
            var _a, _b;
        };
        this.getAnimationParameters = function (previousPercent, currentPercent) {
            var /** @type {?} */ MIN_INTERVAL = 10;
            var /** @type {?} */ times, /** @type {?} */ step, /** @type {?} */ interval;
            var /** @type {?} */ fromPercent = _this.options.startFromZero ? 0 : (previousPercent < 0 ? 0 : previousPercent);
            var /** @type {?} */ toPercent = currentPercent < 0 ? 0 : _this.min(currentPercent, _this.options.maxPercent);
            var /** @type {?} */ delta = Math.abs(Math.round(toPercent - fromPercent));
            if (delta >= 100) {
                // we will finish animation in 100 times
                times = 100;
                if (!_this.options.animateTitle && !_this.options.animateSubtitle) {
                    step = 1;
                }
                else {
                    // show title or subtitle animation even if the arc is full, we also need to finish it in 100 times.
                    step = Math.round(delta / times);
                }
            }
            else {
                // we will finish in as many times as the number of percent.
                times = delta;
                step = 1;
            }
            // Get the interval of timer
            interval = Math.round(_this.options.animationDuration / times);
            // Readjust all values if the interval of timer is extremely small.
            if (interval < MIN_INTERVAL) {
                interval = MIN_INTERVAL;
                times = _this.options.animationDuration / interval;
                if (!_this.options.animateTitle && !_this.options.animateSubtitle && delta > 100) {
                    step = Math.round(100 / times);
                }
                else {
                    step = Math.round(delta / times);
                }
            }
            // step must be greater than 0.
            if (step < 1) {
                step = 1;
            }
            return { times: times, step: step, interval: interval };
        };
        this.animate = function (previousPercent, currentPercent) {
            if (_this._timerSubscription && !_this._timerSubscription.closed) {
                _this._timerSubscription.unsubscribe();
            }
            var /** @type {?} */ fromPercent = _this.options.startFromZero ? 0 : previousPercent;
            var /** @type {?} */ toPercent = currentPercent;
            var _a = _this.getAnimationParameters(fromPercent, toPercent), step = _a.step, interval = _a.interval;
            var /** @type {?} */ count = fromPercent;
            if (fromPercent < toPercent) {
                _this._timerSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(0, interval).subscribe(function () {
                    count += step;
                    if (count <= toPercent) {
                        if (!_this.options.animateTitle && !_this.options.animateSubtitle && count >= 100) {
                            _this.draw(toPercent);
                            _this._timerSubscription.unsubscribe();
                        }
                        else {
                            _this.draw(count);
                        }
                    }
                    else {
                        _this.draw(toPercent);
                        _this._timerSubscription.unsubscribe();
                    }
                });
            }
            else {
                _this._timerSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(0, interval).subscribe(function () {
                    count -= step;
                    if (count >= toPercent) {
                        if (!_this.options.animateTitle && !_this.options.animateSubtitle && toPercent >= 100) {
                            _this.draw(toPercent);
                            _this._timerSubscription.unsubscribe();
                        }
                        else {
                            _this.draw(count);
                        }
                    }
                    else {
                        _this.draw(toPercent);
                        _this._timerSubscription.unsubscribe();
                    }
                });
            }
        };
        this.emitClickEvent = function (event) {
            if (_this.options.renderOnClick) {
                _this.animate(0, _this.options.percent);
            }
            _this.onClick.emit(event);
        };
        this.applyOptions = function () {
            // the options of <circle-progress> may change already
            for (var _i = 0, _a = Object.keys(_this.options); _i < _a.length; _i++) {
                var name_1 = _a[_i];
                if (_this.hasOwnProperty(name_1) && _this[name_1] !== undefined) {
                    _this.options[name_1] = _this[name_1];
                }
                else if (_this.templateOptions && _this.templateOptions[name_1] !== undefined) {
                    _this.options[name_1] = _this.templateOptions[name_1];
                }
            }
            // make sure key options valid
            // make sure key options valid
            _this.options.radius = Math.abs(+_this.options.radius);
            _this.options.space = +_this.options.space;
            _this.options.percent = +_this.options.percent > 0 ? +_this.options.percent : 0;
            _this.options.maxPercent = Math.abs(+_this.options.maxPercent);
            _this.options.animationDuration = Math.abs(_this.options.animationDuration);
            _this.options.outerStrokeWidth = Math.abs(+_this.options.outerStrokeWidth);
            _this.options.innerStrokeWidth = Math.abs(+_this.options.innerStrokeWidth);
            _this.options.backgroundPadding = +_this.options.backgroundPadding;
        };
        this.getRelativeY = function (rowNum, rowCount) {
            // why '-0.18em'? It's a magic number when property 'alignment-baseline' equals 'baseline'. :)
            var /** @type {?} */ initialOffset = -0.18, /** @type {?} */ offset = 1;
            return (initialOffset + offset * (rowNum - rowCount / 2)).toFixed(2) + 'em';
        };
        this.min = function (a, b) {
            return a < b ? a : b;
        };
        this.max = function (a, b) {
            return a > b ? a : b;
        };
        Object.assign(this.options, defaultOptions);
        Object.assign(this.defaultOptions, defaultOptions);
    }
    /**
     * @return {?}
     */
    CircleProgressComponent.prototype.isDrawing = /**
     * @return {?}
     */
    function () {
        return (this._timerSubscription && !this._timerSubscription.closed);
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    CircleProgressComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        this.render();
    };
    CircleProgressComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'circle-progress',
                    template: "\n        <svg xmlns=\"http://www.w3.org/2000/svg\" *ngIf=\"svg\"\n             [attr.viewBox]=\"svg.viewBox\" preserveAspectRatio=\"xMidYMid meet\"\n             [attr.height]=\"svg.height\" [attr.width]=\"svg.width\" (click)=\"emitClickEvent($event)\" [attr.class]=\"options.class\">\n            <circle *ngIf=\"options.showBackground\"\n                    [attr.cx]=\"svg.backgroundCircle.cx\"\n                    [attr.cy]=\"svg.backgroundCircle.cy\"\n                    [attr.r]=\"svg.backgroundCircle.r\"\n                    [attr.fill]=\"svg.backgroundCircle.fill\"\n                    [attr.fill-opacity]=\"svg.backgroundCircle.fillOpacity\"\n                    [attr.stroke]=\"svg.backgroundCircle.stroke\"\n                    [attr.stroke-width]=\"svg.backgroundCircle.strokeWidth\"/>\n            <circle *ngIf=\"options.showInnerStroke\"\n                    [attr.cx]=\"svg.circle.cx\"\n                    [attr.cy]=\"svg.circle.cy\"\n                    [attr.r]=\"svg.circle.r\"\n                    [attr.fill]=\"svg.circle.fill\"\n                    [attr.stroke]=\"svg.circle.stroke\"\n                    [attr.stroke-width]=\"svg.circle.strokeWidth\"/>\n            <path\n                    [attr.d]=\"svg.path.d\"\n                    [attr.stroke]=\"svg.path.stroke\"\n                    [attr.stroke-width]=\"svg.path.strokeWidth\"\n                    [attr.stroke-linecap]=\"svg.path.strokeLinecap\"\n                    [attr.fill]=\"svg.path.fill\"/>\n            <text *ngIf=\"!options.showImage && (options.showTitle || options.showUnits || options.showSubtitle)\"\n                  alignment-baseline=\"baseline\"\n                  [attr.x]=\"svg.circle.cx\"\n                  [attr.y]=\"svg.circle.cy\"\n                  [attr.text-anchor]=\"svg.title.textAnchor\">\n                <ng-container *ngIf=\"options.showTitle\">\n                    <tspan *ngFor=\"let tspan of svg.title.tspans\"\n                           [attr.x]=\"svg.title.x\"\n                           [attr.y]=\"svg.title.y\"\n                           [attr.dy]=\"tspan.dy\"\n                           [attr.font-size]=\"svg.title.fontSize\"\n                           [attr.fill]=\"svg.title.color\">{{tspan.span}}\n                    </tspan>\n                </ng-container>\n                <tspan *ngIf=\"options.showUnits\"\n                       [attr.font-size]=\"svg.units.fontSize\"\n                       [attr.fill]=\"svg.units.color\">{{svg.units.text}}\n                </tspan>\n                <ng-container *ngIf=\"options.showSubtitle\">\n                    <tspan *ngFor=\"let tspan of svg.subtitle.tspans\"\n                           [attr.x]=\"svg.subtitle.x\"\n                           [attr.y]=\"svg.subtitle.y\"\n                           [attr.dy]=\"tspan.dy\"\n                           [attr.font-size]=\"svg.subtitle.fontSize\"\n                           [attr.fill]=\"svg.subtitle.color\">{{tspan.span}}\n                    </tspan>\n                </ng-container>\n            </text>\n            <image *ngIf=\"options.showImage\" preserveAspectRatio=\"none\" \n                [attr.height]=\"svg.image.height\"\n                [attr.width]=\"svg.image.width\"\n                [attr.xlink:href]=\"svg.image.src\"\n                [attr.x]=\"svg.image.x\"\n                [attr.y]=\"svg.image.y\"\n            />\n        </svg>\n    "
                },] },
    ];
    /** @nocollapse */
    CircleProgressComponent.ctorParameters = function () { return [
        { type: CircleProgressOptions }
    ]; };
    CircleProgressComponent.propDecorators = {
        onClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        class: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        backgroundColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        backgroundOpacity: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        backgroundStroke: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        backgroundStrokeWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        backgroundPadding: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        radius: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        space: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        percent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        toFixed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        maxPercent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        renderOnClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        units: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        unitsFontSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        unitsColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        outerStrokeWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        outerStrokeColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        outerStrokeLinecap: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        innerStrokeColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        innerStrokeWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        titleFormat: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        titleColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        titleFontSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        subtitleFormat: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        subtitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        subtitleColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        subtitleFontSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        imageSrc: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        imageHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        imageWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        animation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        animateTitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        animateSubtitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        animationDuration: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        showTitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        showSubtitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        showUnits: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        showImage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        showBackground: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        showInnerStroke: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        clockwise: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        responsive: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        startFromZero: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        templateOptions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['options',] }]
    };
    return CircleProgressComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var NgCircleProgressModule = /** @class */ (function () {
    function NgCircleProgressModule() {
    }
    /**
     * @param {?=} options
     * @return {?}
     */
    NgCircleProgressModule.forRoot = /**
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        if (options === void 0) { options = {}; }
        return {
            ngModule: NgCircleProgressModule,
            providers: [
                { provide: CircleProgressOptions, useValue: options }
            ]
        };
    };
    NgCircleProgressModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                    ],
                    declarations: [
                        CircleProgressComponent,
                    ],
                    exports: [
                        CircleProgressComponent,
                    ]
                },] },
    ];
    return NgCircleProgressModule;
}());




/***/ }),

/***/ "./src/app/profile/all-invitations/all-invitations.component.html":
/*!************************************************************************!*\
  !*** ./src/app/profile/all-invitations/all-invitations.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"proEdit forAllInvitations\">\n  <h2 class=\"withLine\"><span>{{\"INVITATIONS.MANAGE_ALL\" | translate}}</span></h2>\n\n  <div class=\"inviteBlock\">\n    <div class=\"inviteBlockTop clearfix\" *ngIf=\"allInvitations.length > 0\">\n      <div class=\"row\">\n        <div class=\"col-6\">\n          <p>{{\"INVITATIONS.INVITATIONS\" | translate}} ({{totalRows}})</p>\n        </div>\n\n      </div>\n    </div>\n\n    <div>\n      <div class=\"alert alert-success\" *ngIf=\"successMessage\">{{ successMessage }}</div>\n    </div>\n\n\n    <div *ngIf=\"allInvitations.length > 0\">\n      <div class=\"inviteBlockSingle\" *ngFor=\"let invitaion of allInvitations\" id=\"invitaion-{{invitaion.id}}\">\n         <div class=\"inviteBlockImg\" [class.boxSinglenoImg]=\"!invitaion?.friend_profile_pic\">\n           <img *ngIf=\"invitaion?.friend_profile_pic\" [src]=\"(invitaion?.friend_profile_pic) | picturepath:'users'\" alt=\"\">\n           <img  *ngIf=\"invitaion && !invitaion.friend_profile_pic && invitaion.friend_gender && invitaion.friend_experience_level\" src=\"assets/images/charachter/{{ invitaion.friend_gender+'_'+invitaion.friend_experience_level }}.png\" alt=\"\">\n          </div>\n        \n        <h3>\n          <a [routerLink]= \"['/',invitaion?.friend_cpp]\">\n          {{invitaion.friend_full_name}}\n        </a></h3>\n        <p>{{invitaion.friend_position_local_name}}</p>\n        <h4><i class=\"fa fa-users\" aria-hidden=\"true\"></i> {{ invitaion.mutualFriendCount }} {{'LISTPAGES.MUTUAL_CONNECTION'|translate}}</h4>\n        <div class=\"inviteBlockBtn\">\n          <a href=\"javascript:void(0);\" (click)=\"ignoreInvitation(invitaion)\">{{\"INVITATIONS.IGNORE\" | translate}}</a>\n          <a class=\"green\" href=\"javascript:void(0);\" (click)=\"acceptInvitation(invitaion)\">{{\"INVITATIONS.ACCEPT\" | translate}}</a>\n        </div>\n      </div>\n    </div>\n\n\n    <div class=\"text-center\" *ngIf=\"allInvitations.length == 0\">\n      {{\"INVITATIONS.NO_RECORD_FOUND\" | translate}}\n    </div>\n\n\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/profile/all-invitations/all-invitations.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/profile/all-invitations/all-invitations.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvYWxsLWludml0YXRpb25zL2FsbC1pbnZpdGF0aW9ucy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/profile/all-invitations/all-invitations.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/profile/all-invitations/all-invitations.component.ts ***!
  \**********************************************************************/
/*! exports provided: AllInvitationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllInvitationsComponent", function() { return AllInvitationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_5__);






var AllInvitationsComponent = /** @class */ (function () {
    function AllInvitationsComponent(activatedRoute, cService, translate, route) {
        this.activatedRoute = activatedRoute;
        this.cService = cService;
        this.translate = translate;
        this.route = route;
        this.allInvitations = []; // all invitaions
        this.allNotifications = []; // all notifications 
        this.paginationConfig = null; // set pagination config
        this.totalRows = null;
        this.successMessage = ''; // set success message
        this.loggedInUser = null;
        this.activeLoggedUser = null;
        this.cService.activelang.subscribe(function (lang) {
            // this language will be used as a fallback when a translation isn't found in the current language
            translate.setDefaultLang(lang);
            // the lang to use, if the lang isn't available, it will use the current loader to get them
            translate.use(lang);
        });
    }
    AllInvitationsComponent.prototype.ngOnInit = function () {
        this.loggedInUser = this.cService.getLoggedUserData();
        this.connectionInvitations();
    };
    /* Function Name : connectionInvitations
    * Author :
    * Created Date : 25-03-2019
    * Modified Date : *
    * Purpose : to get all connection invitation list
    * PARAMS :
    */
    AllInvitationsComponent.prototype.connectionInvitations = function () {
        var _this = this;
        this.cService.connectionInvitationList().subscribe(function (response) {
            if ((response['statustext'] === 'success')) {
                _this.allInvitations = response.data.list;
                _this.activeLoggedUser = response.data.user;
                _this.totalRows = response.data.list.length;
                _this.getMutualFriend();
                setTimeout(function () {
                    _this.activatedRoute.fragment.subscribe(function (fragement) {
                        window.scrollTo(0, document.getElementById(fragement).scrollHeight + 100);
                    });
                }, 1000);
            }
        });
    };
    AllInvitationsComponent.prototype.getMutualFriend = function () {
        var _this = this;
        var userFriendIdList = [];
        var currentUserId = this.activeLoggedUser.id.toString();
        if (this.activeLoggedUser.friendsIds) {
            userFriendIdList = this.activeLoggedUser.friendsIds.friend_ids;
            userFriendIdList = userFriendIdList.split(",");
        }
        var listData = null;
        listData = this.allInvitations;
        if (listData.length > 0) {
            listData.forEach(function (item, index) {
                listData[index]['mutualFriendCount'] = 0;
                if (item &&
                    (localStorage.getItem('_user') && _this.activeLoggedUser.id != item.id) &&
                    (item.friendsIds && item.friendsIds.friend_ids)) {
                    var friendList_1 = item.friendsIds.friend_ids;
                    friendList_1 = friendList_1.split(",");
                    friendList_1.splice(friendList_1.indexOf(currentUserId), 1);
                    var mutualFriendList = userFriendIdList.filter(function (obj) { return friendList_1.indexOf(obj) > -1; });
                    listData[index]['mutualFriendCount'] = mutualFriendList.length;
                }
            });
        }
        this.allInvitations = listData;
    };
    /* Function Name : acceptInvitation
    * Author :
    * Created Date : 25-03-2019
    * Modified Date : *
    * Purpose : to accept invitaion
    * PARAMS : formPostData,friend
    */
    AllInvitationsComponent.prototype.acceptInvitation = function (friend) {
        var _this = this;
        var formPostData = {
            "to_id": btoa(friend.friend_id),
            "status": 1
        };
        this.cService.connectionRequest(formPostData).subscribe(function (response) {
            if ((response['statustext'] === 'success')) {
                _this.translate.get('COMMON.SUCCESS').subscribe(function (tData) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_5___default()({
                        title: tData,
                        text: response['message'],
                        icon: 'success'
                    });
                });
                _this.cService.emitNotification(friend.friend_cpp, 'CA');
                _this.cService.emitNotification(_this.loggedInUser._cpp, 'CA');
                _this.connectionInvitations();
            }
        });
    };
    /* Function Name : ignoreInvitation
    * Author :
    * Created Date : 25-03-2019
    * Modified Date : *
    * Purpose : to ignore invitaion
    * PARAMS : friend
    */
    AllInvitationsComponent.prototype.ignoreInvitation = function (friend) {
        var _this = this;
        var formPostData = {
            "to_id": btoa(friend.friend_id),
            "status": 2
        };
        this.cService.connectionRequest(formPostData).subscribe(function (response) {
            if ((response['statustext'] === 'success')) {
                _this.translate.get('COMMON.SUCCESS').subscribe(function (tData) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_5___default()({
                        title: tData,
                        text: response['message'],
                        icon: 'success'
                    });
                });
                _this.cService.emitNotification(friend.friend_cpp, 'CD');
                _this.cService.emitNotification(_this.loggedInUser._cpp, 'CD');
                _this.successMessage = response.message;
                _this.connectionInvitations();
                setTimeout(function () {
                    _this.successMessage = '';
                }, 5000);
            }
        });
    };
    AllInvitationsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-all-invitations',
            template: __webpack_require__(/*! ./all-invitations.component.html */ "./src/app/profile/all-invitations/all-invitations.component.html"),
            styles: [__webpack_require__(/*! ./all-invitations.component.scss */ "./src/app/profile/all-invitations/all-invitations.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AllInvitationsComponent);
    return AllInvitationsComponent;
}());



/***/ }),

/***/ "./src/app/profile/all-recommendations/all-recommendations.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/profile/all-recommendations/all-recommendations.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"searchWrap\">\n  <div class=\"row\">\n\n    <div class=\"col-xl-9 col-lg-8\">\n      <h2 class=\"withLine\"><span>{{\"RECOMMENDATIONS.RECOMMENDATIONS\" | translate}}</span></h2>\n      <div class=\"row searchResult\">\n        <div class=\"col-xl-3 col-lg-4 col-md-4 col-6 searchCol\" *ngFor=\"let recommendation of recommendationList\">\n          <div class=\"searchResultSingle\" >\n            <div (click)=\"gotoProfile(recommendation.recommend_user_cpp)\">\n            <div class=\"profileDescImg\" [class.inactive]=\"(currentTime - recommendation.recommend_user_last_active_time) > (5*60) \">\n            <img *ngIf=\"recommendation.recommend_user_profile_pic\" alt=\"\" [src]=\"recommendation.recommend_user_profile_pic| picturepath:'users'\">\n            <img  *ngIf=\"recommendation && !recommendation.recommend_user_profile_pic && recommendation.recommend_user_gender && recommendation.recommend_user_experience_level\" src=\"assets/images/charachter/{{ recommendation.recommend_user_gender+'_'+recommendation.recommend_user_experience_level }}.png\" alt=\"\">\n          </div>\n            <h2>{{ recommendation.recommend_user_first_name }}  {{ recommendation.recommend_user_last_name }}</h2>\n            <h3>{{ recommendation.recommend_user_position_local_name }}</h3>\n            <h4><i class=\"fa fa-users\" aria-hidden=\"true\"></i>{{ recommendation.mutualFriendCount }}  {{'LISTPAGES.MUTUAL_CONNECTION'|translate}}</h4>\n          </div>\n            <!-- <button class=\"blockBtn\" type=\"button\" (click)=\"openLg(content)\">Block</button> -->\n            \n          </div>\n        </div>\n        \n      </div>\n      <ngx-pager  [config]=\"paginationConfig\"  [totalrow]='totalRows' class=\"defaultPagination\"></ngx-pager>\n    \n      <div class=\"col-xl-12 col-lg-12 col-md-12 col-12 searchCol\" *ngIf=\"recommendationList.length == 0\">\n          {{\"PROFILEEDIT.NO_RECORD_FOUND\" | translate}}\n      </div>\n      \n\n    </div>\n\n    <div class=\"col-xl-3 col-lg-4\">\n\n      <app-notifications></app-notifications>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/profile/all-recommendations/all-recommendations.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/profile/all-recommendations/all-recommendations.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvYWxsLXJlY29tbWVuZGF0aW9ucy9hbGwtcmVjb21tZW5kYXRpb25zLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/profile/all-recommendations/all-recommendations.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/profile/all-recommendations/all-recommendations.component.ts ***!
  \******************************************************************************/
/*! exports provided: AllRecommendationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllRecommendationsComponent", function() { return AllRecommendationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _globalConfig__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../globalConfig */ "./src/app/globalConfig.ts");







var AllRecommendationsComponent = /** @class */ (function () {
    /* Function Name : constructor
      * Author :
      * Created Date : 05-02-2019
      * Modified Date : *
      * Purpose : to define the all helpful objects and define the languages data
      * PARAMS : uService, cService, translate, route
      */
    function AllRecommendationsComponent(uService, cService, translate, route) {
        this.uService = uService;
        this.cService = cService;
        this.translate = translate;
        this.route = route;
        this.paginationConfig = null; // set pagination config
        this.totalRows = null;
        this.currentPage = 1; // set current page
        this.connectionList = []; // set connection list
        this.recommendationList = []; // set connection list
        this.currentUserData = null; // set current user data
        this.currentTime = null; // set current time
        this.profile_image_path = _globalConfig__WEBPACK_IMPORTED_MODULE_6__["s3URL"] + 'userspic/'; // set user profile image path
        this.cService.activelang.subscribe(function (lang) {
            // this language will be used as a fallback when a translation isn't found in the current language
            translate.setDefaultLang(lang);
            // the lang to use, if the lang isn't available, it will use the current loader to get them
            translate.use(lang);
        });
    }
    /* Function Name : getMutualFriend
    * Author :
    * Created Date : 25-03-2019
    * Modified Date : *
    * Purpose : to calculate multal connections
    * PARAMS :
    */
    AllRecommendationsComponent.prototype.getMutualFriend = function () {
        var _this = this;
        var userFriendIdList = [];
        var currentUserId = this.currentUserData.id.toString();
        if (this.currentUserData.friendsIds && this.currentUserData.friendsIds.friend_ids) {
            userFriendIdList = this.currentUserData.friendsIds.friend_ids;
            userFriendIdList = userFriendIdList.split(",");
        }
        this.currentTime = (new Date()).getTime() / 1000;
        this.recommendationList.forEach(function (item, index) {
            _this.recommendationList[index]['mutualFriendCount'] = 0;
            if (item.allFriends.friend_ids) {
                var friendList_1 = item.allFriends.friend_ids;
                friendList_1 = friendList_1.split(",");
                friendList_1.splice(friendList_1.indexOf(currentUserId), 1);
                var mutualFriendList = userFriendIdList.filter(function (obj) { return friendList_1.indexOf(obj) > -1; });
                _this.recommendationList[index]['mutualFriendCount'] = mutualFriendList.length;
            }
        });
    };
    AllRecommendationsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.paginationConfig = {
            perPage: 10,
            render: function (page) {
                _this.uService.recommendationList().subscribe(function (responseData) {
                    if (responseData.statustext == 'success') {
                        if (responseData && responseData.data) {
                            _this.currentUserData = responseData.data.user;
                            _this.recommendationList = responseData.data.list;
                            _this.totalRows = responseData.data.pagination.rowCount;
                            _this.getMutualFriend();
                        }
                    }
                });
            }
        };
    };
    /* Function Name : gotoProfile
    * Author :
    * Created Date : 25-03-2019
    * Modified Date : *
    * Purpose : to go to a user profile
    * PARAMS : recommendCpp
    */
    AllRecommendationsComponent.prototype.gotoProfile = function (recommendCpp) {
        this.route.navigate(['/', recommendCpp]);
    };
    AllRecommendationsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-all-recommendations',
            template: __webpack_require__(/*! ./all-recommendations.component.html */ "./src/app/profile/all-recommendations/all-recommendations.component.html"),
            styles: [__webpack_require__(/*! ./all-recommendations.component.scss */ "./src/app/profile/all-recommendations/all-recommendations.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"],
            _services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], AllRecommendationsComponent);
    return AllRecommendationsComponent;
}());



/***/ }),

/***/ "./src/app/profile/blocks/blocks.component.html":
/*!******************************************************!*\
  !*** ./src/app/profile/blocks/blocks.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"searchWrap\">\n    <div class=\"row\">\n  \n      <div class=\"col-xl-9 col-lg-8\">\n        <h2 class=\"withLine\"><span>{{ 'LISTPAGES.CONNECTIONS' |translate }}</span></h2>\n        <div class=\"row searchResult\">\n          <div class=\"col-xl-3 col-lg-4 col-md-4 col-6 searchCol\" *ngFor=\"let connection of connectionList\" >\n            <div class=\"searchResultSingle\">\n              <span class=\"searchClose\" (click)=\"removeConnection(connection, i)\"></span>\n              <div (click)=\"gotoProfile(connection.friend_cpp)\">\n              <div class=\"profileDescImg\" [class.inactive]=\"(currentTime - connection.friend_last_active_time) > (5*60) \">\n              <img *ngIf=\"connection.friend_profile_pic\" alt=\"\" [src]=\"connection.friend_profile_pic| picturepath:'users'\">\n              <img  *ngIf=\"connection && !connection.friend_profile_pic && connection.friend_gender && connection.friend_experience_level\" src=\"assets/images/charachter/{{ connection.friend_gender+'_'+connection.friend_experience_level }}.png\" alt=\"\">\n            </div>\n              <h2>{{ connection.friend_first_name }}  {{ connection.friend_last_name }}</h2>\n              <h3>{{ connection.friend_position_local_name }}</h3>\n              <h4><i class=\"fa fa-users\" aria-hidden=\"true\"></i> {{ connection.mutualFriendCount }} {{'LISTPAGES.MUTUAL_CONNECTION'|translate}}</h4>\n            </div>\n              \n              <button *ngIf='connection.already_block==1' class=\"blockBtn\" type=\"button\" (click)=\"unblock(connection.friend_id)\">{{ 'BLOCKS.UNBLOCK'|translate }}</button>\n\n              <button *ngIf='!connection.already_block || connection.already_block==0' class=\"blockBtn\" type=\"button\" (click)=\"openBlock(connection.friend_id)\">{{ 'BLOCKS.BLOCK'|translate }}</button>\n           \n            </div>\n          </div>\n          \n          <div class=\"col-xl-12 col-lg-12 col-md-12 col-12 searchCol\" *ngIf=\"connectionList.length == 0\">\n            {{\"PROFILEEDIT.NO_RECORD_FOUND\" | translate}}\n          </div>\n        </div>\n  \n        <app-pagination *ngIf=\"paginationConfig && connectionList.length>0\" [config]=\"paginationConfig\" (pager)=\"clickPager($event)\"></app-pagination>\n  \n  \n      </div>\n  \n      <div class=\"col-xl-3 col-lg-4\">\n  \n        <app-notifications></app-notifications>\n      </div>\n    </div>\n  </div>\n <!-- tell us reasone model start --> \n <app-blocksmodal></app-blocksmodal>\n\n  <!-- <ng-template #content let-modal>\n    <h2><span>Tell Us Why:</span></h2>\n    <span class=\"modalClose\" (click)=\"modal.dismiss('Cross click')\"></span>\n    <div class=\"modal-body\">\n      <div>\n     \n        <div class=\"alert alert-danger\" *ngIf=\"errorMessage\">{{ errorMessage }}</div>\n      </div>\n\n      <div class=\"proEdit\">\n        <div class=\"formWrap alt\">\n         \n          <ng-select class=\"inpField fullWidth\" [items]=\"reasonList\" [(ngModel)]=\"blockForm.block_reason_id\" bindLabel=\"name\" bindValue=\"id\"></ng-select>\n        </div>\n        <div class=\"txtOr\">OR:</div>\n        <div class=\"formWrap alt\">\n           <textarea class=\"inpField fullWidth\" [(ngModel)]=\"blockForm.block_comment\" placeholder=\"Type Blocking Reson......\"></textarea>\n        </div>\n        <div class=\"buttonGr\">\n          <div class=\"text-center\">\n            <button type=\"button\" class=\"btnOrange\" name=\"button\" (click)=submitBlockReasonFrom()>Confirm Blocking</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </ng-template> -->\n  "

/***/ }),

/***/ "./src/app/profile/blocks/blocks.component.scss":
/*!******************************************************!*\
  !*** ./src/app/profile/blocks/blocks.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvYmxvY2tzL2Jsb2Nrcy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/profile/blocks/blocks.component.ts":
/*!****************************************************!*\
  !*** ./src/app/profile/blocks/blocks.component.ts ***!
  \****************************************************/
/*! exports provided: BlocksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlocksComponent", function() { return BlocksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _globalConfig__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../globalConfig */ "./src/app/globalConfig.ts");
/* harmony import */ var _global_blocksmodal_blocksmodal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../global/blocksmodal/blocksmodal.component */ "./src/app/global/blocksmodal/blocksmodal.component.ts");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_8__);
/*****************************************************
# Company Name          :
# Author                :
# Created Date          : 18-02-2019
# Module                : BlocksComponent
# Object name           : BlocksComponent
# Functionality         : Block users list
# Purpose               : constructor, ngOnInit, getConnectionList, gotoProfile
*******************************************************/









var BlocksComponent = /** @class */ (function () {
    /* Function Name : constructor
      * Author :
      * Created Date : 19-02-2019
      * Modified Date : *
      * Purpose : to define the all helpful objects and defin the languages data
      * PARAMS : uService, cService, modalService, translate,route
      */
    function BlocksComponent(uService, cService, translate, route) {
        var _this = this;
        this.uService = uService;
        this.cService = cService;
        this.translate = translate;
        this.route = route;
        this.paginationConfig = null; // pagination config
        this.currentPage = 1; // set current page
        this.connectionList = []; // set connection list
        this.currentUserData = null; // set current user data
        this.currentTime = null; // set current time
        this.profile_image_path = _globalConfig__WEBPACK_IMPORTED_MODULE_6__["s3URL"] + 'userspic/'; // user profile pic path
        // BLOCKFORM CONFIG //
        this.blockForm = {
            "id": null,
            "block_reason_id": null,
            "block_comment": '',
            "error": 0,
            "submit": false
        };
        this.cService.activelang.subscribe(function (lang) {
            // this language will be used as a fallback when a translation isn't found in the current language
            translate.setDefaultLang(lang);
            // the lang to use, if the lang isn't available, it will use the current loader to get them
            translate.use(lang);
        });
        this.cService.listData.subscribe(function (listData) {
            if (listData) {
                _this.connectionList = listData.data.list.list;
                _this.paginationConfig = listData.data.list.pager;
                _this.currentUserData = listData.data.user;
                _this.getMutualFriend();
            }
        });
    }
    /* Function Name : getConnectionList
      * Author :
      * Created Date : 19-02-2019
      * Modified Date : *
      * Purpose : to get all connection list
      * PARAMS :
      */
    BlocksComponent.prototype.getConnectionList = function () {
        var _this = this;
        this.uService.userConnectionList(this.currentPage)
            .subscribe(function (responseData) {
            if (responseData.statustext == 'success') {
                _this.connectionList = responseData.data.connections.list;
                _this.paginationConfig = responseData.data.connections.pager;
                _this.currentUserData = responseData.data.user;
                if (_this.currentUserData.blocksIds.blocks_ids) {
                    var blockIds_1 = _this.currentUserData.blocksIds.blocks_ids.split(",");
                    //console.log(blockIds);
                    _this.connectionList.forEach(function (item, index) {
                        _this.connectionList[index]['already_block'] = 0;
                        if (blockIds_1.indexOf(item.friend_id.toString()) > -1) {
                            _this.connectionList[index]['already_block'] = 1;
                        }
                    });
                    // console.log(this.connectionList);
                }
                _this.getMutualFriend();
            }
        });
    };
    /* Function Name : getMutualFriend
      * Author :
      * Created Date : 19-02-2019
      * Modified Date : *
      * Purpose : to calculate the mutural connections
      * PARAMS :
      */
    BlocksComponent.prototype.getMutualFriend = function () {
        var _this = this;
        var userFriendIdList = [];
        var currentUserId = this.currentUserData.id.toString();
        if (this.currentUserData.friendsIds && this.currentUserData.friendsIds.friend_ids) {
            userFriendIdList = this.currentUserData.friendsIds.friend_ids;
            userFriendIdList = userFriendIdList.split(",");
        }
        this.currentTime = (new Date()).getTime() / 1000;
        this.connectionList.forEach(function (item, index) {
            _this.connectionList[index]['mutualFriendCount'] = 0;
            if (item.allFriends.friend_ids) {
                var friendList_1 = item.allFriends.friend_ids;
                friendList_1 = friendList_1.split(",");
                friendList_1.splice(friendList_1.indexOf(currentUserId), 1);
                var mutualFriendList = userFriendIdList.filter(function (obj) { return friendList_1.indexOf(obj) > -1; });
                _this.connectionList[index]['mutualFriendCount'] = mutualFriendList.length;
            }
        });
    };
    /* Function Name : ngOnInit
      * Author :
      * Created Date : 19-02-2019
      * Modified Date : *
      * Purpose : to get data after html load
      * PARAMS :
      */
    BlocksComponent.prototype.ngOnInit = function () {
        var _this = this;
        localStorage.setItem('_sp', 'connection');
        this.getConnectionList();
        this.blockModal.closeBlock.subscribe(function (res) {
            _this.getConnectionList();
        });
    };
    /* Function Name : clickPager
      * Author :
      * Created Date : 19-02-2019
      * Modified Date : *
      * Purpose : to click on pagination page
      * PARAMS : e
      */
    BlocksComponent.prototype.clickPager = function (e) {
        this.currentPage = e;
        this.getConnectionList();
    };
    /* Function Name : gotoProfile
      * Author :
      * Created Date : 19-02-2019
      * Modified Date : *
      * Purpose : to go to a user profile
      * PARAMS :  friendCpp
      */
    BlocksComponent.prototype.gotoProfile = function (friendCpp) {
        this.route.navigate(['/', friendCpp]);
    };
    /* Function Name : openBlock
    * Author :
    * Created Date : 04-02-2019
    * Modified Date : *
    * Purpose : open block modal
    * PARAMS : userId
    */
    BlocksComponent.prototype.openBlock = function (userId) {
        this.blockModal.openBlockReasonModal(userId);
    };
    /* Function Name : unblock
      * Author :
      * Created Date : 04-02-2019
      * Modified Date : *
      * Purpose : to unblock a user
      * PARAMS : userId
      */
    BlocksComponent.prototype.unblock = function (userId) {
        this.blockModal.unblockUser(userId);
    };
    /* Function Name : removeConnection
      * Author :
      * Created Date : 09-07-2019
      * Modified Date : *
      * Purpose : to remove connection
      * PARAMS : connection
      */
    BlocksComponent.prototype.removeConnection = function (connection, connectionIndex) {
        var _this = this;
        this.uService.userConnectionRemove({
            c_u_id: btoa(connection.friend_id)
        }).subscribe(function (responsData) {
            if (responsData.statustext == 'success') {
                _this.translate.get(['COMMON.SUCCESS']).subscribe(function (tData) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_8___default()({
                        title: tData['COMMON.SUCCESS'],
                        text: responsData.message,
                        icon: 'success'
                    }).then(function () {
                        _this.getConnectionList();
                    });
                });
            }
            else {
                _this.translate.get(['COMMON.ERROR']).subscribe(function (tData) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_8___default()({
                        title: tData['COMMON.ERROR'],
                        text: responsData.message,
                        icon: 'error'
                    });
                });
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_global_blocksmodal_blocksmodal_component__WEBPACK_IMPORTED_MODULE_7__["BlocksmodalComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _global_blocksmodal_blocksmodal_component__WEBPACK_IMPORTED_MODULE_7__["BlocksmodalComponent"])
    ], BlocksComponent.prototype, "blockModal", void 0);
    BlocksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-blocks',
            template: __webpack_require__(/*! ./blocks.component.html */ "./src/app/profile/blocks/blocks.component.html"),
            styles: [__webpack_require__(/*! ./blocks.component.scss */ "./src/app/profile/blocks/blocks.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"],
            _services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], BlocksComponent);
    return BlocksComponent;
}());



/***/ }),

/***/ "./src/app/profile/cardbuilder/cardbuilder.component.html":
/*!****************************************************************!*\
  !*** ./src/app/profile/cardbuilder/cardbuilder.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"proEdit forCardBuilder\">\n  <div class=\"formWrap withSelect\">\n    <h2 class=\"withLine\"><span>{{ 'CV.CHOOSE_TEMPLATE'| translate }}</span></h2>\n    <span class=\"selectAbs\">\n      <select class=\"inpField\" name=\"\" [(ngModel)]=\"activeCurrency\" (change)=\"setActiveCurrency()\">\n        <option value=\"\">{{ 'CV.CURRENCY'|translate }}</option>\n        <option *ngFor=\"let currency of currencyList\" [value]=\"currency.name\">{{ currency.name }}</option>\n      </select>\n    </span>\n  </div>\n  <div *ngIf=\"cardForm.submit == true && entryType != 'browse' && !activeTemplate\" class=\"alert alert-danger\">\n    {{ 'CV.SELECT_CV_ERR'|translate }}\n  </div>\n  <div class=\"cardSelect carouselNext\">\n    <div class=\"cardSelectRow alt\" *ngIf=\"templateList.length > 0\">\n      <owl-carousel [options]=\"myCarouselOptions\" [carouselClasses]=\"['owl-theme', 'sliding']\">\n        <div class=\"item\" *ngFor=\"let template of templateList\">\n          <div class=\"singleCardSelect\" [class.active]=\"activeTemplate==template.id\"\n            (click)=\"setActiveTemplate(template)\">\n            <img src=\"{{ template.picture | picturepath:'templates' }}\" alt=\"\">\n            <div class=\"cardTxt\" *ngIf=\"template.price>0\">\n\n              <span>{{ activeCurrenySymbol }}</span>\n              {{ priceConversionRate*template.price }}\n            </div>\n            <div class=\"cardTxt\" *ngIf=\"template.price==0\">\n              {{ 'CV.FREE'|translate }}\n            </div>\n          </div>\n        </div>\n      </owl-carousel>\n    </div>\n  </div>\n\n  <div class=\"cardForm\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"profile-edit-form-main-content\">\n            <div class=\"profile-edit-form-container\">\n              <span class=\"formWrap\">\n                <input type=\"text\" class=\"inpField fullWidth\" [(ngModel)]=\"cardForm.title\" placeholder=\"{{ 'CARD.CARD_TITLE'| translate }}\" />\n                <span *ngIf=\"cardForm.submit &&  !cardForm.title\" class=\"alert alert-danger\">\n                    {{ 'CARD.TITLE_REQUIRED'|translate }}\n                  </span>\n              </span>\n            </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-3\">\n        <div class=\"formWrap\">\n          <label class=\"customCheck nobG\">{{ 'CV.UPLOAD_YOUR_CARD' | translate }} :\n            <input type=\"radio\" name=\"type\" (click)=\"setCardEntryType('browse')\" [checked]=\"entryType == 'browse'\">\n            <span class=\"checkmark\"></span>\n          </label>\n          <div *ngIf=\"entryType=='browse'\" class=\"profile-edit-form-main-content\">\n              <div class=\"profile-edit-form-container\">\n            <div class=\"fileUpload nobG\">\n              <label for=\"file-upload\" class=\"custom-file-upload\">{{ 'PROFILEEDIT.BROWSE' | translate }}</label>\n              <input id=\"file-upload\" type=\"file\" accept=\".png, .jpg, .jpeg, .gif\"\n                (change)=\"ownCardImageManage($event)\" />\n            </div>\n            <div class=\"clearfix\"></div>\n            <div class=\"alert alert-danger\" *ngIf=\"entryType == 'browse' && photoErr.size\">\n              {{ 'PROFILEEDIT.PROFILE_PIC_SIZE_ERROR'|translate }}</div>\n            <div class=\"alert alert-danger\" *ngIf=\"entryType == 'browse' && photoErr.type\">\n              {{ 'PROFILEEDIT.PROFILE_PIC_TYPE_ERROR'|translate }}</div>\n            <div class=\"uploadView\">\n              <img [src]=\"cardPhoto\" *ngIf=\"cardPhoto\" />\n            </div>\n          </div>\n\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-9 \">\n        \n\n          <div class=\"formWrap\">\n            <label class=\"customCheck nobG withSpace\">{{ 'CV.ADD_DATA_MANUALLY' | translate }}\n              <input type=\"radio\" name=\"type\" (click)=\"setCardEntryType('manual')\" [checked]=\"entryType == 'manual'\">\n              <span class=\"checkmark\"></span>\n            </label>\n            <label class=\"customCheck nobG\">{{ 'CV.USE_CURRENT_CV_DATA' | translate }}\n              <input type=\"radio\" name=\"type\" (click)=\"setCardEntryType('cv')\" [checked]=\"entryType == 'cv'\">\n              <span class=\"checkmark\"></span>\n            </label>\n  \n          </div>\n          <p class=\"cv-loader\" *ngIf=\"loader.cv\"><i class=\"fa fa-cog fa-spin\"></i> {{ 'CARD.PLEASE_WAIT_CV_DATA'| translate }}</p>\n          <div class=\"profile-edit-form-main-content\" *ngIf=\"entryType=='manual' || entryType=='cv'\">\n              <div class=\"profile-edit-form-container\">\n          \n    \n            <div class=\"row\" >\n              <div class=\"col-md-6\">\n                <div class=\"formWrap alt\">\n                  <label class=\"col-xl-4 noGap\" for=\"\">{{ 'CV.NAME'|translate }} :</label>\n                  <span class=\"formWrap\">\n    \n                    <input type=\"text\" [(ngModel)]=\"cardForm.name\" class=\"col-xl-8 inpField fullWidth\" value=\"\">\n                    <span *ngIf=\"cardForm.submit &&  !cardForm.name\" class=\"alert alert-danger\">\n                      {{ 'PROFILEEDIT.NAME_REQUIRED'|translate }}\n                    </span>\n                  </span>\n                </div>\n                <div class=\"formWrap alt\">\n                  <label class=\"col-xl-4 noGap\" for=\"\">{{ 'PROFILEEDIT.MOBILE'|translate }} :</label>\n                  <span class=\"formWrap\">\n    \n                    <input appOnlynumaricinput type=\"text\" [(ngModel)]=\"cardForm.mobile\" class=\"col-xl-8 inpField fullWidth\" value=\"\">\n                    <span *ngIf=\"cardForm.submit &&  !cardForm.mobile\" class=\"alert alert-danger\">\n                      {{ 'PROFILEEDIT.MOBILE_REQUIRED'|translate }}\n                    </span>\n                  </span>\n                </div>\n                <div class=\"formWrap alt\">\n                  <label class=\"col-xl-4 noGap\" for=\"\">{{ 'PROFILEEDIT.ADDRESS'|translate }} :</label>\n                  <span class=\"formWrap\">\n    \n                    <ng-select class=\"inpField width200 withSpace\" [items]=\"countryList\" [(ngModel)]=\"cardForm.country_id\"\n                      bindLabel=\"name\" bindValue=\"id\" (change)=\"getCityList()\"></ng-select>\n                      <span *ngIf=\"cardForm.submit &&  !cardForm.country_id\" class=\"alert alert-danger\">\n                          {{ 'PROFILEEDIT.COUNTRY_REQUIRED'|translate }}\n                        </span>\n                  </span>\n                  <span class=\"formWrap\">\n    \n                    <ng-select class=\"inpField autoWidth\" [items]=\"cityList\" [(ngModel)]=\"cardForm.city_id\" bindLabel=\"name\"\n                      bindValue=\"id\"></ng-select>\n                    \n                    <span *ngIf=\"cardForm.submit &&  !cardForm.city_id\" class=\"alert alert-danger\">\n                      {{ 'PROFILEEDIT.CITY_REQUIRED'|translate }}\n                    </span>\n                  </span>\n                </div>\n                <div class=\"formWrap alt\">\n                  <label class=\"col-xl-4 noGap\" for=\"\">{{ 'PROFILEEDIT.PHOTO'|translate }} :</label>\n                  <span class=\"formWrap\">\n    \n                    <div class=\"fileUpload withMargin\">\n                      <button class=\"custom-file-upload\"\n                        (click)=\"openBrowsePhoto()\">{{ 'PROFILEEDIT.BROWSE'| translate }}</button>\n                      <input type=\"file\" id=\"cardPhoto\" accept=\".png, .jpg, .jpeg, .gif\" id=\"cardImage\"\n                        class=\"col-xl-6 inpField inpField fullWidth\" (change)=\"manageCardPhoto($event)\" />\n                    </div>\n                    <span *ngIf=\"cardForm.submit &&  photoErr.size == true\" class=\"alert alert-danger\">\n                      {{ 'PROFILEEDIT.PROFILE_PIC_SIZE_ERROR'|translate }}\n                    </span>\n                    <span *ngIf=\"cardForm.submit &&  photoErr.type == true\" class=\"alert alert-danger\">\n                      {{ 'PROFILEEDIT.PROFILE_PIC_TYPE_ERROR'|translate }}\n                    </span>\n                  </span>\n                </div>\n                <div class=\"formWrap alt\">\n                  <div class=\"card-photo-content\" *ngIf=\"cardForm.photo\">\n                    <img [src]=\"cardForm.photo\" />\n                  </div>\n                </div>\n              </div>\n    \n              <div class=\"col-md-6\">\n                <div class=\"formWrap alt\">\n                  <label class=\"col-xl-4 noGap\" for=\"\">{{ 'PROFILEEDIT.POSITION'|translate }} :</label>\n                  <input type=\"text\" [(ngModel)]=\"cardForm.position\" class=\"col-xl-8 inpField fullWidth\" value=\"\">\n                </div>\n                <div class=\"formWrap alt\">\n                  <label class=\"col-xl-4 noGap\" for=\"\">{{ 'PROFILEEDIT.WEBSITE'|translate }} :</label>\n                  <input type=\"text\" [(ngModel)]=\"cardForm.website\" class=\"col-xl-8 inpField fullWidth\" value=\"\">\n                </div>\n                <div class=\"formWrap alt\">\n                  <label class=\"col-xl-4 noGap\" for=\"\">{{ 'PROFILEEDIT.EMAIL'|translate }} : </label>\n                  <span class=\"formWrap\">\n    \n                    <input type=\"text\" [(ngModel)]=\"cardForm.email\" class=\"col-xl-8 inpField fullWidth\" value=\"\">\n                    <span *ngIf=\"cardForm.submit &&  !cardForm.email\" class=\"alert alert-danger\">\n                      {{ 'PROFILEEDIT.EMAIL_REQUIRED'|translate }}\n                    </span>\n                  </span>\n                </div>\n                <div class=\"formWrap alt\">\n                  <label class=\"col-xl-4 noGap\" for=\"\">Description :</label>\n                  <span class=\"formWrap\">\n    \n                    <input type=\"text\" class=\"col-xl-8 inpField fullWidth\" [(ngModel)]=\"cardForm.desc\" />\n                    <span *ngIf=\"cardForm.submit &&  cardForm.desc && cardForm.desc.split(' ').length>7\"\n                      class=\"alert alert-danger\">\n                      maximum 7 words you can add\n                    </span>\n                  </span>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n\n      </div>\n    </div>\n    <div class=\"buttonGr\">\n      <div class=\"text-right\"><input class=\"btnGreen\" (click)=\"saveCardForm()\" type=\"button\" name=\"\" value=\"Save\"></div>\n    </div>\n  </div>\n  <div class=\"formTable\">\n      <table class=\"table table-borderless\">\n        <thead>\n          <tr>\n            <th>{{ 'CV.NAME'|translate }}</th>\n            <th class=\"text-center\">{{ 'CV.STATUS'|translate }}</th>\n            <th class=\"text-center\">{{ 'CV.ACTION'|translate }}</th>\n            <th class=\"text-center\">{{ 'CV.CURRENT'|translate }}</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let card of userCardList\">\n            <td>{{ card.card_title }}</td>\n            <td class=\"text-center\">\n              <span *ngIf=\"card.price == '0.00'\">{{ 'CV.FREE'|translate }}</span>\n              <span *ngIf=\"card.price != '0.00'\">{{ 'CV.PAID'|translate }}</span>\n            </td>\n            <td class=\"text-center\">\n\n              <a (click)=\"goToCard(card)\" ><i class=\"fa fa-eye\" aria-hidden=\"true\"></i></a> \n              <a *ngIf=\"!card.preview\" (click)=\"removeCard(card)\" ><i class=\"fa fa-trash\" aria-hidden=\"true\"></i></a>\n             \n\n            </td>\n            <td class=\"text-center\">\n              <label class=\"customRadio\">\n                <input type=\"radio\" name=\"default\" [checked]=\"card.is_default || (card.preview && !defaultCard)\" (click)=\"setIsDefault(card)\">\n                <span class=\"checkmark\"></span>\n              </label>\n            </td>\n          </tr>\n          <tr *ngIf=\"userCardList.length == 0\" >\n            <td colspan=\"4\" class=\"text-center\">{{ 'PROFILEEDIT.NO_RECORD_FOUND'| translate }}</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n</div>\n\n<ng-template #alertPopup let-modal>\n  <!-- <span class=\"modalClose\" (click)=\"modal.dismiss('Cross click')\"></span> -->\n  <div class=\"modal-body\" style=\"text-align:center\">\n    <p class=\"text-center\" *ngIf=\"alertPopupMsg.type=='limit' && loader.limit\">\n      <i class=\"fa fa-cog fa-spin\"></i><br/>\n      <span>{{ 'CARD.PLEASE_WAIT_CARD_LIMIT'|translate }}</span>\n    </p>\n    {{alertPopupMsg.message}}\n    <div class=\"profileDesc\" *ngIf=\"alertPopupMsg.type=='limit'\">\n      <a class=\"modBtn\" [routerLink]=\"['/profile']\">{{ 'CV.GO_TO_LIST'|translate }}</a>\n    </div>\n    <div class=\"profileDesc\" *ngIf=\"alertPopupMsg.type!='limit'\">\n        <a class=\"modBtn\" (click)=\"modal.dismiss()\">{{ 'LANDING.OK'|translate }}</a>\n      </div>\n  </div>\n</ng-template>\n\n<ng-template #paymentModal let-modal>\n    <div class=\"modal-body\" >\n        <div class=\"row justify-content-center proEdit\">\n\n            <div class=\"col-lg-12\">\n              <div class=\"loader-container pay\" *ngIf=\"loader.pay\">\n                <div class=\"loader-content\" >\n                  <i class=\"fa fa-cog fa-spin\"></i><br />\n                  {{ 'CV.TRANSACTION_LOAD_MSG' | translate }}\n                </div>\n              </div>\n              <div class=\"paymentOpt\">\n\n                  <div class=\"alert alert-success text-center\"\n                  *ngIf=\"payForm.successMsg\">{{ payForm.successMsg }}</div>\n\n                  <div class=\"alert alert-danger text-center\"\n                  *ngIf=\"payForm.errorMsg\">{{ payForm.errorMsg }}</div>\n\n                <div class=\"formWrap inlineAll\">\n                  <label class=\"col-xl-4 noGap\" for=\"\">{{ 'CV.PAY_ACCEPTED_CARD'| translate }} :</label>\n                  <span><img src=\"assets/images/card.png\" alt=\"\"></span>\n                </div>\n                <div class=\"formWrap\">\n                  <label class=\"col-xl-4 noGap\" for=\"\">{{ 'CV.PAY_CARD_HOLDER_NAME'| translate }} :</label>\n                  <input type=\"text\" [(ngModel)]=\"payForm.cardHolderName\" name=\"cardHolderName\"\n                    class=\"col-xl-8 inpField fullWidth\" value=\"\">\n                    <div class=\"alert alert-danger\" *ngIf=\"payForm.submit && !payForm.cardHolderName\">{{ 'CV.PAY_NAME_REQUIRED'| translate }}\n                      </div>\n                </div>\n                <div class=\"formWrap\">\n                  <label class=\"col-xl-4 noGap\" for=\"\">{{ 'CV.PAY_CARD_NUMBER'| translate }} :</label>\n                  <input type=\"text\" [(ngModel)]=\"payForm.cardNumber\" name=\"cardNumber\" class=\"col-xl-8 inpField fullWidth\"\n                    value=\"\" maxlength=\"16\" appOnlynumaricinput>\n                    <div class=\"alert alert-danger\" *ngIf=\"payForm.submit && !payForm.cardNumber\">{{ 'CV.PAY_CARD_REQUIRED'| translate }}\n                      </div>\n                      <div class=\"alert alert-danger\" *ngIf=\"payForm.submit && payForm.cardNumber && payForm.cardNumber.length != 16\">{{ 'CV.PAY_CARD_LENGTH'| translate }}\n                        </div>\n                </div>\n                <div class=\"formWrap inlineAll\">\n                  <label class=\"col-xl-4 noGap\" for=\"\">{{ 'CV.PAY_EXP_DATE'| translate }} :</label>\n\n                  <select class=\"inpField autoWidth withSpace\" [(ngModel)]=\"payForm.expMonth\" name=\"expMonth\">\n                    <option *ngFor=\"let month of months\" value=\"{{ month }}\">{{ ((month<10)?'0'+month:month) }}</option>\n                  </select>\n\n\n                  <select class=\"inpField autoWidth withSpace\" [(ngModel)]=\"payForm.expYear\" name=\"expYear\">\n                    <option *ngFor=\"let year of years\" value=\"{{ year }}\">{{ year }}</option>\n                  </select>\n\n\n                  <label for=\"\" class=\"cvv-label\">CVV :</label>\n                  <input class=\"inpField cvcInp\" type=\"text\" [(ngModel)]=\"payForm.cvvCode\" name=\"cvvCode\" value=\"\" maxlength=\"3\" pattern= \"[0-9]\" appOnlynumaricinput>\n                  <div class=\"alert alert-danger\" *ngIf=\"payForm.submit && !payForm.cvvCode\">{{ 'CV.PAY_CVV_REQUIRED'| translate }}\n                      </div>\n\n                </div>\n\n                <div class=\"formWrap alt\">\n                  <div class=\"text-center\">\n                    <input class=\"submBtn\" type=\"submit\" name=\"\" (click)=\"resetPayForm()\" value=\"{{ 'CV.CANCEL'| translate }}\">\n                    <input class=\"submBtn black\" type=\"submit\" name=\"\" value=\"{{ 'CV.PAY'| translate }}\" (click)=\"submitPayForm()\">\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n    </div>\n  </ng-template>\n"

/***/ }),

/***/ "./src/app/profile/cardbuilder/cardbuilder.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/profile/cardbuilder/cardbuilder.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvY2FyZGJ1aWxkZXIvY2FyZGJ1aWxkZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/profile/cardbuilder/cardbuilder.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/profile/cardbuilder/cardbuilder.component.ts ***!
  \**************************************************************/
/*! exports provided: CardbuilderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardbuilderComponent", function() { return CardbuilderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _services_cvcard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/cvcard.service */ "./src/app/services/cvcard.service.ts");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _globalConfig__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../globalConfig */ "./src/app/globalConfig.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _global_picturepath_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../global/picturepath.pipe */ "./src/app/global/picturepath.pipe.ts");
/* harmony import */ var _loader_loader_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../loader/loader.service */ "./src/app/loader/loader.service.ts");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_11__);

/*****************************************************
# Company Name          :
# Author                :
# Created Date          : 05-04-2019
# Module                : CardbuilderComponent
# Object name           : CardbuilderComponent
# Functionality         : All card building  operations
# Purpose               : constructor, ngOnInit,
*******************************************************/











var CardbuilderComponent = /** @class */ (function () {
    /* Function Name : constructor
  * Author :
  * Created Date : 05-04-2019
  * Modified Date : *
  * Purpose : to assign the helpfull obj
  * PARAMS :
  */
    function CardbuilderComponent(router, translate, userService, cvCardService, cService, loderService, filePathPipe, modalService) {
        this.router = router;
        this.translate = translate;
        this.userService = userService;
        this.cvCardService = cvCardService;
        this.cService = cService;
        this.loderService = loderService;
        this.filePathPipe = filePathPipe;
        this.modalService = modalService;
        this.myCarouselOptions = { items: 5, margin: 24, dots: false, nav: true, responsive: { 0: { items: 1 }, 415: { items: 2 }, 767: { items: 3 }, 1023: { items: 4 }, 1199: { items: 5 } } };
        this.priceConversionRate = 1;
        this.activeCurrency = 'USD';
        this.activeCurrenySymbol = '$';
        this.entryType = 'manual';
        this.currencyList = [];
        this.currencySymbols = {
            "USD": "$",
            "EGP": "£",
            "AED": "د.إ",
            "SAR": "ر.س"
        };
        this.templateList = [];
        this.activeTemplate = null;
        this.activeTemplatePrice = null;
        this.cardPhoto = null;
        this.cardForm = {
            "title": '',
            "name": '',
            "position": '',
            "mobile": '',
            "email": '',
            "country_id": null,
            "country_name": "",
            "city_id": null,
            "city_name": "",
            "website": '',
            "photo": '',
            "desc": '',
            "payStatus": false,
            "submit": false
        };
        this.photoErr = {
            size: false,
            type: false
        };
        this.countryList = []; // country list from db
        this.cityList = []; // city list from db
        this.loader = {
            template: false,
            limit: false,
            pay: false,
            cv: false
        };
        this.alertPopupMsg = {
            message: '',
            type: ''
        };
        this.payForm = {
            "cardHolderName": '',
            "cardNumber": '',
            "expMonth": 1,
            "expYear": '',
            "cvvCode": '',
            "submit": false,
            "successMsg": "",
            "errorMsg": "",
        };
        this.years = [];
        this.months = [];
        this.currentYear = new Date().getFullYear();
        this.userCardList = [];
        this.limitStatus = 1;
        this.loggedInUser = null;
        this.defaultCard = null;
        this.cService.activelang.subscribe(function (lang) {
            // this language will be used as a fallback when a translation isn't found in the current language
            translate.setDefaultLang(lang);
            // the lang to use, if the lang isn't available, it will use the current loader to get them
            translate.use(lang);
        });
    }
    /* Function Name : ngOnInit
      * Author :
      * Created Date : 05-04-2019
      * Modified Date : *
      * Purpose : to check the card limit after html render
      * PARAMS :
    */
    CardbuilderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getUserCard();
        this.payForm.expYear = this.currentYear;
        for (var y = this.currentYear; y < this.currentYear + 100; y++) {
            this.years.push(y);
        }
        for (var m = 1; m <= 12; m++) {
            this.months.push(m);
        }
        this.cvCardService.getCurrencyList()
            .subscribe(function (responseData) {
            if (responseData.statustext == 'success') {
                _this.currencyList = responseData.data;
            }
        });
        this.cvCardService.getTemplateList({
            type: 2
        })
            .subscribe(function (responseData) {
            if (responseData.statustext == 'success') {
                _this.templateList = responseData.data;
            }
            _this.loader.template = false;
        });
        this.userService.getCvContent('personal')
            .subscribe(function (responseCountryList) {
            if (responseCountryList.statustext == 'success') {
                _this.countryList = responseCountryList.data.country;
                _this.getCityList();
            }
        });
    };
    /* Function Name : getUserCard
      * Author :
      * Created Date : 27-08-2019
      * Modified Date : *
      * Purpose : to get card list
      * PARAMS :
      */
    CardbuilderComponent.prototype.getUserCard = function () {
        var _this = this;
        this.loggedInUser = this.cService.getLoggedUserData();
        this.cvCardService.getCardList({
            id: btoa((this.loggedInUser._i))
        }).subscribe(function (responseData) {
            if (responseData.statustext == 'success') {
                var cardList = responseData.data.list;
                _this.userCardList = cardList;
                _this.userCardList.push({
                    card_title: "Preview Card",
                    price: '0.00',
                    preview: true
                });
                _this.limitStatus = responseData.data.limitStatus;
                _this.defaultCard = null;
                _this.defaultCard = _this.userCardList.find(function (item) {
                    return item.is_default == 1;
                });
            }
        });
    };
    /* Function Name : getCityList
      * Author :
      * Created Date : 05-04-2019
      * Modified Date : *
      * Purpose : to get city list
      * PARAMS :
      */
    CardbuilderComponent.prototype.getCityList = function () {
        var _this = this;
        this.cityList = [];
        var countryId = this.cardForm.country_id;
        this.cService.getCityList(countryId)
            .subscribe(function (responseData) {
            if (responseData.statustext === 'success') {
                _this.cityList = responseData.data;
            }
        });
    };
    /* Function Name : setCardEntryType
  * Author :
  * Created Date : 08-04-2019
  * Modified Date : *
  * Purpose : to set card entry type
  * PARAMS : type(browse/manual/cv)
  */
    CardbuilderComponent.prototype.setCardEntryType = function (type) {
        var _this = this;
        this.resetCardForm();
        this.entryType = type;
        if (this.entryType == 'cv') {
            this.loader.cv = true;
            this.cvCardService.getDefaultCv()
                .subscribe(function (responseData) {
                _this.loader.cv = false;
                if (responseData.statustext == 'success') {
                    var defaultCv = JSON.parse(responseData.data.cv_details);
                    _this.cardForm.name = defaultCv.personal.first_name + ' ' + defaultCv.personal.last_name;
                    _this.cardForm.mobile = defaultCv.personal.mobile_no;
                    _this.cardForm.country_id = defaultCv.personal.country_id;
                    _this.getCityList();
                    _this.cardForm.city_id = defaultCv.personal.city_id;
                    _this.cardForm.website = defaultCv.personal.website;
                    _this.cardForm.email = defaultCv.personal.email;
                    _this.cardForm.photo = defaultCv.profilePic;
                }
                else {
                    _this.translate.get(['COMMON.ERROR', 'CARD.CV_DATA_ERROR']).subscribe(function (tData) {
                        sweetalert__WEBPACK_IMPORTED_MODULE_11___default()({
                            title: tData['COMMON.ERROR'],
                            text: tData['CARD.CV_DATA_ERROR'],
                            icon: 'error'
                        });
                        // this.alertPopupMsg.message = tData;
                        // this.alertPopupMsg.type='default_cv';
                        // this.modalService.open(this.alertPopup, {  size: 'sm', centered: true, windowClass: 'DefaultModal' });
                    });
                }
            });
        }
    };
    /* Function Name : setActiveCurrency
  * Author :
  * Created Date : 08-04-2019
  * Modified Date : *
  * Purpose : to set active currency
  * PARAMS :
  */
    CardbuilderComponent.prototype.setActiveCurrency = function () {
        var _this = this;
        var activeCurrency = this.currencyList.find(function (item) {
            return item.name === _this.activeCurrency;
        });
        this.priceConversionRate = activeCurrency.value;
        this.activeCurrenySymbol = this.currencySymbols[activeCurrency.name];
    };
    /* Function Name : setActiveTemplate
      * Author :
      * Created Date : 08-04-2019
      * Modified Date : *
      * Purpose : to set the active template;
      * PARAMS :  template
    */
    CardbuilderComponent.prototype.setActiveTemplate = function (template) {
        this.activeTemplate = template.id;
        this.activeTemplatePrice = this.priceConversionRate * template.price;
        this.cardForm.submit = false;
        if (this.activeTemplatePrice == 0) {
            this.cardForm.payStatus = true;
        }
        else {
            this.cardForm.payStatus = false;
        }
    };
    /* Function Name : saveCardForm
      * Author :
      * Created Date : 09-04-2019
      * Modified Date : *
      * Purpose : to save card
      * PARAMS :
    */
    CardbuilderComponent.prototype.saveCardForm = function () {
        var _this = this;
        if (this.limitStatus == 0) {
            this.translate.get(['COMMON.ERROR', 'CARD.BUILD_LIMIT_COMPLETE']).subscribe(function (tData) {
                sweetalert__WEBPACK_IMPORTED_MODULE_11___default()({
                    title: tData['COMMON.ERROR'],
                    text: tData['CARD.BUILD_LIMIT_COMPLETE'],
                    icon: "error",
                });
            });
        }
        else {
            this.cardForm.submit = true;
            var errorCount = 0;
            if (this.entryType != 'browse') {
                if ((!this.cardForm.title ||
                    !this.cardForm.name ||
                    !this.cardForm.mobile ||
                    !this.cardForm.country_id ||
                    !this.cardForm.city_id ||
                    !this.cardForm.email)) {
                    errorCount += 1;
                }
                if (!this.activeTemplate) {
                    errorCount += 1;
                }
                if (this.cardForm.photo && (this.photoErr.size || this.photoErr.type)) {
                    errorCount += 1;
                }
                if (this.cardForm.desc && this.cardForm.desc.split(" ").length > 7) {
                    errorCount += 1;
                }
            }
            else {
                if (!this.cardForm.title || !this.cardPhoto) {
                    this.photoErr.type = true;
                    errorCount += 1;
                }
                else {
                    this.photoErr.type = false;
                }
            }
            if (errorCount == 0) {
                /* if (this.entryType != 'browse' && (this.cardForm.payStatus == false)) {
                  this.modalService.open(this.paymentModal, {
                    backdrop: 'static',
                    keyboard: false, size: 'lg', centered: true, windowClass: 'DefaultModal'
                  });
                } else {*/
                var postdata = {};
                if (this.entryType == 'browse') {
                    postdata = {
                        "title": this.cardForm.title,
                        "type": this.entryType,
                        "card_photo": this.cardPhoto
                    };
                }
                else {
                    var selectedCountry = this.countryList.find(function (item) {
                        return item.id == _this.cardForm.country_id;
                    });
                    this.cardForm.country_name = selectedCountry.name;
                    var selectedCity = this.cityList.find(function (item) {
                        return item.id == _this.cardForm.city_id;
                    });
                    this.cardForm.city_name = selectedCity.name;
                    postdata = {
                        card_title: this.cardForm.title,
                        "type": this.entryType,
                        template_id: this.activeTemplate,
                        template_price: this.activeTemplatePrice,
                        card_details: JSON.stringify(this.cardForm)
                    };
                }
                this.cvCardService.saveCard(postdata).subscribe(function (responseData) {
                    if (responseData.statustext == 'success') {
                        _this.router.navigate(['/card/success', responseData.data.token]);
                    }
                });
                /* } */
            }
            else {
                _globalConfig__WEBPACK_IMPORTED_MODULE_7__["SCROLL_TO_TOP"]();
            }
        }
    };
    /* Function Name : openBrowsePhoto
      * Author :
      * Created Date : 10-04-2019
      * Modified Date : *
      * Purpose : to browse own card image
      * PARAMS :
    */
    CardbuilderComponent.prototype.openBrowsePhoto = function () {
        document.getElementById('cardImage').click();
    };
    /* Function Name : manageCardPhoto
      * Author :
      * Created Date : 10-04-2019
      * Modified Date : *
      * Purpose : to manage card image for form
      * PARAMS :
      */
    CardbuilderComponent.prototype.manageCardPhoto = function (e) {
        var _this = this;
        if (e.target.files) {
            this.photoErr.size = false;
            this.photoErr.type = false;
            this.cardForm.photo = null;
            var file = e.target.files[0];
            if (file.size > 256000) { // check image size < 250kb
                this.photoErr.size = true;
            }
            else if (file.type.indexOf("image/") == -1) {
                this.photoErr.type = true;
            }
            else {
                var reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = function () {
                    _this.cardForm.photo = reader.result;
                };
            }
        }
    };
    /* Function Name : ownCardImageManage
      * Author :
      * Created Date : 11-04-2019
      * Modified Date : *
      * Purpose : to manage  own card image
      * PARAMS :
      */
    CardbuilderComponent.prototype.ownCardImageManage = function (e) {
        var _this = this;
        var file = e.target.files;
        if (file) {
            file = file[0];
            this.photoErr.size = false;
            this.photoErr.type = false;
            this.cardPhoto = '';
            if (file.size > 256000) { // check image size < 250kb
                this.photoErr.size = true;
            }
            else if (file.type.indexOf("image/") == -1) {
                this.photoErr.type = true;
            }
            else {
                var reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = function () {
                    _this.cardPhoto = reader.result;
                };
            }
        }
    };
    /* Function Name : submitPayForm
      * Author :
      * Created Date : 12-04-2019
      * Modified Date : *
      * Purpose : to submit payment form
      * PARAMS :
      */
    CardbuilderComponent.prototype.submitPayForm = function () {
        var _this = this;
        this.payForm.submit = true;
        // this.loader.pay = true;
        var errorCount = 0;
        if (!this.payForm.cardHolderName) {
            errorCount += 1;
        }
        if (!this.payForm.cardNumber) {
            errorCount += 1;
        }
        if (!this.payForm.cvvCode) {
            errorCount += 1;
        }
        if (errorCount == 0) {
            this.loader.pay = true;
            setTimeout(function () {
                _this.resetPayForm();
                _this.loader.pay = false;
                _this.cardForm.payStatus = true;
                _this.saveCardForm();
            }, 5000);
        }
    };
    /* Function Name : resetPayForm
      * Author :
      * Created Date : 12-04-2019
      * Modified Date : *
      * Purpose : to reset the payment form
      * PARAMS :
      */
    CardbuilderComponent.prototype.resetPayForm = function () {
        this.payForm = {
            "cardHolderName": '',
            "cardNumber": '',
            "expMonth": 1,
            "expYear": this.currentYear,
            "cvvCode": '',
            "successMsg": "",
            "errorMsg": "",
            "submit": false
        };
        this.modalService.dismissAll();
    };
    /* Function Name : resetCardForm
      * Author :
      * Created Date : 12-04-2019
      * Modified Date : *
      * Purpose : to reset the card form
      * PARAMS :
      */
    CardbuilderComponent.prototype.resetCardForm = function () {
        this.cardForm = {
            "title": '',
            "name": '',
            "position": '',
            "mobile": '',
            "email": '',
            "country_id": null,
            "country_name": "",
            "city_id": null,
            "city_name": "",
            "website": '',
            "photo": '',
            "desc": '',
            "payStatus": false,
            "submit": false
        };
        this.photoErr = {
            size: false,
            type: false
        };
    };
    /* Function Name : goToCard
        * Author :
        * Created Date : 27-08-2019
        * Modified Date : *
        * Purpose : to go to the user card
        * PARAMS :  card
        */
    CardbuilderComponent.prototype.goToCard = function (card) {
        var _this = this;
        var userId = this.loggedInUser._i;
        if (card.preview) {
            this.cvCardService.saveDefaultCard({
                user_id: btoa(userId)
            })
                .subscribe(function (responseData) {
                setTimeout(function () {
                    _this.loderService.show();
                }, 100);
                setTimeout(function () {
                    _this.loderService.hide();
                    var cvPath = _this.filePathPipe.transform('careery-' + userId + '-card.pdf', 'card');
                    var win = window.open(cvPath, '_blank');
                    win.focus();
                }, 3000);
            });
        }
        else {
            var cardPath = this.filePathPipe.transform(card.card_file, 'card');
            var win = window.open(cardPath, '_blank');
            win.focus();
        }
    };
    /* Function Name : removeCard
      * Author :
      * Created Date : 27-08-2019
      * Modified Date : *
      * Purpose : to remove user card
      * PARAMS :  card
      */
    CardbuilderComponent.prototype.removeCard = function (card) {
        var _this = this;
        this.translate.get(['CARD.CARD_REMOVE_CONFIRM']).subscribe(function (tData) {
            sweetalert__WEBPACK_IMPORTED_MODULE_11___default()({
                title: '',
                text: tData['CARD.CARD_REMOVE_CONFIRM'],
                icon: "warning",
                buttons: {
                    cancel: true,
                    confirm: true,
                },
            }).then(function (willDelete) {
                if (willDelete) {
                    _this.loader.card_remove = true;
                    _this.cvCardService.removeCard({
                        cardId: btoa(card.id)
                    })
                        .subscribe(function (responseData) {
                        _this.loader.card_remove = false;
                        if (responseData.statustext == 'success') {
                            _this.getUserCard();
                        }
                    });
                }
            });
        });
    };
    /* Function Name : setIsDefault
        * Author :
        * Created Date : 27-08-2019
        * Modified Date : *
        * Purpose : to set user card as default
        * PARAMS :  card
        */
    CardbuilderComponent.prototype.setIsDefault = function (card) {
        var _this = this;
        this.cvCardService.setCardDefault({
            card_id: card.id
        }).subscribe(function (responsData) {
            if (responsData.statustext == 'success') {
                _this.getUserCard();
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('alertPopup'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CardbuilderComponent.prototype, "alertPopup", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('paymentModal'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CardbuilderComponent.prototype, "paymentModal", void 0);
    CardbuilderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cardbuilder',
            template: __webpack_require__(/*! ./cardbuilder.component.html */ "./src/app/profile/cardbuilder/cardbuilder.component.html"),
            providers: [_global_picturepath_pipe__WEBPACK_IMPORTED_MODULE_9__["PicturepathPipe"]],
            styles: [__webpack_require__(/*! ./cardbuilder.component.scss */ "./src/app/profile/cardbuilder/cardbuilder.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"],
            _services_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"],
            _services_cvcard_service__WEBPACK_IMPORTED_MODULE_4__["CvcardService"],
            _services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"],
            _loader_loader_service__WEBPACK_IMPORTED_MODULE_10__["LoaderService"],
            _global_picturepath_pipe__WEBPACK_IMPORTED_MODULE_9__["PicturepathPipe"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModal"]])
    ], CardbuilderComponent);
    return CardbuilderComponent;
}());



/***/ }),

/***/ "./src/app/profile/cardbuildersuccess/cardbuildersuccess.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/profile/cardbuildersuccess/cardbuildersuccess.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"commonWrap\">\n  <h2 class=\"withLine\"><span>{{ 'CARD.CARD_BUILDER'| translate }}</span></h2>\n  <div class=\"wrapPagenotFound\">\n    <h3>{{ 'COMMON.SUCCESS'| translate }}!</h3>\n    <div>\n      {{ 'CARD.SUCCESS_MSG' | translate }}\n    </div>\n    \n    <div >\n      <a [routerLink]=\"['/card/build']\" class=\"cv-action-btn\">{{ 'CARD.MY_CARDS'| translate }}</a>\n      <a download=\"mycard.pdf\" [href]=\"cardDetails?.card_file| picturepath:'card'\" target=\"_blank\" class=\"cv-action-btn\">{{ 'CV.DOWNLOAD'| translate }}</a>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/profile/cardbuildersuccess/cardbuildersuccess.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/profile/cardbuildersuccess/cardbuildersuccess.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvY2FyZGJ1aWxkZXJzdWNjZXNzL2NhcmRidWlsZGVyc3VjY2Vzcy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/profile/cardbuildersuccess/cardbuildersuccess.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/profile/cardbuildersuccess/cardbuildersuccess.component.ts ***!
  \****************************************************************************/
/*! exports provided: CardbuildersuccessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardbuildersuccessComponent", function() { return CardbuildersuccessComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _services_cvcard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/cvcard.service */ "./src/app/services/cvcard.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var CardbuildersuccessComponent = /** @class */ (function () {
    function CardbuildersuccessComponent(activatedRoute, translate, cService, cvcardService) {
        this.activatedRoute = activatedRoute;
        this.translate = translate;
        this.cService = cService;
        this.cvcardService = cvcardService;
        this.cardDetails = null;
        this.cService.activelang.subscribe(function (lang) {
            // this language will be used as a fallback when a translation isn't found in the current language
            translate.setDefaultLang(lang);
            // the lang to use, if the lang isn't available, it will use the current loader to get them
            translate.use(lang);
        });
    }
    CardbuildersuccessComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            var token = params.token;
            _this.cvcardService.getCardDetails({
                "card_token": token
            }).subscribe(function (responsData) {
                if (responsData.statustext == 'success') {
                    _this.cardDetails = responsData.data;
                }
            });
        });
    };
    CardbuildersuccessComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cardbuildersuccess',
            template: __webpack_require__(/*! ./cardbuildersuccess.component.html */ "./src/app/profile/cardbuildersuccess/cardbuildersuccess.component.html"),
            styles: [__webpack_require__(/*! ./cardbuildersuccess.component.scss */ "./src/app/profile/cardbuildersuccess/cardbuildersuccess.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"],
            _services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"],
            _services_cvcard_service__WEBPACK_IMPORTED_MODULE_4__["CvcardService"]])
    ], CardbuildersuccessComponent);
    return CardbuildersuccessComponent;
}());



/***/ }),

/***/ "./src/app/profile/changepassword/changepassword.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/profile/changepassword/changepassword.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"withLine\"><span>{{ 'CHANGE_PASSWORD.CHANGEPASSWORD' | translate }}</span></h2>\n\n<div class=\"row justify-content-center\">\n    <div class=\"col-lg-6\">\n        <div class=\"loginSearch\">\n            <div class=\"loginSearchLeft\">\n\n                <div class=\"forLogin\">\n                    <form class=\"form-horizontal\" [formGroup]=\"passwordForm\" (submit)=\"passwordAction()\" novalidate>\n                        <div class=\"alert alert-success\" *ngIf=\"successMessage\">{{successMessage}}</div>\n                        <div class=\"alert alert-danger\" *ngIf=\"errorMessage\">{{errorMessage}}</div>\n                        <div class=\"alert alert-danger\" *ngIf=\"passwordForm.hasError('notSame')\">\n                            {{ 'CHANGE_PASSWORD.CONFIRM_PASSWORD_MISMATCH'| translate }}</div>\n                        <div class=\"formWrap\">\n                            <label for=\"email\">{{ 'CHANGE_PASSWORD.OLDPASSWORD' | translate }} <small><i class=\"fa fa-asterisk landing-req-sign\" aria-hidden=\"true\"></i></small>:</label>\n\n                            <input class=\"txtField\" type=\"password\" name=\"oldpassword\" id=\"oldpassword\" formControlName=\"oldpassword\" placeholder=\"{{ 'CHANGE_PASSWORD.OLDPASSWORD' | translate }}\" required>\n\n                            <div *ngIf=\"passwordForm.controls['oldpassword'].invalid && (passwordForm.controls['oldpassword'].dirty || passwordForm.controls['oldpassword'].touched)\" class=\"alert alert-danger\">\n                                <div *ngIf=\"passwordForm.controls['oldpassword'].errors.required\">{{ 'CHANGE_PASSWORD.OLD_PASSWORD_REQUIRED' | translate }}</div>\n                                <div *ngIf=\"passwordForm.controls['oldpassword'].hasError('whitespace')\">{{ 'LANDING.INVALID'| translate }}</div>\n                            </div>\n\n                        </div>\n\n                        <div class=\"formWrap\">\n                            <label for=\"email\">{{'CHANGE_PASSWORD.NEWPASSWORD' | translate}} <small><i class=\"fa fa-asterisk landing-req-sign\" aria-hidden=\"true\"></i></small>:</label>\n                            <input class=\"txtField\" type=\"password\" name=\"password\" id=\"password\" formControlName=\"password\" placeholder=\"{{'CHANGE_PASSWORD.NEWPASSWORD' | translate}}\" required>\n                            <div *ngIf=\"passwordForm.controls['password'].invalid && (passwordForm.controls['password'].dirty || passwordForm.controls['password'].touched)\" class=\"alert alert-danger\">\n                                <div *ngIf=\"passwordForm.controls['password'].errors.required\">{{ 'CHANGE_PASSWORD.NEW_PASSWORD_REQUIRED' | translate }}</div>\n                                 <div *ngIf=\"passwordForm.controls['password'].hasError('whitespace')\">{{ 'LANDING.INVALID'| translate }}</div>\n                                 <div *ngIf=\"passwordForm.controls['password'].errors.pattern\">\n                                    {{ 'LANDING.PASSWORD_PATTERN'| translate }}</div>\n                            </div>\n                        </div>\n\n                        <div class=\"formWrap\">\n                            <label for=\"email\">{{'CHANGE_PASSWORD.CONFIRMPASSWORD' | translate}} <small><i class=\"fa fa-asterisk landing-req-sign\" aria-hidden=\"true\"></i></small>:</label>\n                            <input class=\"txtField\" type=\"password\" name=\"confirm_password\" id=\"confirm_password\" formControlName=\"confirm_password\" placeholder=\"{{'CHANGE_PASSWORD.CONFIRMPASSWORD' | translate}}\" required>\n                            <div *ngIf=\"passwordForm.controls['confirm_password'].invalid && (passwordForm.controls['confirm_password'].dirty || passwordForm.controls['confirm_password'].touched)\" class=\"alert alert-danger\">\n                                <div *ngIf=\"passwordForm.controls['confirm_password'].errors.required\">{{ 'CHANGE_PASSWORD.CONFIRM_PASSWORD_REQUIRED' | translate }}</div>\n                                <div *ngIf=\"passwordForm.controls['confirm_password'].hasError('whitespace')\">{{ 'LANDING.INVALID'| translate }}</div>\n                            </div>\n                        </div>\n\n                        <div class=\"formWrap\">\n\n                            <button class=\"btnGreen\" type=\"submit\" [disabled]=\"passwordForm.pristine || passwordForm.invalid\">\n                            <span *ngIf=\"loader.changePassword\" class=\"loader-p\"><i class=\"fa fa-cog fa-spin\" ></i></span>\n                            {{'CHANGE_PASSWORD.SUBMIT' | translate}}</button>\n\n                        </div>\n\n                    </form>\n                </div>\n            </div>\n        </div>\n\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/profile/changepassword/changepassword.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/profile/changepassword/changepassword.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loginSearch .loginSearchLeft .forLogin {\n  background: none !important;\n  box-shadow: none; }\n\nh2.withLine {\n  margin-top: 60px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9jaGFuZ2VwYXNzd29yZC9DOlxcVXNlcnNcXHNoYWR5Lm1vaGFtZWRcXERvd25sb2Fkc1xcY2FyZWVyeUFuZy9zcmNcXGFwcFxccHJvZmlsZVxcY2hhbmdlcGFzc3dvcmRcXGNoYW5nZXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQXlDLDRCQUEwQjtFQUFFLGlCQUFlLEVBQUc7O0FBQ3ZGO0VBQWEsaUJBQWUsRUFBRyIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvY2hhbmdlcGFzc3dvcmQvY2hhbmdlcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW5TZWFyY2ggLmxvZ2luU2VhcmNoTGVmdCAuZm9yTG9naW57IGJhY2tncm91bmQ6bm9uZSAhaW1wb3J0YW50OyBib3gtc2hhZG93Om5vbmU7fVxuaDIud2l0aExpbmV7IG1hcmdpbi10b3A6NjBweDt9Il19 */"

/***/ }),

/***/ "./src/app/profile/changepassword/changepassword.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/profile/changepassword/changepassword.component.ts ***!
  \********************************************************************/
/*! exports provided: ChangepasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangepasswordComponent", function() { return ChangepasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/*****************************************************
# Company Name          :
# Author                :
# Created Date          : 25-01-2019
# Module                : ChangepasswordComponent
# Object name           : ChangepasswordComponent
# Functionality         : Block users list
# Purpose               : constructor, ngOnInit, noWhitespaceValidator, settimeoutMSG, createPasswordForm, passwordAction
*******************************************************/







var ChangepasswordComponent = /** @class */ (function () {
    /* Function Name : constructor
      * Author :
      * Created Date : 19-02-2019
      * Modified Date : *
      * Purpose : to define the all helpful objects and define the languages data
      * PARAMS : route, fb , usersService, translate, cService
      */
    function ChangepasswordComponent(route, fb, usersService, translate, cService) {
        var _this = this;
        this.route = route;
        this.fb = fb;
        this.usersService = usersService;
        this.cService = cService;
        this.errorMessage = ""; // error message
        this.confirmMismatchErr = ''; // confirm password error message
        this.loader = {
            "changePassword": false
        };
        this.cService.activelang.subscribe(function (lang) {
            // this language will be used as a fallback when a translation isn't found in the current language
            translate.setDefaultLang(lang);
            // the lang to use, if the lang isn't available, it will use the current loader to get them
            translate.use(lang);
        });
        translate.get('CHANGE_PASSWORD.CONFIRM_PASSWORD_MISMATCH').subscribe(function (tData) {
            _this.confirmMismatchErr = tData;
        });
        this.createPasswordForm();
    }
    /* Function Name : ngOnInit
      * Author :
      * Created Date : 19-02-2019
      * Modified Date : *
      * Purpose : to get data after html load
      * PARAMS :
      */
    ChangepasswordComponent.prototype.ngOnInit = function () {
    };
    /* Function Name : noWhitespaceValidator
      * Author :
      * Created Date : 19-02-2019
      * Modified Date : *
      * Purpose : to validate white space from input box
      * PARAMS : control
      */
    ChangepasswordComponent.prototype.noWhitespaceValidator = function (control) {
        var isWhitespace = (control.value || '').trim().length === 0;
        var isValid = !isWhitespace;
        return isValid ? null : { 'whitespace': true };
    };
    /* Function Name : settimeoutMSG
      * Author :
      * Created Date : 19-02-2019
      * Modified Date : *
      * Purpose : to message display
      * PARAMS :  type
      */
    ChangepasswordComponent.prototype.settimeoutMSG = function (type) {
        if (type === void 0) { type = ''; }
        setTimeout(function () {
            if (type == 'error') {
                this.errorMessage = "";
            }
            else {
                this.successMessage = '';
            }
        }, 5000);
    };
    /* Function Name : createPasswordForm
      * Author :
      * Created Date : 19-02-2019
      * Modified Date : *
      * Purpose : to create the change password form
      * PARAMS :
      */
    ChangepasswordComponent.prototype.createPasswordForm = function () {
        this.passwordForm = this.fb.group({
            oldpassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, this.noWhitespaceValidator]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, this.noWhitespaceValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{5,}')]],
            confirm_password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, this.noWhitespaceValidator]],
        }, { validator: this.confirmpasswordValidation });
    };
    /* Function Name : passwordAction
      * Author :
      * Created Date : 19-02-2019
      * Modified Date : *
      * Purpose : to submit the change password form
      * PARAMS :
      */
    ChangepasswordComponent.prototype.passwordAction = function () {
        var _this = this;
        var formPostData = this.passwordForm.value;
        //console.log(formPostData);
        if (this.passwordForm.value.password === this.passwordForm.value.confirm_password) {
            this.loader.changePassword = true;
            this.usersService.changePassword(formPostData).subscribe(function (response) {
                if (response['statustext'] === 'success') {
                    _this.errorMessage = '';
                    _this.successMessage = response['message'];
                    _this.passwordForm.reset();
                    _this.route.navigate(['change-password']);
                }
                else {
                    _this.successMessage = '';
                    _this.errorMessage = response['message'];
                    _this.settimeoutMSG('error');
                }
                _this.loader.changePassword = false;
            });
        }
        else {
            this.successMessage = '';
            this.errorMessage = this.confirmMismatchErr;
            this.settimeoutMSG('error');
            this.loader.changePassword = false;
        }
    };
    ChangepasswordComponent.prototype.confirmpasswordValidation = function (group) {
        var pass = group.controls.password.value;
        var confirmPass = group.controls.confirm_password.value;
        if (pass && confirmPass) {
            return pass === confirmPass ? null : { notSame: true };
        }
        else {
            return null;
        }
    };
    ChangepasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-changepassword',
            template: __webpack_require__(/*! ./changepassword.component.html */ "./src/app/profile/changepassword/changepassword.component.html"),
            styles: [__webpack_require__(/*! ./changepassword.component.scss */ "./src/app/profile/changepassword/changepassword.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _services_users_service__WEBPACK_IMPORTED_MODULE_4__["UsersService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"],
            _services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"]])
    ], ChangepasswordComponent);
    return ChangepasswordComponent;
}());



/***/ }),

/***/ "./src/app/profile/chat-history/chat-history.component.html":
/*!******************************************************************!*\
  !*** ./src/app/profile/chat-history/chat-history.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"proEdit forAllInvitations\">\n  <h2 class=\"withLine\"><span>{{ 'COMMON.ALL_MESSAGES'|translate }}</span></h2>\n\n  <div class=\"inviteBlock\">\n    <div *ngIf=\"messagesList.length > 0\">\n      <div class=\"notification-row alt\" *ngFor=\"let message of messagesList; let i = index\"\n        [ngClass]=\"((i%2==0)?'noBg':'')\">\n\n              <div class=\"notificationImg\" *ngIf=\"message?.profile_pic\"><img *ngIf=\"message?.profile_pic\" [src]=\"(message?.profile_pic) | picturepath:'users'\" alt=\"\"></div>\n              <div class=\"notificationImg\" *ngIf=\"!message?.profile_pic\" >\n                  \n                  <img  *ngIf=\"message && !message.profile_pic && message.gender && message.experience_level\" src=\"assets/images/charachter/{{ message.gender+'_'+message.experience_level }}.png\" alt=\"\">\n              </div>\n              <div class=\"notificationBody\">\n                <h3>{{message?.first_name + ' '+ message?.last_name}}</h3>\n                <p class=\"tXt\">\n                  <span *ngIf=\"message.type == 0\">{{ message.message }}</span>\n                  <span *ngIf=\"message.type == 1 && message.is_image == 1\"><i class=\"fa fa-camera-retro\"></i> photo</span>\n                  <span *ngIf=\"message.type == 1 && !message.is_image\"><i class=\"fa fa-file\"></i> media</span>\n                </p>\n              </div>\n              <div class=\"notificationTime\">\n                  <p class=\"time\">{{ (message?.posted_on) | amTimeAgo:true   }} {{ 'NOTIFICATIONS.AGO' | translate }}</p>\n                  \n                \n                      <div class=\"inviteBlockBtn\">\n                          <a class=\"green\" href=\"javascript:void(0);\" class=\"green\" (click)=\"setChatPerson(message.room)\" >{{ 'COMMON.MESSAGE' | translate }}</a>\n                      </div>\n                      \n                    \n              </div>\n\n      </div>\n    </div>\n    <ngx-pager [config]=\"paginationConfig\" [totalrow]='totalRows' class=\"defaultPagination\"></ngx-pager>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/profile/chat-history/chat-history.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/profile/chat-history/chat-history.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvY2hhdC1oaXN0b3J5L2NoYXQtaGlzdG9yeS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/profile/chat-history/chat-history.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/profile/chat-history/chat-history.component.ts ***!
  \****************************************************************/
/*! exports provided: ChatHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatHistoryComponent", function() { return ChatHistoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");





var ChatHistoryComponent = /** @class */ (function () {
    function ChatHistoryComponent(uService, cService, translate) {
        var _this = this;
        this.uService = uService;
        this.cService = cService;
        this.translate = translate;
        this.messagesList = [];
        this.paginationConfig = null; // set pagination config
        this.totalRows = null;
        this.currentPage = 1; // set current page
        this.loggedUser = null;
        this.cService.activelang.subscribe(function (lang) {
            // this language will be used as a fallback when a translation isn't found in the current language
            _this.translate.setDefaultLang(lang);
            // the lang to use, if the lang isn't available, it will use the current loader to get them
            _this.translate.use(lang);
        });
    }
    ChatHistoryComponent.prototype.ngOnInit = function () {
        this.loggedUser = this.cService.getLoggedUserData();
        this.getMessages();
    };
    /* Function Name : getMessages
  * Author :
  * Created Date : 26-06-2019
  * Modified Date : *
  * Purpose : get the messages
  * PARAMS :
  */
    ChatHistoryComponent.prototype.getMessages = function () {
        var _this = this;
        var user = this.loggedUser;
        this.messagesList = [];
        this.paginationConfig = {
            perPage: 10,
            render: function (page) {
                _this.uService.getChatNotification({
                    cpp: user._cpp,
                    "page": page
                }).subscribe(function (responseData) {
                    if ((responseData['statustext'] === 'success')) {
                        _this.totalRows = responseData.data.pagination.rowCount;
                        _this.messagesList = responseData.data.list.map(function (item) {
                            var msg = item;
                            msg.message = (item.type == 0) ? decodeURIComponent(item.message) : item.message;
                            return msg;
                        });
                    }
                });
            }
        };
    };
    /* Function Name : setChatPerson
* Author :
* Created Date : 24-04-2019
* Modified Date : *
* Purpose : to set the current chat config
* PARAMS :
*/
    ChatHistoryComponent.prototype.setChatPerson = function (room) {
        this.cService.setChatRoomEmit(room);
    };
    ChatHistoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chat-history',
            template: __webpack_require__(/*! ./chat-history.component.html */ "./src/app/profile/chat-history/chat-history.component.html"),
            styles: [__webpack_require__(/*! ./chat-history.component.scss */ "./src/app/profile/chat-history/chat-history.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"],
            _services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]])
    ], ChatHistoryComponent);
    return ChatHistoryComponent;
}());



/***/ }),

/***/ "./src/app/profile/connections/connections.component.html":
/*!****************************************************************!*\
  !*** ./src/app/profile/connections/connections.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"searchWrap\">\n  <div class=\"row\">\n\n    <div class=\"col-xl-9 col-lg-8\">\n      <h2 class=\"withLine\"><span>{{ 'LISTPAGES.CONNECTIONS' |translate }}</span></h2>\n      <div class=\"row searchResult\">\n        <div class=\"col-xl-3 col-lg-4 col-md-4 col-6 searchCol\" *ngFor=\"let connection of connectionList; let i=index\" [class.hide]=\"connection.hide\">\n          <div class=\"searchResultSingle\" >\n            <div class=\"search-result-loader-container\" *ngIf=\"connectionList[i].loader\">\n              <div class=\"loader-content\">\n                <i class=\"fa fa-cog fa-spin\"></i>\n                {{ 'PROFILE.PLEASE_WAIT' | translate }}\n              </div>\n            </div>\n            <span class=\"searchClose\" (click)=\"removeConnection(connection, i)\"></span>\n            <div (click)=\"gotoProfile(connection.friend_cpp)\">\n            <div class=\"profileDescImg\" [class.inactive]=\"(currentTime - connection.friend_last_active_time) > (5*60) \">\n            <img *ngIf=\"connection.friend_profile_pic\" alt=\"\" [src]=\"connection.friend_profile_pic| picturepath:'users'\">\n            <img  *ngIf=\"connection && !connection.friend_profile_pic && connection.friend_gender && connection.friend_experience_level\" src=\"assets/images/charachter/{{ connection.friend_gender+'_'+connection.friend_experience_level }}.png\" alt=\"\">\n          </div>\n            \n\n            <h2>{{ connection.friend_first_name }}  {{ connection.friend_last_name }}</h2>\n            <h3>{{ connection.friend_position_local_name }}</h3>\n            <h4><i class=\"fa fa-users\" aria-hidden=\"true\"></i> {{ connection.mutualFriendCount }}  {{'LISTPAGES.MUTUAL_CONNECTION'|translate}}</h4>\n          </div>\n            <!-- <button class=\"blockBtn\" type=\"button\" (click)=\"openLg(content)\">Block</button> -->\n      \n          </div>\n        </div>\n        \n      </div>\n      <ngx-pager  [config]=\"paginationConfig\"  [totalrow]='totalRows' class=\"defaultPagination\"></ngx-pager>\n    \n      <div class=\"col-xl-12 col-lg-12 col-md-12 col-12 searchCol\" *ngIf=\"connectionList.length == 0\">\n          {{\"PROFILEEDIT.NO_RECORD_FOUND\" | translate}}\n      </div>\n      \n\n    </div>\n\n    <div class=\"col-xl-3 col-lg-4\">\n\n      <app-notifications></app-notifications>\n    </div>\n  </div>\n</div>\n\n<ng-template #content let-modal>\n  <h2><span>Tell Us Why:</span></h2>\n  <span class=\"modalClose\" (click)=\"modal.dismiss('Cross click')\"></span>\n  <div class=\"modal-body\">\n    <div class=\"proEdit\">\n      <div class=\"formWrap alt\">\n        <select class=\"inpField fullWidth\" name=\"\">\n          <option value=\"\">Select blocking reason</option>\n        </select>\n      </div>\n      <div class=\"txtOr\">OR:</div>\n      <div class=\"formWrap alt\">\n        <textarea class=\"inpField fullWidth\" name=\"name\" placeholder=\"Type Blocking Reson......\"></textarea>\n      </div>\n      <div class=\"buttonGr\">\n        <div class=\"text-center\">\n          <button type=\"button\" class=\"btnOrange\" name=\"button\">Confirm Blocking</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/profile/connections/connections.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/profile/connections/connections.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvY29ubmVjdGlvbnMvY29ubmVjdGlvbnMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/profile/connections/connections.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/profile/connections/connections.component.ts ***!
  \**************************************************************/
/*! exports provided: ConnectionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectionsComponent", function() { return ConnectionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _globalConfig__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../globalConfig */ "./src/app/globalConfig.ts");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_7__);

/*****************************************************
# Company Name          :
# Author                :
# Created Date          : 05-02-2019
# Module                : ConnectionsComponent
# Object name           : ConnectionsComponent
# Functionality         : get connection list of a user
# Purpose               : constructor, ngOnInit, getConnectionList, getMutualFriend, clickPager, gotoProfile
*******************************************************/







var ConnectionsComponent = /** @class */ (function () {
    /* Function Name : constructor
      * Author :
      * Created Date : 05-02-2019
      * Modified Date : *
      * Purpose : to define the all helpful objects and define the languages data
      * PARAMS : uService, cService, translate, route
      */
    function ConnectionsComponent(uService, cService, translate, route) {
        this.uService = uService;
        this.cService = cService;
        this.translate = translate;
        this.route = route;
        this.paginationConfig = null; // set pagination config
        this.totalRows = null;
        this.currentPage = 1; // set current page
        this.connectionList = []; // set connection list
        this.currentUserData = null; // set current user data
        this.currentTime = null; // set current time
        this.profile_image_path = _globalConfig__WEBPACK_IMPORTED_MODULE_6__["s3URL"] + 'userspic/'; // set user profile image path
        this.cService.activelang.subscribe(function (lang) {
            // this language will be used as a fallback when a translation isn't found in the current language
            translate.setDefaultLang(lang);
            // the lang to use, if the lang isn't available, it will use the current loader to get them
            translate.use(lang);
        });
    }
    /* Function Name : getConnectionList
      * Author :
      * Created Date : 05-02-2019
      * Modified Date : *
      * Purpose : to get all connection list of a user
      * PARAMS :
      */
    ConnectionsComponent.prototype.getConnectionList = function () {
        var _this = this;
        this.uService.userConnectionList(this.currentPage)
            .subscribe(function (responseData) {
            if (responseData.statustext == 'success') {
                _this.defineConnections(responseData.data.connections.list, responseData.data.user);
            }
        });
    };
    ConnectionsComponent.prototype.defineConnections = function (list, user) {
        this.connectionList = list;
        // this.paginationConfig = responseData.data.connections.pager;
        this.currentUserData = user;
        this.getMutualFriend();
    };
    /* Function Name : getMutualFriend
      * Author :
      * Created Date : 05-02-2019
      * Modified Date : *
      * Purpose : to calculate multal connections
      * PARAMS :
      */
    ConnectionsComponent.prototype.getMutualFriend = function () {
        var _this = this;
        var userFriendIdList = [];
        var currentUserId = this.currentUserData.id.toString();
        if (this.currentUserData.friendsIds && this.currentUserData.friendsIds.friend_ids) {
            userFriendIdList = this.currentUserData.friendsIds.friend_ids;
            userFriendIdList = userFriendIdList.split(",");
        }
        this.currentTime = (new Date()).getTime() / 1000;
        this.connectionList.forEach(function (item, index) {
            _this.connectionList[index]['mutualFriendCount'] = 0;
            if (item.allFriends.friend_ids) {
                var friendList_1 = item.allFriends.friend_ids;
                friendList_1 = friendList_1.split(",");
                friendList_1.splice(friendList_1.indexOf(currentUserId), 1);
                var mutualFriendList = userFriendIdList.filter(function (obj) { return friendList_1.indexOf(obj) > -1; });
                _this.connectionList[index]['mutualFriendCount'] = mutualFriendList.length;
            }
        });
    };
    /* Function Name : ngOnInit
      * Author :
      * Created Date : 05-02-2019
      * Modified Date : *
      * Purpose : to get data after html load
      * PARAMS :
      */
    ConnectionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        localStorage.setItem('_sp', 'connection');
        this.paginationConfig = {
            perPage: 10,
            render: function (page) {
                _this.currentPage = page;
                _this.cService.listData.subscribe(function (listData) {
                    if (listData && listData.data) {
                        _this.defineConnections(listData.data.list.list, listData.data.user);
                        _this.totalRows = listData.data.list.pager.rowCount;
                    }
                });
                _this.uService.userConnectionList(_this.currentPage)
                    .subscribe(function (responseData) {
                    if (responseData.statustext == 'success' && responseData.data.connections) {
                        _this.defineConnections(responseData.data.connections.list, responseData.data.user);
                        _this.totalRows = responseData.data.connections.pager.rowCount;
                    }
                });
            }
        };
    };
    /* Function Name : clickPager
      * Author :
      * Created Date : 05-02-2019
      * Modified Date : *
      * Purpose : to click on pagination page
      * PARAMS : e
      */
    ConnectionsComponent.prototype.clickPager = function (e) {
        this.currentPage = e;
        this.getConnectionList();
    };
    /* Function Name : gotoProfile
      * Author :
      * Created Date : 05-02-2019
      * Modified Date : *
      * Purpose : to go to a user profile
      * PARAMS : friendCpp
      */
    ConnectionsComponent.prototype.gotoProfile = function (friendCpp) {
        this.route.navigate(['/', friendCpp]);
    };
    /* Function Name : removeConnection
      * Author :
      * Created Date : 09-07-2019
      * Modified Date : *
      * Purpose : to remove connection
      * PARAMS : connection
      */
    ConnectionsComponent.prototype.removeConnection = function (connection, connectionIndex) {
        var _this = this;
        this.connectionList[connectionIndex]['loader'] = true;
        this.uService.userConnectionRemove({
            c_u_id: btoa(connection.friend_id)
        }).subscribe(function (responsData) {
            _this.connectionList[connectionIndex]['loader'] = false;
            if (responsData.statustext == 'success') {
                _this.translate.get(['COMMON.SUCCESS']).subscribe(function (tData) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_7___default()({
                        title: tData['COMMON.SUCCESS'],
                        text: responsData.message,
                        icon: 'success'
                    }).then(function () {
                        _this.getConnectionList();
                    });
                });
            }
            else {
                _this.translate.get(['COMMON.ERROR']).subscribe(function (tData) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_7___default()({
                        title: tData['COMMON.ERROR'],
                        text: responsData.message,
                        icon: 'error'
                    });
                });
            }
        });
    };
    ConnectionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-connections',
            template: __webpack_require__(/*! ./connections.component.html */ "./src/app/profile/connections/connections.component.html"),
            styles: [__webpack_require__(/*! ./connections.component.scss */ "./src/app/profile/connections/connections.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"],
            _services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], ConnectionsComponent);
    return ConnectionsComponent;
}());



/***/ }),

/***/ "./src/app/profile/controllpanelsettings/controllpanelsettings.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/profile/controllpanelsettings/controllpanelsettings.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"proEdit privacyWrap\">\n  <h2 class=\"withLine\"><span>Control panel setting for points</span></h2>\n\n  <div class=\"\">\n    <div class=\"row justify-content-center\">\n      <div class=\"col-lg-7\">\n\n        <div class=\"formTable\">\n          <table class=\"table table-borderless\">\n            <thead>\n              <tr>\n                <th>#</th>\n                <th class=\"text-right\">Points</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td class=\"align-middle\">Courses</td>\n                <td class=\"text-right\"><input type=\"number\" name=\"\" min=\"1\" value=\"0\"></td>\n              </tr>\n              <tr>\n                <td class=\"align-middle\">Daily Meal</td>\n                <td class=\"text-right\"><input type=\"number\" name=\"\" min=\"1\" value=\"0\"></td>\n              </tr>\n              <tr>\n                <td class=\"align-middle\">CV Update</td>\n                <td class=\"text-right\"><input type=\"number\" name=\"\" min=\"1\" value=\"0\"></td>\n              </tr>\n              <tr>\n                <td class=\"align-middle\">Profile Update</td>\n                <td class=\"text-right\"><input type=\"number\" name=\"\" min=\"1\" value=\"0\"></td>\n              </tr>\n              <tr>\n                <td class=\"align-middle\">Recommendation</td>\n                <td class=\"text-right\"><input type=\"number\" name=\"\" min=\"1\" value=\"0\"></td>\n              </tr>\n              <tr>\n                <td class=\"align-middle\">Connections</td>\n                <td class=\"text-right\"><input type=\"number\" name=\"\" min=\"1\" value=\"0\"></td>\n              </tr>\n              <tr>\n                <td class=\"align-middle\">Share</td>\n                <td class=\"text-right\"><input type=\"number\" name=\"\" min=\"1\" value=\"0\"></td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n\n      </div>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/profile/controllpanelsettings/controllpanelsettings.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/profile/controllpanelsettings/controllpanelsettings.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvY29udHJvbGxwYW5lbHNldHRpbmdzL2NvbnRyb2xscGFuZWxzZXR0aW5ncy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/profile/controllpanelsettings/controllpanelsettings.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/profile/controllpanelsettings/controllpanelsettings.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ControllpanelsettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControllpanelsettingsComponent", function() { return ControllpanelsettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ControllpanelsettingsComponent = /** @class */ (function () {
    function ControllpanelsettingsComponent() {
    }
    ControllpanelsettingsComponent.prototype.ngOnInit = function () {
    };
    ControllpanelsettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-controllpanelsettings',
            template: __webpack_require__(/*! ./controllpanelsettings.component.html */ "./src/app/profile/controllpanelsettings/controllpanelsettings.component.html"),
            styles: [__webpack_require__(/*! ./controllpanelsettings.component.scss */ "./src/app/profile/controllpanelsettings/controllpanelsettings.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ControllpanelsettingsComponent);
    return ControllpanelsettingsComponent;
}());



/***/ }),

/***/ "./src/app/profile/lifetime/lifetime.component.html":
/*!**********************************************************!*\
  !*** ./src/app/profile/lifetime/lifetime.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"profileMain\">\n  <!-- <app-pagination [config]=\"paginationConfig\" (pager)=\"clickPager($event)\"></app-pagination> -->\n  <div class=\"row\">\n    <div class=\"col-xl-3 col-xs-12\"></div>\n    <div class=\"col-xl-6 col-xs-12\"></div>\n    <div class=\"col-xl-6 col-xs-12\"></div>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/profile/lifetime/lifetime.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/profile/lifetime/lifetime.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvbGlmZXRpbWUvbGlmZXRpbWUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/profile/lifetime/lifetime.component.ts":
/*!********************************************************!*\
  !*** ./src/app/profile/lifetime/lifetime.component.ts ***!
  \********************************************************/
/*! exports provided: LifetimeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LifetimeComponent", function() { return LifetimeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LifetimeComponent = /** @class */ (function () {
    function LifetimeComponent() {
    }
    LifetimeComponent.prototype.ngOnInit = function () {
    };
    LifetimeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-lifetime',
            template: __webpack_require__(/*! ./lifetime.component.html */ "./src/app/profile/lifetime/lifetime.component.html"),
            styles: [__webpack_require__(/*! ./lifetime.component.scss */ "./src/app/profile/lifetime/lifetime.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LifetimeComponent);
    return LifetimeComponent;
}());



/***/ }),

/***/ "./src/app/profile/list/list.component.html":
/*!**************************************************!*\
  !*** ./src/app/profile/list/list.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"searchWrap\">\n  <div class=\"row\">\n\n    <div class=\"{{ (loggedInUser)? 'col-xl-9 col-lg-8':'col-xl-12 col-lg-12' }}\">\n      <h2 class=\"withLine\"><span>Search Result</span></h2>\n      <div class=\"row searchResult\">\n\n        <div class=\"col-xl-3 col-lg-4 col-md-4 col-6 searchCol\" *ngFor=\"let list of searchList; let i = index\" [class.hide]=\"searchList[i].hide\">\n          <div class=\"searchResultSingle\">\n            <div (click)=\"goToProfile(list)\">\n              <div class=\"profileDescImg\" [class.inactive]=\"(currentTime - list.last_active_time) > (5*60) \">\n                <img alt=\"\" *ngIf=\"list.profile_pic\" [src]=\"list.profile_pic| picturepath:'users'\">\n\n                <img  *ngIf=\"list && !list?.profile_pic && list.gender && list.experience_level\" src=\"assets/images/charachter/{{ list.gender+'_'+list.experience_level }}.png\" alt=\"\">\n              </div>\n              <h2>{{list?.first_name}}</h2>\n              <h3>CPP: {{list?.cpp}}</h3>\n              <h3>{{(list.position_name)?list.position_name:'--'}}</h3>\n            </div>\n            <div *ngIf=\"loggedInUser\">\n              <h4 *ngIf=\"list.mutualFriendCount\"><i class=\"fa fa-users\" aria-hidden=\"true\"></i> {{list.mutualFriendCount}} {{'LISTPAGES.MUTUAL_CONNECTION'|translate}}</h4>\n              <button class=\"blockBtn\" type=\"button\" (click)=\"openBlock(list.id, i)\" *ngIf=\"list.buttons && list.buttons.block\">{{ 'BLOCKS.BLOCK' | translate }}</button>\n              <button class=\"blockBtn\" type=\"button\" (click)=\"unblock(list.id, i)\" *ngIf=\"list.buttons && list.buttons.unblock\">{{ 'BLOCKS.UNBLOCK' | translate }}</button>\n              \n              <button  type=\"button\" *ngIf=\"list.buttons && list.buttons.connection\" (click)=\"connectionSend(list, i, 'searchitem')\">{{ 'COMMON.CONNECT' | translate }}</button>\n            </div>\n          \n          </div>\n        </div>\n\n        <div class=\"col-xl-12 col-lg-12 col-md-12 col-12 searchCol\" *ngIf=\"searchList.length == 0\">\n          <div class=\"searchResultSingle\">\n\n           {{\"PROFILEEDIT.NO_RECORD_FOUND\" | translate}}\n\n          </div>\n        </div>\n        \n      </div>\n      <ngx-pager  [config]=\"paginationConfig\"  [totalrow]='totalRows'></ngx-pager>\n\n      <div class=\"recentSearch\">\n        <div class=\"row searchResult\">\n          <div class=\"col-lg-3 searchCol\">\n            <h3 class=\"titleSearch\">{{ 'LANDING.RECENTLY' | translate }} <br> {{ 'LANDING.SEARCH' | translate }}</h3>\n          </div>\n\n          <div class=\"col-lg-9 searchCol\">\n            <div class=\"carousalWrapSearch\">\n\n              <owl-carousel [options]=\"recentSearchCaro\" #recentCarousel [carouselClasses]=\"['owl-theme', 'sliding']\" >\n                  <div class=\"item\" *ngFor=\"let item of recentSearchList\">\n                      <div class=\"searchResultSingle\">\n                        <div class=\"profileDescImg\" [class.inactive]=\"(currentTime - item.last_active_time) > (5*60) \"><img alt=\"\" *ngIf=\"item.profile_pic\" [src]=\"item.profile_pic| picturepath:'users'\">\n\n                          <img  *ngIf=\"item && !item?.profile_pic && item.gender && item.experience_level\" src=\"assets/images/charachter/{{ item.gender+'_'+item.experience_level }}.png\" alt=\"\">\n                        </div>\n                        <h2>{{ item.user_full_name }}</h2>\n                        <h3>CPP: {{item?.cpp}}</h3>\n                        <h3>{{ (item.position_local_name)?item.position_local_name:'--' }}</h3>\n                        <div style=\"min-height:50px\">\n                            <div *ngIf=\"loggedInUser\">\n                              <h4 *ngIf=\"item.mutualFriendCount\"><i class=\"fa fa-users\" aria-hidden=\"true\"></i> {{item.mutualFriendCount}} {{'LISTPAGES.MUTUAL_CONNECTION'|translate}}</h4>\n                              <button class=\"blockBtn\" type=\"button\" (click)=\"openBlock(item.id, i)\" *ngIf=\"item.buttons && item.buttons.block\">{{ 'BLOCKS.BLOCK' | translate }}</button>\n                              <button class=\"blockBtn\" type=\"button\" (click)=\"unblock(item.id, i)\" *ngIf=\"item.buttons && item.buttons.unblock\">{{ 'BLOCKS.UNBLOCK' | translate }}</button>\n                              \n                              <button  type=\"button\" *ngIf=\"item.buttons && item.buttons.connection\" (click)=\"connectionSend(item, i, 'recentsearch')\">{{ 'COMMON.CONNECT' | translate }}</button>\n                            </div>\n                        </div>\n                      </div>\n                  </div>\n                \n                \n              </owl-carousel>\n\n            </div>\n          </div>\n\n        </div>\n      </div>\n\n    </div>\n\n\n    <div class=\"col-xl-3 col-lg-4\" *ngIf=\"loggedInUser\">\n      <app-notifications ></app-notifications>\n    </div>\n  </div>\n</div>\n<!-- ASK FOR SIGN UP -->\n<ng-template #askForSignUpModal let-modal >\n  <span class=\"modalClose\" (click)=\"modal.dismiss('Cross click')\"></span>\n  <div class=\"modal-body\" style=\"text-align:center\">\n    {{'LANDING.ASK_FOR_SIGNUP'|translate}}\n    <a href=\"javascript:\" (click)=\"goToHomePage()\">{{ 'LANDING.SIGNUP'| translate }}</a>\n  </div>\n</ng-template>\n<app-blocksmodal></app-blocksmodal>\n"

/***/ }),

/***/ "./src/app/profile/list/list.component.scss":
/*!**************************************************!*\
  !*** ./src/app/profile/list/list.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvbGlzdC9saXN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/profile/list/list.component.ts":
/*!************************************************!*\
  !*** ./src/app/profile/list/list.component.ts ***!
  \************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _global_blocksmodal_blocksmodal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../global/blocksmodal/blocksmodal.component */ "./src/app/global/blocksmodal/blocksmodal.component.ts");
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-owl-carousel */ "./node_modules/ngx-owl-carousel/index.js");
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_9__);

/*****************************************************
# Company Name          :
# Author                :
# Created Date          : 07-02-2019
# Module                : ListComponent
# Object name           : ListComponent
# Functionality         : get search user list
# Purpose               : constructor, ngOnInit, defineSearchResult, goToProfile, goToHomePage, getMutualFriend
*******************************************************/









var ListComponent = /** @class */ (function () {
    /* Function Name : constructor
      * Author :
      * Created Date : 07-02-2019
      * Modified Date : *
      * Purpose : to define the all helpful objects and define the languages data
      * PARAMS : route, activeRoute, userService, modalService, cService
      */
    function ListComponent(route, activeRoute, userService, modalService, cService, translate) {
        var _this = this;
        this.route = route;
        this.activeRoute = activeRoute;
        this.userService = userService;
        this.modalService = modalService;
        this.cService = cService;
        this.translate = translate;
        this.searchList = []; // get search user list
        this.paginationConfig = null; // pagination config
        this.totalRows = null;
        this.currentPage = 1; // set current
        this.currentUserData = null; // set current user data
        this.loggedInUser = null; // loggedin user data
        this.currentTime = null; // set current time
        this.keyword = ""; // search keyword
        this.scrollbarOptions = { axis: 'y', theme: 'minimal-dark' }; // set scroll config
        this.recentSearchCaro = { items: 3, dots: false, nav: true, responsive: { 0: { items: 1 }, 568: { items: 2 }, 768: { items: 3 }, 1024: { items: 2 }, 1138: { items: 3 } } }; // recent search slider config
        this.images = null; // get images
        this.activeListItemIndex = null;
        this.recentSearchList = [];
        this.cService.activelang.subscribe(function (lang) {
            // this language will be used as a fallback when a translation isn't found in the current language
            _this.translate.setDefaultLang(lang);
            // the lang to use, if the lang isn't available, it will use the current loader to get them
            _this.translate.use(lang);
        });
    }
    /* Function Name : ngOnInit
      * Author :
      * Created Date : 07-02-2019
      * Modified Date : *
      * Purpose : to get data after html load
      * PARAMS :
      */
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        localStorage.setItem('_sp', 'user');
        this.paginationConfig = {
            perPage: 10,
            render: function (page) {
                _this.currentPage = page;
                _this.cService.listData.subscribe(function (listData) {
                    if (listData) {
                        _this.defineSearchResult(listData);
                        _this.totalRows = listData.data.result.pager.rowCount;
                    }
                });
                _this.activeRoute.queryParams.subscribe(function (params) {
                    var pageName = localStorage.getItem('_sp');
                    var postData = {
                        "page_name": pageName,
                        "keyword": params["key"],
                        "page": _this.currentPage
                    };
                    _this.userService.searchUsers(postData).subscribe(function (responseData) {
                        _this.defineSearchResult(responseData);
                        _this.totalRows = responseData.data.result.pager.rowCount;
                    });
                });
            }
        };
        this.currentTime = (new Date()).getTime() / 1000;
        this.blockModal.closeBlock.subscribe(function (res) {
            var connectionStatus = _this.checkConnectionButtonStatus(_this.searchList[_this.activeListItemIndex]);
            if (res == 'unblock') {
                _this.searchList[_this.activeListItemIndex]['buttons']['unblock'] = false;
                _this.searchList[_this.activeListItemIndex]['buttons']['block'] = true;
                if (connectionStatus) {
                    _this.searchList[_this.activeListItemIndex]['buttons']['connection'] = true;
                }
                else {
                    _this.searchList[_this.activeListItemIndex]['buttons']['connection'] = false;
                }
            }
            else {
                _this.searchList[_this.activeListItemIndex]['buttons']['unblock'] = true;
                _this.searchList[_this.activeListItemIndex]['buttons']['block'] = false;
                if (connectionStatus) {
                    _this.searchList[_this.activeListItemIndex]['buttons']['connection'] = false;
                }
                else {
                    _this.searchList[_this.activeListItemIndex]['buttons']['connection'] = true;
                }
            }
        });
    };
    /* Function Name : defineSearchResult
      * Author :
      * Created Date : 07-02-2019
      * Modified Date : *
      * Purpose : to get search user result
      * PARAMS : listData
      */
    ListComponent.prototype.defineSearchResult = function (listData) {
        if (listData) {
            this.searchList = listData.data.result.list;
            if (listData.data.user) {
                this.loggedInUser = listData.data.user;
                this.getMutualFriend('search');
                this.listButtonDisplay();
            }
            this.recentSearchData();
        }
    };
    // recentSearchList() {
    //   let postData = {
    //     "page_name": 'user',
    //     "keyword": this.loggedInUser.last_search_keyword
    //   }
    //   this.userService.searchUsers(postData).subscribe((responseData:any)=>{
    //     this.defineSearchResult(responseData);
    //   })
    // }
    /* Function Name : goToProfile
    * Author :
    * Created Date : 07-02-2019
    * Modified Date : *
    * Purpose : to go to a user profile
    * PARAMS :  user
    */
    ListComponent.prototype.goToProfile = function (user) {
        if (localStorage.getItem("_user")) {
            this.route.navigate(['/', user.cpp]);
        }
        else {
            if (user.privacySettings) {
                var guestViewProfile = user.privacySettings.find(function (item) {
                    return item.options_id == 9;
                });
                if (guestViewProfile === undefined || guestViewProfile.show_status === 1) {
                    this.route.navigate(['/', user.cpp]);
                }
                else {
                    this.keyword = '';
                    this.modalService.open(this.askForSignUpModal, { size: 'sm', centered: true, windowClass: 'DefaultModal' });
                }
            }
        }
    };
    /* Function Name : goToHomePage
    * Author :
    * Created Date : 07-02-2019
    * Modified Date : *
    * Purpose : to go to home page
    * PARAMS :
    */
    ListComponent.prototype.goToHomePage = function () {
        this.modalService.dismissAll();
        this.route.navigate(['/']);
    };
    /* Function Name : getMutualFriend
    * Author :
    * Created Date : 07-02-2019
    * Modified Date : *
    * Purpose : to calculate the mutual connection
    * PARAMS :
    */
    ListComponent.prototype.getMutualFriend = function (type) {
        var _this = this;
        var userFriendIdList = [];
        var currentUserId = this.loggedInUser.id.toString();
        if (this.loggedInUser.friendsIds) {
            userFriendIdList = this.loggedInUser.friendsIds.friend_ids;
            userFriendIdList = userFriendIdList.split(",");
        }
        var listData = null;
        if (type == 'search') {
            listData = this.searchList;
        }
        else if (type == 'recent') {
            listData = this.recentSearchList;
        }
        if (listData.length > 0) {
            listData.forEach(function (item, index) {
                listData[index]['mutualFriendCount'] = 0;
                if (item &&
                    (localStorage.getItem('_user') && _this.loggedInUser.id != item.id) &&
                    (item.friendsIds && item.friendsIds.friend_ids)) {
                    var friendList_1 = item.friendsIds.friend_ids;
                    friendList_1 = friendList_1.split(",");
                    friendList_1.splice(friendList_1.indexOf(currentUserId), 1);
                    var mutualFriendList = userFriendIdList.filter(function (obj) { return friendList_1.indexOf(obj) > -1; });
                    listData[index]['mutualFriendCount'] = mutualFriendList.length;
                }
            });
        }
        if (type == 'search') {
            this.searchList = listData;
        }
        else if (type == 'recent') {
            this.recentSearchList = listData;
        }
    };
    ListComponent.prototype.checkConnectionButtonStatus = function (item) {
        var currentUserId = this.loggedInUser.id.toString();
        var connectionStatus = true;
        if (item.friendsIds) { // check connection button exist or not if item user is alreday in user connections
            var friendList = item.friendsIds.friend_ids;
            if (friendList) {
                friendList = friendList.split(",");
                if (friendList.indexOf(currentUserId) > -1) {
                    connectionStatus = false;
                }
            }
        }
        if (item.friendsPendingIds) { // check connection button exist or not loggedin user already sent request and it is in pending mode
            var friendList = item.friendsPendingIds.friend_ids;
            if (friendList) {
                friendList = friendList.split(",");
                if (friendList.indexOf(currentUserId) > -1) {
                    connectionStatus = false;
                }
            }
        }
        if (item.friendsRejectedIds) { // check connection button exist or not if item user already rejected the connection
            var friendList = item.friendsRejectedIds.friend_ids;
            if (friendList) {
                friendList = friendList.split(",");
                if (friendList.indexOf(currentUserId) > -1) {
                    connectionStatus = false;
                }
            }
        }
        if (item.blocksIds) { // check connection button exist or not if search item user block the loggedin user
            var blockList = item.blocksIds.blocks_ids;
            if (blockList) {
                blockList = blockList.split(",");
                if (blockList.indexOf(currentUserId) > -1) {
                    connectionStatus = false;
                }
            }
        }
        if (this.loggedInUser.friendsPendingIds) { // check connection button exist or not
            var friendList = this.loggedInUser.friendsPendingIds.friend_ids;
            if (friendList) {
                friendList = friendList.split(",");
                if (friendList.indexOf(item.id.toString()) > -1) {
                    connectionStatus = false;
                }
            }
        }
        return connectionStatus;
    };
    /* Function Name : listButtonDisplay
    * Author :
    * Created Date : 05-03-2019
    * Modified Date : *
    * Purpose : to display button of users
    * PARAMS :
    */
    ListComponent.prototype.listButtonDisplay = function () {
        var _this = this;
        var currentUserId = this.loggedInUser.id.toString();
        this.searchList.forEach(function (item, index) {
            _this.searchList[index]['buttons'] = {
                "block": false,
                "unblock": false,
                "connection": false,
                "acceptConnection": false
            };
            if (localStorage.getItem("_user")) {
                var connectionStatus = _this.checkConnectionButtonStatus(item);
                var blockStatus = true;
                var unblockStatus = false;
                if (_this.loggedInUser.blocksIds && _this.loggedInUser.blocksIds.blocks_ids) { // check block button exist or not
                    var blockList = _this.loggedInUser.blocksIds.blocks_ids.split(",");
                    if (blockList.indexOf(item.id.toString()) > -1) {
                        blockStatus = false;
                        unblockStatus = true;
                        connectionStatus = false;
                    }
                }
                if (_this.loggedInUser.id != item.id) {
                    _this.searchList[index]['buttons']['connection'] = connectionStatus;
                    _this.searchList[index]['buttons']['block'] = blockStatus;
                    _this.searchList[index]['buttons']['unblock'] = unblockStatus;
                }
            }
        });
        // console.log(this.searchList);
    };
    /* Function Name : recentSearchButtonDisplay
    * Author :
    * Created Date : 22-07-2019
    * Modified Date : *
    * Purpose : to display button of users
    * PARAMS :
    */
    ListComponent.prototype.recentSearchButtonDisplay = function () {
        var _this = this;
        var currentUserId = this.loggedInUser.id.toString();
        this.recentSearchList.forEach(function (item, index) {
            _this.recentSearchList[index]['buttons'] = {
                "block": false,
                "unblock": false,
                "connection": false,
                "acceptConnection": false
            };
            if (localStorage.getItem("_user")) {
                var connectionStatus = _this.checkConnectionButtonStatus(item);
                var blockStatus = true;
                var unblockStatus = false;
                if (_this.loggedInUser.blocksIds && _this.loggedInUser.blocksIds.blocks_ids) { // check block button exist or not
                    var blockList = _this.loggedInUser.blocksIds.blocks_ids.split(",");
                    if (blockList.indexOf(item.id.toString()) > -1) {
                        blockStatus = false;
                        unblockStatus = true;
                        connectionStatus = false;
                    }
                }
                if (_this.loggedInUser.id != (item.id)) {
                    _this.recentSearchList[index]['buttons']['connection'] = connectionStatus;
                    _this.recentSearchList[index]['buttons']['block'] = blockStatus;
                    _this.recentSearchList[index]['buttons']['unblock'] = unblockStatus;
                }
            }
        });
        // console.log(this.searchList);
    };
    /* Function Name : openBlock
  * Author :
  * Created Date : 05-03-2019
  * Modified Date : *
  * Purpose : to open block modal
  * PARAMS : userId, index
  */
    ListComponent.prototype.openBlock = function (userId, index) {
        this.activeListItemIndex = index;
        this.blockModal.openBlockReasonModal(userId);
    };
    /* Function Name : unblock
      * Author :
      * Created Date : 05-03-2019
      * Modified Date : *
      * Purpose : to unblock a user
      * PARAMS : userId, index
      */
    ListComponent.prototype.unblock = function (userId, index) {
        this.activeListItemIndex = index;
        this.blockModal.unblockUser(userId);
    };
    /* Function Name : connectionSend
  * Author :
  * Created Date : 05-03-2019
  * Modified Date : *
  * Purpose : to send connection request
  * PARAMS : toid, index, type
  */
    ListComponent.prototype.connectionSend = function (connectionItem, index, type) {
        var _this = this;
        this.userService.connectionRequestSend(connectionItem.id)
            .subscribe(function (responseData) {
            if (responseData.statustext == 'success') {
                _this.translate.get('COMMON.SUCCESS').subscribe(function (tData) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_9___default()({
                        title: tData,
                        text: responseData.message,
                        icon: 'success'
                    }).then(function () {
                        if (type == 'searchitem') {
                            _this.cService.emitNotification(connectionItem.cpp, 'CS');
                            _this.searchList[index]['buttons']['connection'] = false;
                        }
                        else if (type == 'recentsearch') {
                            _this.recentSearchData();
                        }
                    });
                });
            }
            else if (responseData.statustext == 'error') {
                _this.translate.get('COMMON.ERROR').subscribe(function (tData) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_9___default()({
                        title: tData,
                        text: responseData.message,
                        icon: 'error'
                    });
                });
            }
        });
    };
    ListComponent.prototype.recentSearchData = function () {
        var _this = this;
        this.recentSearchList = [];
        this.userService.getRecentSearchList()
            .subscribe(function (responseData) {
            if (responseData.statustext == 'success') {
                _this.recentSearchList = responseData.data;
                if (_this.loggedInUser) {
                    _this.getMutualFriend('recent');
                    _this.recentSearchButtonDisplay();
                }
                // console.log(this.recentSearchList);
                _this.recentCarousel.reInit();
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('askForSignUpModal'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ListComponent.prototype, "askForSignUpModal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_global_blocksmodal_blocksmodal_component__WEBPACK_IMPORTED_MODULE_6__["BlocksmodalComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _global_blocksmodal_blocksmodal_component__WEBPACK_IMPORTED_MODULE_6__["BlocksmodalComponent"])
    ], ListComponent.prototype, "blockModal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('recentCarousel'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_7__["OwlCarousel"])
    ], ListComponent.prototype, "recentCarousel", void 0);
    ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/profile/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.scss */ "./src/app/profile/list/list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_users_service__WEBPACK_IMPORTED_MODULE_4__["UsersService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"], _services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/profile/myblocklist/myblocklist.component.html":
/*!****************************************************************!*\
  !*** ./src/app/profile/myblocklist/myblocklist.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"searchWrap\">\n    <div class=\"row\">\n  \n      <div class=\"col-xl-9 col-lg-8\">\n        <h2 class=\"withLine\"><span>{{ 'BLOCKS.MYBLOCKS' |translate }}</span></h2>\n        <div class=\"row searchResult\">\n\n          <div class=\"col-xl-3 col-lg-4 col-md-4 col-6 searchCol\" *ngFor=\"let user of blockedUserList\" >\n            <div class=\"searchResultSingle\">\n              <span class=\"searchClose\" (click)=\"unblock(user.blockUser.id)\" ></span>\n              <div>\n              <div class=\"profileDescImg\" [class.inactive]=\"(currentTime - user.blockUser.last_active_time) > (5*60) \">\n              <img *ngIf=\"user.blockUser.profile_pic\" alt=\"\" [src]=\"user.blockUser.profile_pic| picturepath:'users'\">\n              <img  *ngIf=\"user.blockUser && !user.blockUser.profile_pic && user.blockUser.gender && user.blockUser.experience_level\" src=\"assets/images/charachter/{{ user.blockUser.gender+'_'+user.blockUser.experience_level }}.png\" alt=\"\">\n            </div>\n              <h2>{{ user.blockUser.first_name }}  {{ user.blockUser.last_name }}</h2>\n              <h3>{{ user.blockUser.title }}</h3>\n              \n              </div>\n              \n            \n           \n            </div>\n          </div>\n\n\n          <div class=\"col-xl-12 col-lg-12 col-md-12 col-12 searchCol\" *ngIf=\"blockedUserList.length == 0\">\n            <div class=\"searchResultSingle\">\n\n             {{\"PROFILEEDIT.NO_RECORD_FOUND\" | translate}}\n\n            </div>\n          </div>\n\n        </div>\n  \n       <ngx-pager  [config]=\"paginationConfig\"  [totalrow]='totalRows'></ngx-pager>\n  \n  \n      </div>\n  \n      <div class=\"col-xl-3 col-lg-4\">\n  \n        <app-notifications></app-notifications>\n      </div>\n    </div>\n  </div>\n  <app-blocksmodal></app-blocksmodal>"

/***/ }),

/***/ "./src/app/profile/myblocklist/myblocklist.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/profile/myblocklist/myblocklist.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvbXlibG9ja2xpc3QvbXlibG9ja2xpc3QuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/profile/myblocklist/myblocklist.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/profile/myblocklist/myblocklist.component.ts ***!
  \**************************************************************/
/*! exports provided: MyblocklistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyblocklistComponent", function() { return MyblocklistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _global_blocksmodal_blocksmodal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../global/blocksmodal/blocksmodal.component */ "./src/app/global/blocksmodal/blocksmodal.component.ts");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_6__);







var MyblocklistComponent = /** @class */ (function () {
    function MyblocklistComponent(uService, cService, translate) {
        this.uService = uService;
        this.cService = cService;
        this.translate = translate;
        this.paginationConfig = null; // pagination config
        this.currentPage = 1; // set current page
        this.currentTime = null; // set current time
        this.blockedUserList = []; // set blocked users list
        this.totalRows = 0;
        this.cService.activelang.subscribe(function (lang) {
            // this language will be used as a fallback when a translation isn't found in the current language
            translate.setDefaultLang(lang);
            // the lang to use, if the lang isn't available, it will use the current loader to get them
            translate.use(lang);
        });
    }
    MyblocklistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getBlockedUsers();
        this.paginationConfig = {
            perPage: 10,
            render: function (page) {
                _this.currentPage = page;
                _this.getBlockedUsers();
            }
        };
        this.blockModal.closeBlock.subscribe(function (res) {
            if (res) {
                _this.getBlockedUsers();
            }
        });
    };
    MyblocklistComponent.prototype.getBlockedUsers = function () {
        var _this = this;
        this.uService.blockedUserList(this.currentPage)
            .subscribe(function (responseData) {
            if (responseData.statustext == 'success') {
                _this.blockedUserList = responseData.data.list;
                _this.totalRows = responseData.data.paginate.rowCount;
            }
        });
    };
    /* Function Name : unblock
      * Author :
      * Created Date : 04-02-2019
      * Modified Date : *
      * Purpose : to unblock a user
      * PARAMS : userId
      */
    MyblocklistComponent.prototype.unblock = function (userId) {
        var _this = this;
        this.translate.get(['COMMON.ARE_YOU_SURE', 'BLOCKS.WANT_TO_UNBLOCK']).subscribe(function (tData) {
            sweetalert__WEBPACK_IMPORTED_MODULE_6___default()({
                title: tData['COMMON.ARE_YOU_SURE'],
                text: tData['BLOCKS.WANT_TO_UNBLOCK'],
                icon: "warning",
                buttons: {
                    cancel: true,
                    confirm: true,
                },
            }).then(function (willDelete) {
                if (willDelete) {
                    _this.blockModal.unblockUser(userId);
                    // this.blockModal.closeBlock.subscribe((res)=>{
                    //   	this.getBlockedUsers();
                    // });					
                }
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_global_blocksmodal_blocksmodal_component__WEBPACK_IMPORTED_MODULE_5__["BlocksmodalComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _global_blocksmodal_blocksmodal_component__WEBPACK_IMPORTED_MODULE_5__["BlocksmodalComponent"])
    ], MyblocklistComponent.prototype, "blockModal", void 0);
    MyblocklistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-myblocklist',
            template: __webpack_require__(/*! ./myblocklist.component.html */ "./src/app/profile/myblocklist/myblocklist.component.html"),
            styles: [__webpack_require__(/*! ./myblocklist.component.scss */ "./src/app/profile/myblocklist/myblocklist.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"],
            _services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]])
    ], MyblocklistComponent);
    return MyblocklistComponent;
}());



/***/ }),

/***/ "./src/app/profile/notifications/notifications.component.html":
/*!********************************************************************!*\
  !*** ./src/app/profile/notifications/notifications.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    <div class=\"leftNoti\" *ngIf=\"nonvisable.indexOf('notification') == -1\">\n     <div class=\"profileMainBox\">\n       <div class=\"rightTitle\">\n         <h2>{{ 'NOTIFICATIONS.NOTIFICATION'|translate }}</h2>\n         <a class=\"iconSettings\" [routerLink]=\"['/notification-settings']\"><i class=\"fa fa-cog\" aria-hidden=\"true\"></i></a>\n       </div>\n       <div class=\"defaultScroll\" malihu-scrollbar [scrollbarOptions]=\"scrollbarOptions\" >\n        <div *ngFor=\"let sender of senderDetails\">\n         <div class=\"boxSingle\" >\n           <div class=\"boxSingleImg\" *ngIf=\"!sender.testimonial || (sender.testimonial && sender.testimonial.is_anonymous != 1)\" [class.inactive]=\"(currentTime - sender?.sender.last_active_time) > (5*60) \">\n             <img *ngIf=\"sender?.sender.profile_pic\" [src]=\"(sender?.sender.profile_pic) | picturepath:'users'\" alt=\"\">\n             <img  class=\"no-pro-pic\" *ngIf=\"sender?.sender && !sender?.sender.profile_pic && sender?.sender.gender && sender?.sender.experience_level\" src=\"assets/images/charachter/{{ sender?.sender.gender+'_'+sender?.sender.experience_level }}.png\" alt=\"\">\n\n            </div>\n            <div class=\"boxSingleImg\" *ngIf=\"sender.testimonial && sender.testimonial.is_anonymous == 1\">\n                <img class=\"no-pro-pic\"  src=\"assets/images/testimonial_no_img.jpg\" alt=\"\">\n            </div>\n           <div class=\"timeNotific\">{{ (sender?.posted_on*1000) | amTimeAgo:true }} {{ 'NOTIFICATIONS.AGO' |translate }}</div>\n           <h2>\n             \n             <a *ngIf=\"sender.testimonial && sender.testimonial.is_anonymous == 1\" >\n                {{ 'TESTIMONIALS.ANONYMOUS'|translate }}\n             </a>\n             <a *ngIf=\"!sender.testimonial || (sender.testimonial && sender.testimonial.is_anonymous != 1)\" [routerLink]=\"['/', sender?.sender.cpp ]\">{{(sender?.sender.first_name+' '+sender?.sender.last_name)}}</a>\n             &nbsp;<span>{{ 'NOTIFICATIONS.'+sender?.type | translate }}</span></h2>\n           <div class=\"msgIcon\"><i class=\"fa fa-commenting\" aria-hidden=\"true\"></i></div>\n         </div>\n       \n         \n        </div>\n      </div>\n      <div class=\"no-record-msg text-center\" *ngIf=\"senderDetails && senderDetails.length == 0\">{{ 'NOTIFICATIONS.NO_MESSAGE' | translate }}</div>\n       <div class=\"moreItem\" *ngIf=\"paginations.notification && paginations.notification.rowCount && senderDetails.length > 0 && (paginations.notification.rowCount > senderDetails.length)\">\n         <a [routerLink]=\"['/notifications']\">+{{( paginations.notification.rowCount - senderDetails.length )}} {{ 'NOTIFICATIONS.SEE_MORE'|translate }}</a>\n       </div>\n     </div>\n    </div>\n\n    <div class=\"leftNoti forConnection\">\n     <div class=\"profileMainBox\">\n       <div class=\"rightTitle\">\n         <h2>{{ 'NOTIFICATIONS.CONNECTIONS'|translate }}</h2>\n         <a class=\"iconSettings\" [routerLink]=\"['/blocks']\"><i class=\"fa fa-cog\" aria-hidden=\"true\"></i></a>\n         <!-- <span class=\"btnConnection\"></span> -->\n       </div>\n       <div class=\"connection-message-container\">\n        <div class=\"msg-succ\" *ngIf=\"connectionMsg.success\">{{ connectionMsg.success }}</div>\n        <div class=\"msg-err\" *ngIf=\"connectionMsg.error\">{{ connectionMsg.error }}</div>\n       </div>\n       <div class=\"defaultScroll\" malihu-scrollbar [scrollbarOptions]=\"scrollbarOptions\">\n         <div class=\"boxSingle\"   *ngFor=\"let connection of notifyConnectionList\"  >\n           <div class=\"boxSingleImg\" [class.inactive]=\"((currentTime - connection.last_active_time) > (5*60)) && !connection.chatRequest \">\n             <img *ngIf=\"connection.profile_pic\" [src]=\"(connection?.profile_pic)| picturepath:'users'\" alt=\"\">\n\n             <img  *ngIf=\"connection && !connection.profile_pic && connection.gender && connection.experience_level\" src=\"assets/images/charachter/{{ connection.gender+'_'+connection.experience_level }}.png\" alt=\"\">\n            </div>\n             <h2><a [routerLink]=\"['/', connection.cpp ]\">{{(connection.first_name+' '+connection.last_name)}} </a>\n              <em *ngIf=\"connection.unreadMsgCount\">({{ connection.unreadMsgCount }})</em>\n           <span *ngIf=\"connection.position\">{{ connection.position.details[0].name  }}</span>\n              \n          </h2>\n           <div class=\"lastChat\" >{{ 'NOTIFICATIONS.LAST_CHAT' |translate }} <br> {{ (connection.lastChatTime) | amTimeAgo:true }} {{ 'NOTIFICATIONS.AGO' |translate }} <br/>\n            \n            <button *ngIf=\"!connection.is_friend\" (click)=\"connectionSend('connection',connection)\"  class=\"btn btn-sm btn-connection pull-right\">{{ 'PROFILE.CONTACT' | translate }}</button>\n            <button *ngIf=\"connection.is_friend\" (click)=\"setChatPerson(connection)\" class=\"btn btn-sm btn-connection pull-right\">{{ 'COMMON.MESSAGE' | translate }}</button>\n          </div>\n         </div>\n        </div>\n        <div class=\"no-record-msg text-center\" *ngIf=\"notifyConnectionList && notifyConnectionList.length == 0\">{{ 'COMMON.NO_CONNECTION' | translate }}</div>\n\n     </div>\n     \n    </div>\n\n    <div class=\"leftNoti knownPeople forConnection\">\n     <div class=\"profileMainBox\">\n       <div class=\"rightTitle\">\n         <h2>{{ 'NOTIFICATIONS.PEOPLE_MAY_KNOW'|translate }}</h2>\n         <span class=\"iconSettings\" (click)=\"openContactModal()\"><i class=\"fa fa-cog\" aria-hidden=\"true\"></i></span>\n       </div>\n       <div class=\"connection-message-container\">\n          <div class=\"msg-succ\" *ngIf=\"mayConnectionMsg.success\">{{ mayConnectionMsg.success }}</div>\n          <div class=\"msg-err\" *ngIf=\"mayConnectionMsg.error\">{{ mayConnectionMsg.error }}</div>\n       </div>\n       <div class=\"defaultScroll\" malihu-scrollbar [scrollbarOptions]=\"scrollbarOptions\">\n          <p class=\"text-center\" *ngIf=\"loader.mayconnect\"><i class=\"fa fa-cog fa-spin\"></i></p>\n          <div *ngFor=\"let may of mayList\">\n             <div class=\"boxSingle\">\n               <div class=\"boxSingleImg\" [class.inactive]=\"((currentTime - may?.last_active_time) > (5*60))\">\n                <img *ngIf=\"may.profile_pic\" [src]=\"(may?.profile_pic)| picturepath:'users'\" alt=\"\">\n                <img  *ngIf=\"!may.profile_pic && may.gender && may.experience_level\" src=\"assets/images/charachter/{{ may.gender+'_'+may.experience_level }}.png\" alt=\"\">\n\n              </div>\n               <h2><a [routerLink]=\"['/', may.cpp ]\">{{(may.first_name+' '+may.last_name)}}</a>&nbsp; <span>{{(may.position_local_name)}}</span></h2>\n               <a class=\"contactPeople\" href=\"javascript:\" (click)=\"connectionSend('may-connection',may)\">Contact</a>\n               <!-- <div class=\"knownClose\"><i class=\"fa fa-times-circle\" aria-hidden=\"true\"></i></div> -->\n             </div>\n          </div>\n          \n\n     </div>\n     <div class=\"no-record-msg text-center\" *ngIf=\"mayList.length == 0\">{{ 'COMMON.NO_CONNECTION' | translate }}</div>\n     <!-- <div class=\"moreItem\" *ngIf=\"paginations.mayContact && paginations.mayContact.rowCount && (paginations.mayContact.rowCount > mayList.length)\">\n      <a href=\"#\">+{{( paginations.mayContact.rowCount - mayList.length )}} {{ 'NOTIFICATIONS.SEE_MORE'|translate }}</a>\n     </div> -->\n    </div>\n\n    <!-- open contact modal --> \n  <ng-template #connectModal let-modal>\n    <h2><span>{{ 'NOTIFICATIONS.PEOPLE_YOU_MAY_CONNECT_SETTINGS'|translate }}:</span></h2>\n    <span class=\"modalClose\" (click)=\"modal.dismiss('Cross click')\"></span>\n    <div class=\"modal-body\">\n    <div>\n\n      <div class=\"alert alert-danger\" *ngIf=\"errorMsg\">{{ 'NOTIFICATIONS.ERROR'|translate }}</div>\n    </div>\n      <div class=\"proEdit\">\n        <div class=\"formWrap\">\n           <label class=\"col-xl-3 noGap\" for=\"\">{{ 'NOTIFICATIONS.POSITION'|translate }} :</label>\n           <span class=\"formSpan col-xl-9\">\n             <ng-select class=\"inpField fullWidth\" [hideSelected]=\"true\" [items]=\"positions\" [(ngModel)]=\"connectForm.positions\" bindLabel=\"name\"\n             bindValue=\"id\" [multiple]=\"true\"></ng-select>\n           </span>\n        </div>\n        <div class=\"formWrap\">\n           <label class=\"col-xl-3 noGap\" for=\"\">{{ 'NOTIFICATIONS.DEGREE'|translate }} :</label>\n           <span class=\"formSpan col-xl-9\">\n             <ng-select class=\"inpField fullWidth\" [hideSelected]=\"true\" [items]=\"degrees\" [(ngModel)]=\"connectForm.degree\" bindLabel=\"name\" bindValue=\"id\" [multiple]=\"true\"></ng-select>\n           </span>\n        </div>\n        <div class=\"formWrap\">\n          <label class=\"col-xl-3 noGap\" for=\"\">{{ 'NOTIFICATIONS.COUNTRY'|translate }}</label>\n          <span class=\"formSpan col-xl-9\">\n            <ng-select class=\"inpField fullWidth\" [hideSelected]=\"true\" [items]=\"countries\" [(ngModel)]=\"connectForm.country\" bindLabel=\"name\" bindValue=\"id\" (change)=\"getCityList()\"></ng-select>\n          </span>\n        </div>\n        <div class=\"formWrap\">\n            <label class=\"col-xl-3 noGap\" for=\"\">{{ 'NOTIFICATIONS.CITY'|translate }}</label>\n            <span class=\"formSpan col-xl-9\">\n            <ng-select class=\"inpField fullWidth\" [hideSelected]=\"true\" [items]=\"cityList\" [(ngModel)]=\"connectForm.city\" bindLabel=\"name\" bindValue=\"id\" [multiple]=\"true\"></ng-select>\n          </span>\n        </div>\n        <div class=\"buttonGr\">\n          <div class=\"text-center\">\n            <button type=\"button\" class=\"btnOrange\" name=\"button\" (click)=\"saveConnectFrom()\">{{ 'NOTIFICATIONS.SUBMIT'|translate }}</button>\n          </div>\n        </div>\n      </div>\n   \n    </div>\n  </ng-template>\n\n  <!-- <app-chat [config]=\"chatConfig\"></app-chat> -->"

/***/ }),

/***/ "./src/app/profile/notifications/notifications.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/profile/notifications/notifications.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvbm90aWZpY2F0aW9ucy9ub3RpZmljYXRpb25zLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/profile/notifications/notifications.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/profile/notifications/notifications.component.ts ***!
  \******************************************************************/
/*! exports provided: NotificationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsComponent", function() { return NotificationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _global_chat_chat_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../global/chat/chat.service */ "./src/app/global/chat/chat.service.ts");
/* harmony import */ var _globalConfig__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../globalConfig */ "./src/app/globalConfig.ts");
/* harmony import */ var _global_picturepath_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../global/picturepath.pipe */ "./src/app/global/picturepath.pipe.ts");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! crypto-js */ "./node_modules/crypto-js/index.js");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_9__);
/*****************************************************
# Company Name          :
# Author                :
# Created Date          : 10-02-2019
# Module                : NotificationsComponent
# Object name           : NotificationsComponent
# Functionality         : All notification
# Purpose               : constructor, ngOnInit, changeNotification, getNotification, openContactModal, getCityList, saveConnectFrom, mayContactList, contectList, connectionSend
*******************************************************/










var NotificationsComponent = /** @class */ (function () {
    /* Function Name : constructor
      * Author :
      * Created Date : 10-02-2019
      * Modified Date : *
      * Purpose : to define the all helpful objects and define the languages data
      * PARAMS : cService, translate, modalService,userSerivce
      */
    function NotificationsComponent(cService, translate, modalService, userSerivce, chatService, picPathPipe) {
        var _this = this;
        this.cService = cService;
        this.translate = translate;
        this.modalService = modalService;
        this.userSerivce = userSerivce;
        this.chatService = chatService;
        this.picPathPipe = picPathPipe;
        this.nonvisable = ''; // set the nonvisable item (EX: 'notification, connection, may-connect')
        this.chatwithUserCpp = '';
        this.notificationCount = null; // notification count
        this.senderDetails = null; // sender details
        this.imagePath = null; // set image path
        this.connectDetails = []; // get contact details
        this.positions = []; // set positions
        this.degrees = []; // set degrees
        this.countries = []; // set countries
        this.cityList = []; // set city list
        this.mayList = []; // set may setting list
        this.notifyConnectionList = []; // get connections list
        this.settings = null; // set settings
        this.currentTime = null; // set current time
        this.paginations = {
            notification: null,
            mayContact: null,
        };
        this.scrollbarOptions = { axis: 'y', theme: 'minimal-dark' }; // set scrollbar options
        // PERSONAL CONFIG //
        this.connectForm = {
            "positions": null,
            "degree": null,
            "country": null,
            "city": null,
            "error": 0,
            "submit": false
        };
        this.successMsg = ''; // set success message
        this.errorMsg = ''; // set error message
        this.connectionMsg = {
            success: '',
            error: ''
        };
        this.mayConnectionMsg = {
            success: '',
            error: ''
        };
        this.loader = {
            'mayconnect': false
        };
        this.chatConfig = null;
        this.loggedUser = null;
        var user = localStorage.getItem("_user");
        user = crypto_js__WEBPACK_IMPORTED_MODULE_9__["AES"].decrypt(user, 'careery');
        this.loggedUser = JSON.parse(user.toString(crypto_js__WEBPACK_IMPORTED_MODULE_9__["enc"].Utf8));
        this.cService.activelang.subscribe(function (lang) {
            // this language will be used as a fallback when a translation isn't found in the current language
            translate.setDefaultLang(lang);
            // the lang to use, if the lang isn't available, it will use the current loader to get them
            translate.use(lang);
        });
        this.cService.chatConnection.subscribe(function (connection) {
            if (connection) {
                _this.setChatPerson(connection);
            }
        });
        var loggedUser = this.loggedUser;
        this.chatService.getInvitation.subscribe(function (invitation) {
            if (invitation) {
                var room_1 = invitation.room;
                var inviteRow = _this.notifyConnectionList.findIndex(function (item) {
                    return item.room == room_1;
                });
                if (inviteRow != -1) {
                    if (loggedUser._i != invitation.sendBy.id) {
                        _this.chatService.addUserToRoom({
                            "id": loggedUser._i
                        }, room_1, true);
                    }
                    _this.notifyConnectionList[inviteRow].chatRequest = true;
                }
            }
        });
        this.cService.addUserToRoom(loggedUser._cpp);
        if (this.nonvisable.indexOf('notification') == -1) {
            this.cService.notificationEmit.subscribe(function (emitData) {
                var notifytype = ['T', 'PS', 'DCV', 'DCA', 'R', 'CS', 'CA', 'CD', 'MCB'];
                if (emitData && notifytype.indexOf(emitData.type) > -1) {
                    _this.getNotification();
                }
            });
        }
    }
    /* Function Name : ngOnInit
      * Author :
      * Created Date : 10-02-2019
      * Modified Date : *
      * Purpose : to get data after html load
      * PARAMS :
      */
    NotificationsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.imagePath = _globalConfig__WEBPACK_IMPORTED_MODULE_7__["s3URL"] + "userspic/";
        this.currentTime = (new Date()).getTime() / 1000;
        // this.changeNotification();
        if (this.nonvisable.indexOf('notification') == -1) {
            this.getNotification();
        }
        this.mayContactList();
        this.connectionList();
        this.cService.sendBirthdayNotifications()
            .subscribe(function (responseData) { });
        this.cService.mayContactSettings().subscribe(function (response) {
            if ((response['statustext'] === 'success')) {
                _this.positions = response.data.positions;
                _this.degrees = response.data.degree;
                _this.countries = response.data.country;
                //console.log(this.degrees);
            }
        });
    };
    /* Function Name : changeNotification
    * Author :
    * Created Date : 19-02-2019
    * Modified Date : *
    * Purpose : to refesh api after 5 seconds
    * PARAMS :
    */
    NotificationsComponent.prototype.changeNotification = function () {
        // setInterval(() => {
        //   this.getNotification();
        //   this.connectionList();
        //   this.mayContactList();
        //   // call functions
        // }, 1 * 60 * 1000); // every 1 min
    };
    /* Function Name : getNotification
    * Author :
    * Created Date : 19-02-2019
    * Modified Date : *
    * Purpose :
    * PARAMS :
    */
    NotificationsComponent.prototype.getNotification = function () {
        var _this = this;
        var formPostData = {
            "type": "T,TR,PS,DCV,DCA,R,CS,CA,CD,MCB",
            "page": 1
        };
        this.cService.notificationsSubmit(formPostData).subscribe(function (response) {
            if ((response['statustext'] === 'success')) {
                //console.log(response);
                _this.notificationCount = response.data.list.length;
                _this.senderDetails = response.data.list;
                _this.paginations.notification = response.data.pagination;
            }
        });
    };
    /* Function Name : openContactModal
    * Author :
    * Created Date : 28-02-2019
    * Modified Date : *
    * Purpose : to open connect modal
    * PARAMS : connectModal
    */
    NotificationsComponent.prototype.openContactModal = function () {
        this.mayContactList();
        this.modalService.open(this.connectModal, { size: 'lg', centered: true, windowClass: 'DefaultModal' });
    };
    /* Function Name : getCityList
    * Author :
    * Created Date : 28-02-2019
    * Modified Date : *
    * Purpose : to get city list
    * PARAMS :
    */
    NotificationsComponent.prototype.getCityList = function () {
        var _this = this;
        this.cityList = [];
        this.connectForm.city = null;
        var countryId = this.connectForm.country;
        if (countryId) {
            this.cService.getCityList(countryId)
                .subscribe(function (responseData) {
                if (responseData.statustext === 'success') {
                    _this.cityList = responseData.data;
                }
            });
        }
    };
    /* Function Name : saveConnectFrom
    * Author :
    * Created Date : 28-02-2019
    * Modified Date : *
    * Purpose : to save connect form
    * PARAMS :
    */
    NotificationsComponent.prototype.saveConnectFrom = function () {
        var _this = this;
        this.connectForm.submit = true;
        var formPostData = this.connectForm;
        if (this.connectForm.positions == null &&
            this.connectForm.degree == null &&
            this.connectForm.country == null &&
            this.connectForm.city == null) {
            this.connectForm.error = 1;
            this.errorMsg = 'NOTIFICATIONS.ERROR';
            setTimeout(function () {
                _this.errorMsg = '';
            }, 5000);
        }
        else {
            this.connectForm.error = 0;
        }
        //console.log(formPostData); return false;
        //saveContactSettings
        if (this.connectForm.error == 0) {
            this.cService.addContactSettings(formPostData).subscribe(function (response) {
                if (response.statustext === 'success') {
                    _this.successMsg = response.message;
                    _this.modalService.dismissAll();
                    setTimeout(function () {
                        _this.successMsg = '';
                    }, 5000);
                }
            });
        }
    };
    /* Function Name : mayContactList
    * Author :
    * Created Date : 28-02-2019
    * Modified Date : *
    * Purpose : to get may  contact list
    * PARAMS :
    */
    NotificationsComponent.prototype.mayContactList = function () {
        var _this = this;
        var formPostData = {
            "page": 1
        };
        this.cService.mayContactList(formPostData).subscribe(function (responseData) {
            if (responseData.statustext === 'success') {
                _this.mayList = responseData.data.list;
                _this.imagePath = _globalConfig__WEBPACK_IMPORTED_MODULE_7__["s3URL"] + 'userspic/';
                // this.paginations.mayContact = responseData.data.pager;
                _this.settings = responseData.data.settings;
                if (responseData.data.settings && responseData.data.settings.positions_ids) {
                    var setectPositionList = responseData.data.settings.positions_ids.split(',').map(function (item) {
                        return parseInt(item);
                    });
                    _this.connectForm.positions = setectPositionList;
                }
                if (responseData.data.settings && responseData.data.settings.degree_ids) {
                    var setectDegreeList = responseData.data.settings.degree_ids.split(',').map(function (item) {
                        return parseInt(item);
                    });
                    _this.connectForm.degree = setectDegreeList;
                }
                if (responseData.data.settings && responseData.data.settings.country_ids) {
                    _this.connectForm.country = responseData.data.settings.country_ids;
                    _this.getCityList();
                }
                if (responseData.data.settings && responseData.data.settings.city_ids) {
                    var setectCityList = responseData.data.settings.city_ids.split(',').map(function (item) {
                        return parseInt(item);
                    });
                    _this.connectForm.city = setectCityList;
                }
            }
        });
    };
    /* Function Name : connectionList
    * Author :
    * Created Date : 04-03-2019
    * Modified Date : *
    * Purpose : to get user current contact list
    * PARAMS :
    */
    NotificationsComponent.prototype.connectionList = function () {
        var _this = this;
        this.cService.userNotifyConnectionList({
            userCpp: this.loggedUser._cpp
        })
            .subscribe(function (responseData) {
            // console.log(responseData);
            if (responseData.statustext == 'success') {
                var msgCountArr_1 = responseData.data.msgCount;
                var msgLastChatArr_1 = responseData.data.lastChatTimeList;
                _this.notifyConnectionList = responseData.data.list.map(function (item) {
                    var rowData = item;
                    rowData['room'] = _this.cService.getRoomData(_this.loggedUser, item);
                    var sendMsgUser = msgCountArr_1.find(function (itemMsg) {
                        return itemMsg.send_user_id == item.id;
                    });
                    if (sendMsgUser) {
                        rowData["unreadMsgCount"] = sendMsgUser.msg_count;
                    }
                    var lastMsgUserTime = msgLastChatArr_1.find(function (itemMsg) {
                        return rowData['room'] == itemMsg.room;
                    });
                    if (lastMsgUserTime) {
                        rowData["lastChatTime"] = lastMsgUserTime.last_chat_time;
                    }
                    if (item.friendsIds && item.friendsIds.friend_ids) {
                        var friends = item.friendsIds.friend_ids.split(',');
                        if (friends.indexOf(_this.loggedUser._i.toString()) > -1) {
                            rowData['is_friend'] = 1;
                        }
                    }
                    return rowData;
                });
            }
        });
    };
    /* Function Name : connectionSend
    * Author :
    * Created Date : 05-03-2019
    * Modified Date : *
    * Purpose : to send connection request
    * PARAMS :
    */
    NotificationsComponent.prototype.connectionSend = function (type, connectionItem) {
        var _this = this;
        this.loader.mayContact = true;
        this.userSerivce.connectionRequestSend(connectionItem.id)
            .subscribe(function (responseData) {
            _this.loader.mayContact = false;
            if (type == 'connection') {
                if (responseData.statustext == 'success') {
                    _this.cService.emitNotification(connectionItem.cpp, 'CS');
                    _this.connectionMsg.success = responseData.message;
                }
                else {
                    _this.connectionMsg.error = responseData.message;
                }
            }
            else {
                if (responseData.statustext == 'success') {
                    "this.cService.emitNotification(connectionItem.cpp, 'CS');";
                    _this.mayConnectionMsg.success = responseData.message;
                }
                else {
                    _this.mayConnectionMsg.error = responseData.message;
                }
            }
            setTimeout(function () {
                _this.connectionMsg.success = '';
                _this.connectionMsg.error = '';
                _this.mayConnectionMsg.success = '';
                _this.mayConnectionMsg.error = '';
            }, 5000);
        });
    };
    /* Function Name : setChatPerson
    * Author :
    * Created Date : 24-04-2019
    * Modified Date : *
    * Purpose : to set the current chat config
    * PARAMS :
    */
    NotificationsComponent.prototype.setChatPerson = function (connection) {
        var room = this.cService.getRoomData(this.loggedUser, connection);
        this.cService.setChatRoomEmit(room);
        // this.chatConfig = {
        //   request: connection.chatRequest,
        //   room: this.getRoomData(connection),
        //   user: {
        // id: this.loggedUser._i,
        // cpp: this.loggedUser._cpp
        //   },
        //   chatwith: {
        //     id: connection.id,
        //     name: connection.first_name + ' ' + connection.last_name,
        // picture: (connection.profile_pic) ? this.picPathPipe.transform(connection.profile_pic, 'users') : null,
        // cpp: connection.cpp
        //   }
        // };
        // if (this.notifyConnectionList) {
        //   let connectionIndex = this.notifyConnectionList.findIndex((item) => {
        //     return item == connection;
        //   });
        //   if (this.notifyConnectionList[connectionIndex]) {
        //     delete this.notifyConnectionList[connectionIndex]["unreadMsgCount"];
        //   }
        // }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NotificationsComponent.prototype, "nonvisable", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('connectModal'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NotificationsComponent.prototype, "connectModal", void 0);
    NotificationsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-notifications',
            template: __webpack_require__(/*! ./notifications.component.html */ "./src/app/profile/notifications/notifications.component.html"),
            providers: [_global_picturepath_pipe__WEBPACK_IMPORTED_MODULE_8__["PicturepathPipe"]],
            styles: [__webpack_require__(/*! ./notifications.component.scss */ "./src/app/profile/notifications/notifications.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"],
            _services_users_service__WEBPACK_IMPORTED_MODULE_5__["UsersService"],
            _global_chat_chat_service__WEBPACK_IMPORTED_MODULE_6__["ChatService"],
            _global_picturepath_pipe__WEBPACK_IMPORTED_MODULE_8__["PicturepathPipe"]])
    ], NotificationsComponent);
    return NotificationsComponent;
}());



/***/ }),

/***/ "./src/app/profile/notificationsettings/notificationsettings.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/profile/notificationsettings/notificationsettings.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"proEdit privacyWrap\">\n  <h2 class=\"withLine\"><span>{{ 'SETTINGS.NOTIFICATION_SETTINGS' | translate }}</span></h2>\n  <div class=\"alert alert-success text-center\" *ngIf=\"settingsSuccessMessage\">{{ settingsSuccessMessage }}</div>\n  <div class=\"alert alert-danger text-center\" *ngIf=\"settingsErrMessage\">{{ settingsErrMessage }}</div>\n\n\n  <form [formGroup]=\"settingsForm\" novalidate (submit)=\"saveNotificationSettings()\">\n      <div >\n          <div  class=\"formWrap inlineAll\">\n              <label class=\"col-md-3\" for=\"\">{{ 'SETTINGS.VIEWING_PROFILE' | translate }}</label>\n              <label class=\"switch\" >\n                <input type=\"checkbox\" formControlName=\"viewing_profile\"   [value]=\"1\">\n                <span class=\"slider\"></span>\n              </label>\n          </div>\n          <div  class=\"formWrap inlineAll\">\n              <label class=\"col-md-3\" for=\"\">{{ 'SETTINGS.TESTIMONIAL' | translate }}</label>\n              <label class=\"switch\" >\n                <input type=\"checkbox\" formControlName=\"testimonial\"  [value]=\"1\">\n                <span class=\"slider\"></span>\n              </label>\n          </div>\n          <div  class=\"formWrap inlineAll\">\n              <label class=\"col-md-3\" for=\"\">{{ 'SETTINGS.SEND_REQUEST' | translate }}</label>\n              <label class=\"switch\" >\n                <input type=\"checkbox\" formControlName=\"send_request\"  [value]=\"1\">\n                <span class=\"slider\"></span>\n              </label>\n          </div>\n          <div  class=\"formWrap inlineAll\">\n              <label class=\"col-md-3\" for=\"\">{{ 'SETTINGS.ACCEPT_REQUEST' | translate }}</label>\n              <label class=\"switch\" >\n                <input type=\"checkbox\" formControlName=\"accept_request\"  [value]=\"1\">\n                <span class=\"slider\"></span>\n              </label>\n          </div>\n          <div  class=\"formWrap inlineAll\">\n              <label class=\"col-md-3\" for=\"\">{{ 'SETTINGS.MY_CONNECTION_BIRTHDAY_DAY' | translate }}</label>\n              <label class=\"switch\" >\n                <input type=\"checkbox\" formControlName=\"my_connection_birth_day\"  [value]=\"1\">\n                <span class=\"slider\"></span>\n              </label>\n          </div>\n\n      </div>\n    <div class=\"buttonGr\">\n      <div class=\"text-right\">\n        <button class=\"btnGreen\" name=\"button\" type=\"submit\">{{ 'PROFILE.SAVE_BUTTON' | translate }}</button>\n      </div>\n    </div>\n  </form>\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/profile/notificationsettings/notificationsettings.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/profile/notificationsettings/notificationsettings.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvbm90aWZpY2F0aW9uc2V0dGluZ3Mvbm90aWZpY2F0aW9uc2V0dGluZ3MuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/profile/notificationsettings/notificationsettings.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/profile/notificationsettings/notificationsettings.component.ts ***!
  \********************************************************************************/
/*! exports provided: NotificationsettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsettingsComponent", function() { return NotificationsettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _globalConfig__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../globalConfig */ "./src/app/globalConfig.ts");

/*****************************************************
# Company Name          :
# Author                :
# Created Date          : 12-06-2019
# Module                : NotificationsettingsComponent
# Object name           : NotificationsettingsComponent
# Functionality         : for notification settings
# Purpose               : constructor, ngOnInit, saveNotificationSettings
*******************************************************/






var NotificationsettingsComponent = /** @class */ (function () {
    /* Function Name : constructor
    * Author :
    * Created Date : 12-06-2019
    * Modified Date : *
    * Purpose : to define the all helpful objects and defin the languages data
    * PARAMS :
    */
    function NotificationsettingsComponent(translate, uService, cService, formBuilder) {
        this.uService = uService;
        this.cService = cService;
        this.formBuilder = formBuilder;
        this.settingsSuccessMessage = '';
        this.settingsErrMessage = '';
        this.cService.activelang.subscribe(function (lang) {
            // this language will be used as a fallback when a translation isn't found in the current language
            translate.setDefaultLang(lang);
            // the lang to use, if the lang isn't available, it will use the current loader to get them
            translate.use(lang);
        });
    }
    /* Function Name : ngOnInit
      * Author :
      * Created Date : 12-06-2019
      * Modified Date : *
      * Purpose : to get data after html load
      * PARAMS :
      */
    NotificationsettingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.settingsForm = this.formBuilder.group({
            "viewing_profile": new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            "testimonial": new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            "send_request": new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            "accept_request": new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            "my_connection_birth_day": new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
        this.uService.getNotificationSettingsData()
            .subscribe(function (responseData) {
            if (responseData.statustext == 'success') {
                if (responseData.data.viewing_profile == '1') {
                    _this.settingsForm.controls['viewing_profile'].setValue(responseData.data.viewing_profile);
                }
                if (responseData.data.testimonial == '1') {
                    _this.settingsForm.controls['testimonial'].setValue(responseData.data.testimonial);
                }
                if (responseData.data.send_request == '1') {
                    _this.settingsForm.controls['send_request'].setValue(responseData.data.send_request);
                }
                if (responseData.data.accept_request == '1') {
                    _this.settingsForm.controls['accept_request'].setValue(responseData.data.accept_request);
                }
                if (responseData.data.my_connection_birth_day == '1') {
                    _this.settingsForm.controls['my_connection_birth_day'].setValue(responseData.data.my_connection_birth_day);
                }
            }
        });
    };
    /* Function Name : saveNotificationSettings
      * Author :
      * Created Date : 12-06-2019
      * Modified Date : *
      * Purpose : to save notification settings of a user
      * PARAMS :
      */
    NotificationsettingsComponent.prototype.saveNotificationSettings = function () {
        var _this = this;
        this.settingsErrMessage = '';
        this.settingsSuccessMessage = '';
        this.uService.saveNotificationSettingsData(this.settingsForm.value)
            .subscribe(function (responseData) {
            if (responseData.statustext == 'success') {
                _this.settingsSuccessMessage = responseData.message;
            }
            else if (responseData.statustext == 'error') {
                _this.settingsErrMessage = responseData.message;
            }
            _globalConfig__WEBPACK_IMPORTED_MODULE_6__["SCROLL_TO_TOP"]();
            setTimeout(function () {
                _this.settingsErrMessage = '';
                _this.settingsSuccessMessage = '';
            }, 5000);
        });
    };
    NotificationsettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-notificationsettings',
            template: __webpack_require__(/*! ./notificationsettings.component.html */ "./src/app/profile/notificationsettings/notificationsettings.component.html"),
            styles: [__webpack_require__(/*! ./notificationsettings.component.scss */ "./src/app/profile/notificationsettings/notificationsettings.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            _services_users_service__WEBPACK_IMPORTED_MODULE_4__["UsersService"],
            _services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], NotificationsettingsComponent);
    return NotificationsettingsComponent;
}());



/***/ }),

/***/ "./src/app/profile/privacysettings/privacysettings.component.html":
/*!************************************************************************!*\
  !*** ./src/app/profile/privacysettings/privacysettings.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"proEdit privacyWrap\">\n  <h2 class=\"withLine\"><span>{{ 'SETTINGS.SETTINGS' | translate }}</span></h2>\n  <div class=\"alert alert-success text-center\" *ngIf=\"successMessage\">{{ successMessage }}</div>\n  <div class=\"alert alert-danger text-center\" *ngIf=\"errMessage\">{{ errMessage }}</div>\n  <ngb-tabset>\n\n    <ngb-tab>\n      <ng-template ngbTabTitle><i class=\"fa fa-info\" aria-hidden=\"true\"></i> {{ 'SETTINGS.PRIVACY' |\n            translate }}</ng-template>\n      <ng-template ngbTabContent>\n        \n        <form [formGroup]=\"privacyForm\" novalidate (submit)=\"savePrivacySettings()\">\n          <div formArrayName=\"permissions\"\n            *ngFor=\"let item of privacyForm.get('permissions')['controls']; let i = index;\">\n            <div [formGroupName]=\"i\" class=\"formWrap inlineAll\">\n              <label class=\"col-md-3\" for=\"\">{{ privacySettingsContent.options[i].name }}</label>\n              <input type=\"hidden\" formControlName=\"option_id\" placeholder=\"Option\">\n              <select class=\"col-md-9 inpField withSpace\" *ngIf=\"item.controls.settings_id\"\n                formControlName=\"settings_id\">\n                <option *ngFor=\"let setting of privacySettingsContent.settings\" [value]=\"setting.id\">\n                  {{setting.name}}\n                </option>\n              </select>\n              <div class=\"specific-connections\"\n                *ngIf=\"item.controls.specific_users && item.controls.settings_id && item.controls.settings_id.value==4\">\n                <div class=\"specific-add-container\">\n                  <span class=\"addBtn withSpace\" id=\"addDrop\" (click)=\"openAddBox(i)\">\n                    <i class=\"fa fa-plus\" aria-hidden=\"true\"></i> ADD\n                  </span>\n\n                  <div *ngIf=\"specificAddBox == i\" class=\"search-connections-privacy\">\n                    <input type=\"text\" name=\"\" [value]=\"specificAddInputValue\" (keyup)=\"searchConnection(i, $event)\">\n                    <ul>\n                      <li *ngFor=\"let connection of connectionList\">\n                        <span class=\"conImg\"><img alt=\"\" src=\"assets/images/proimg9.jpg\"></span>\n                        <span class=\"conName\">{{ connection.friend_full_name }}</span>\n                        <span class=\"toAdd\" (click)=\"addConnectionToSpacificSettings(i,connection)\"><i\n                            class=\"fa fa-plus\"></i></span>\n                      </li>\n\n                    </ul>\n                  </div>\n\n                </div>\n                <div class=\"blockBtn\" *ngIf=\"specificConnections[i] && specificConnections[i].length >0\">\n                  <span *ngFor=\"let c of specificConnections[i]\">\n                    {{ c.name }} <i class=\"fa fa-times\" (click)=\"removeConnections(i, c)\"></i> <small>|</small>\n                  </span>\n                </div>\n              </div>\n\n              <label class=\"switch\" *ngIf=\"item.controls.show_status\">\n                <input type=\"checkbox\" formControlName=\"show_status\" [value]=\"1\">\n                <span class=\"slider\"></span>\n              </label>\n\n              <span *ngIf=\"item.controls.show_status\" class=\"siteTooltip\" placement=\"right\"\n                ngbTooltip=\"Example: &#013; Your Profile Now Is Shown\"><i class=\"fa fa-exclamation-triangle\"\n                  aria-hidden=\"true\"></i></span>\n\n\n            </div>\n\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-12 col-xs-12\">\n              \n            </div>\n          </div>\n          <div class=\"buttonGr\">\n            <div class=\"text-left\">\n                <a role=\"button\" class=\"btnGreen\" [routerLink]=\"['/my-blocks']\">{{ 'BLOCKS.MYBLOCKS' |translate }}</a>\n            </div>\n            <div class=\"text-right\">\n              <button class=\"btnGreen\" name=\"button\" type=\"submit\">{{ 'PROFILE.SAVE_BUTTON' | translate }}</button>\n            </div>\n          </div>\n        </form>\n\n      </ng-template>\n    </ngb-tab>\n    <ngb-tab>\n      <ng-template ngbTabTitle><i class=\"fa fa-info\" aria-hidden=\"true\"></i> {{ 'SETTINGS.GENERAL' |\n            translate }}</ng-template>\n      <ng-template ngbTabContent>\n          <form [formGroup]=\"generalSettingsForm\" novalidate (submit)=\"saveGeneralSettings()\">\n            <div class=\"formWrap inlineAll\">\n                <label class=\"col-md-3\" for=\"\">{{ 'SETTINGS.PREFFERED_LANG'| translate }}</label>\n                <select class=\"col-md-9 inpField withSpace\" \n                  formControlName=\"preffered_lang\">\n                  <option value=\"\">{{ 'PROFILE.SELECT_ANY_LANG'| translate }}</option>\n                  <option *ngFor=\"let lang of allLanguage\" [value]=\"lang.id\">\n                    {{lang.lang_name}}\n                  </option>\n                </select>\n            </div>\n            <div class=\"buttonGr\">\n                <div class=\"text-right\">\n                  <button class=\"btnGreen\" name=\"button\" type=\"submit\">{{ 'PROFILE.SAVE_BUTTON' | translate }}</button>\n                </div>\n              </div>\n            </form>\n      </ng-template>\n    </ngb-tab>\n  </ngb-tabset>\n\n</div>\n"

/***/ }),

/***/ "./src/app/profile/privacysettings/privacysettings.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/profile/privacysettings/privacysettings.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJpdmFjeXNldHRpbmdzL3ByaXZhY3lzZXR0aW5ncy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/profile/privacysettings/privacysettings.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/profile/privacysettings/privacysettings.component.ts ***!
  \**********************************************************************/
/*! exports provided: PrivacysettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacysettingsComponent", function() { return PrivacysettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _globalConfig__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../globalConfig */ "./src/app/globalConfig.ts");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_7__);

/*****************************************************
# Company Name          :
# Author                :
# Created Date          : 25-01-2019
# Module                : PrivacysettingsComponent
# Object name           : PrivacysettingsComponent
# Functionality         : privacy settings of auser
# Purpose               : constructor, ngOnInit, createItem, filterSettingsValue, savePrivacySettings
*******************************************************/







var PrivacysettingsComponent = /** @class */ (function () {
    /* Function Name : constructor
      * Author :
      * Created Date : 25-01-2019
      * Modified Date : *
      * Purpose : to define the all helpful objects and define the languages data
      * PARAMS : translate, uService, cService, formBuilder
      */
    function PrivacysettingsComponent(translate, uService, cService, formBuilder) {
        var _this = this;
        this.translate = translate;
        this.uService = uService;
        this.cService = cService;
        this.formBuilder = formBuilder;
        this.successMessage = ''; // success message
        this.errMessage = ''; // error message
        this.connectionList = [];
        this.specificConnections = {};
        this.specificAddBox = null;
        this.specificAddInputValue = null;
        this.allLanguage = [];
        this.generalSettingsData = {};
        this.cService.activelang.subscribe(function (lang) {
            // this language will be used as a fallback when a translation isn't found in the current language
            _this.translate.setDefaultLang(lang);
            // the lang to use, if the lang isn't available, it will use the current loader to get them
            _this.translate.use(lang);
        });
    }
    /* Function Name : ngOnInit
      * Author :
      * Created Date : 25-01-2019
      * Modified Date : *
      * Purpose : to get data after html load
      * PARAMS :
      */
    PrivacysettingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.privacyForm = this.formBuilder.group({
            "permissions": this.formBuilder.array([])
        });
        this.permissions = this.privacyForm.get('permissions');
        this.uService.privacySettings().subscribe(function (responseData) {
            _this.privacySettingsContent = responseData.data;
            if (responseData.data.options && responseData.data.options.length > 0) {
                responseData.data.options.forEach(function (item, index) {
                    _this.permissions.push(_this.createItem(item, index));
                });
            }
        });
        this.generalSettingsForm = this.formBuilder.group({
            "preffered_lang": [""]
        });
        this.uService.getGeneralSettings()
            .subscribe(function (responseSettingsData) {
            if (responseSettingsData.statustext == 'success') {
                _this.generalSettingsData = responseSettingsData.data.settings;
                _this.generalSettingsForm.setValue({
                    "preffered_lang": _this.generalSettingsData.preffered_lang
                });
            }
        });
        this.getlanguage();
    };
    /* Function Name : createItem
      * Author :
      * Created Date : 25-01-2019
      * Modified Date : *
      * Purpose : to create items
      * PARAMS : item, index
      */
    PrivacysettingsComponent.prototype.createItem = function (item, index) {
        var formObj = {
            option_id: item.id
        };
        if (item.type === 0) {
            formObj['settings_id'] = this.filterSettingsValue(item.id).settings_id;
            var specificUser = this.filterSettingsValue(item.id).specific_users;
            ;
            formObj['specific_users'] = specificUser;
            if (specificUser) {
                this.specificConnections[index] = JSON.parse(specificUser);
            }
        }
        else {
            formObj['show_status'] = this.filterSettingsValue(item.id).show_status;
        }
        return this.formBuilder.group(formObj);
    };
    /* Function Name : ngOnInit
      * Author :
      * Created Date : 25-01-2019
      * Modified Date : *
      * Purpose : to filter settings value
      * PARAMS : optionId
      */
    PrivacysettingsComponent.prototype.filterSettingsValue = function (optionId) {
        var item = {};
        item = this.privacySettingsContent.userPermission.find(function (uPermission) {
            return uPermission.option_id == optionId;
        });
        return (item) ? item : {};
    };
    /* Function Name : savePrivacySettings
      * Author :
      * Created Date : 25-01-2019
      * Modified Date : *
      * Purpose : to save user privacy settings
      * PARAMS :
      */
    PrivacysettingsComponent.prototype.savePrivacySettings = function () {
        var _this = this;
        this.uService.savePrivacySettings(this.privacyForm.value)
            .subscribe(function (responseData) {
            _globalConfig__WEBPACK_IMPORTED_MODULE_6__["SCROLL_TO_TOP"]();
            if (responseData.statustext === 'success') {
                _this.translate.get('COMMON.SUCCESS').subscribe(function (tData) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_7___default()({
                        title: tData,
                        text: responseData.message,
                        icon: 'success'
                    });
                });
            }
            else if (responseData.statustext === 'error') {
                _this.translate.get('COMMON.ERROR').subscribe(function (tData) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_7___default()({
                        title: tData,
                        text: responseData.message,
                        icon: 'error'
                    });
                });
            }
        });
    };
    /* Function Name : searchConnection
      * Author :
      * Created Date : 14-03-2019
      * Modified Date : *
      * Purpose : to search connections of a user
      * PARAMS :
      */
    PrivacysettingsComponent.prototype.searchConnection = function (index, event) {
        var _this = this;
        var keyword = event.target.value;
        this.connectionList = [];
        if (keyword) {
            var postData = {
                "page_name": 'connection',
                "keyword": keyword
            };
            this.specificAddInputValue = keyword;
            this.uService.searchUsers(postData)
                .subscribe(function (responseData) {
                if (responseData.statustext == 'success') {
                    _this.connectionList = responseData.data.list.list;
                }
            });
        }
    };
    /* Function Name : addConnectionToSpacificSettings
      * Author :
      * Created Date : 14-03-2019
      * Modified Date : *
      * Purpose : to add connections  with settings
      * PARAMS : index, connection
      */
    PrivacysettingsComponent.prototype.addConnectionToSpacificSettings = function (index, connection) {
        var settingsInput = this.privacyForm.get('permissions')['controls'][index]['controls']['specific_users'];
        if (!this.specificConnections[index]) {
            this.specificConnections[index] = [];
        }
        var value = settingsInput.value;
        if (value) {
            value = JSON.parse(value);
        }
        else {
            value = [];
        }
        var conObj = {
            "id": connection.friend_id,
            "name": connection.friend_full_name
        };
        var checkExist = this.specificConnections[index].find(function (item) {
            return item.id == connection.friend_id;
        });
        if (!checkExist) {
            value.push(conObj);
            value = JSON.stringify(value);
            if (value == '[]') {
                value = null;
            }
            settingsInput.setValue(value);
            this.specificConnections[index].push(conObj);
        }
    };
    /* Function Name : openAddBox
      * Author :
      * Created Date : 14-03-2019
      * Modified Date : *
      * Purpose : to open search box
      * PARAMS : index
      */
    PrivacysettingsComponent.prototype.openAddBox = function (index) {
        if (this.specificAddBox && this.specificAddBox == index) {
            this.specificAddBox = null;
        }
        else {
            this.specificAddBox = index;
        }
        this.connectionList = [];
        this.specificAddInputValue = '';
    };
    /* Function Name : removeConnections
      * Author :
      * Created Date : 15-03-2019
      * Modified Date : *
      * Purpose : to remove  a connection from specific user list
      * PARAMS : index, connection
      */
    PrivacysettingsComponent.prototype.removeConnections = function (index, connection) {
        var connectionIndex = this.specificConnections[index].indexOf(connection);
        this.specificConnections[index].splice(connectionIndex, 1);
        var settingsInput = this.privacyForm.get('permissions')['controls'][index]['controls']['specific_users'];
        var value = JSON.stringify(this.specificConnections[index]);
        if (value == '[]') {
            value = null;
        }
        settingsInput.setValue(value);
    };
    /* Function Name : getlanguage
    * Author :
    * Created Date : 26-04-2019
    * Modified Date : *
    * Purpose : to get all language data
    * PARAMS :
    */
    PrivacysettingsComponent.prototype.getlanguage = function () {
        var _this = this;
        this.cService.getLanguages().subscribe(function (response) {
            if ((response['statustext'] === 'success')) {
                _this.allLanguage = response['data'];
            }
            else {
                console.log('language error');
            }
        });
    };
    /* Function Name : saveGeneralSettings
    * Author :
    * Created Date : 26-04-2019
    * Modified Date : *
    * Purpose : to save general settings
    * PARAMS :
    */
    PrivacysettingsComponent.prototype.saveGeneralSettings = function () {
        var _this = this;
        if (this.generalSettingsData.preffered_lang == this.generalSettingsForm.value.preffered_lang) {
            this.translate.get('COMMON.NO_CHNAGES').subscribe(function (tData) {
                _this.errMessage = tData;
            });
            setTimeout(function () {
                _this.errMessage = '';
            }, 5000);
        }
        else {
            this.uService.saveGeneralSettings(this.generalSettingsForm.value)
                .subscribe(function (responseData) {
                var langCode = _this.allLanguage.find(function (item) {
                    return item.id == _this.generalSettingsForm.value.preffered_lang;
                });
                localStorage.setItem('_lang', langCode.lang_code);
                location.reload();
                if ((responseData['statustext'] === 'success')) {
                    _this.translate.get('COMMON.SUCCESS').subscribe(function (tData) {
                        sweetalert__WEBPACK_IMPORTED_MODULE_7___default()({
                            title: tData,
                            text: responseData.message,
                            icon: 'success'
                        });
                    });
                }
            });
        }
    };
    PrivacysettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-privacysettings',
            template: __webpack_require__(/*! ./privacysettings.component.html */ "./src/app/profile/privacysettings/privacysettings.component.html"),
            styles: [__webpack_require__(/*! ./privacysettings.component.scss */ "./src/app/profile/privacysettings/privacysettings.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            _services_users_service__WEBPACK_IMPORTED_MODULE_4__["UsersService"],
            _services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], PrivacysettingsComponent);
    return PrivacysettingsComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/profile/profile-routing.module.ts ***!
  \***************************************************/
/*! exports provided: ProfileRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileRoutingModule", function() { return ProfileRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _setupprofile_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../setupprofile.guard */ "./src/app/setupprofile.guard.ts");
/* harmony import */ var _profile_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile.guard */ "./src/app/profile/profile.guard.ts");
/* harmony import */ var _profileview_profileview_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profileview/profileview.component */ "./src/app/profile/profileview/profileview.component.ts");
/* harmony import */ var _profileedit_profileedit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./profileedit/profileedit.component */ "./src/app/profile/profileedit/profileedit.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./list/list.component */ "./src/app/profile/list/list.component.ts");
/* harmony import */ var _privacysettings_privacysettings_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./privacysettings/privacysettings.component */ "./src/app/profile/privacysettings/privacysettings.component.ts");
/* harmony import */ var _publicprofile_publicprofile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./publicprofile/publicprofile.component */ "./src/app/profile/publicprofile/publicprofile.component.ts");
/* harmony import */ var _testimonial_testimonial_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./testimonial/testimonial.component */ "./src/app/profile/testimonial/testimonial.component.ts");
/* harmony import */ var _controllpanelsettings_controllpanelsettings_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./controllpanelsettings/controllpanelsettings.component */ "./src/app/profile/controllpanelsettings/controllpanelsettings.component.ts");
/* harmony import */ var _cardbuilder_cardbuilder_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./cardbuilder/cardbuilder.component */ "./src/app/profile/cardbuilder/cardbuilder.component.ts");
/* harmony import */ var _changepassword_changepassword_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./changepassword/changepassword.component */ "./src/app/profile/changepassword/changepassword.component.ts");
/* harmony import */ var _connections_connections_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./connections/connections.component */ "./src/app/profile/connections/connections.component.ts");
/* harmony import */ var _blocks_blocks_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./blocks/blocks.component */ "./src/app/profile/blocks/blocks.component.ts");
/* harmony import */ var _seemorenotifications_seemorenotifications_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./seemorenotifications/seemorenotifications.component */ "./src/app/profile/seemorenotifications/seemorenotifications.component.ts");
/* harmony import */ var _all_invitations_all_invitations_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./all-invitations/all-invitations.component */ "./src/app/profile/all-invitations/all-invitations.component.ts");
/* harmony import */ var _all_recommendations_all_recommendations_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./all-recommendations/all-recommendations.component */ "./src/app/profile/all-recommendations/all-recommendations.component.ts");
/* harmony import */ var _cardbuildersuccess_cardbuildersuccess_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./cardbuildersuccess/cardbuildersuccess.component */ "./src/app/profile/cardbuildersuccess/cardbuildersuccess.component.ts");
/* harmony import */ var _notificationsettings_notificationsettings_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./notificationsettings/notificationsettings.component */ "./src/app/profile/notificationsettings/notificationsettings.component.ts");
/* harmony import */ var _chat_history_chat_history_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./chat-history/chat-history.component */ "./src/app/profile/chat-history/chat-history.component.ts");
/* harmony import */ var _lifetime_lifetime_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./lifetime/lifetime.component */ "./src/app/profile/lifetime/lifetime.component.ts");
/* harmony import */ var _myblocklist_myblocklist_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./myblocklist/myblocklist.component */ "./src/app/profile/myblocklist/myblocklist.component.ts");

/*****************************************************
# Company Name          :
# Author                :
# Created Date          : 10-01-2019
# Module                : ProfileRoutingModule
# Object name           : ProfileRoutingModule
# Functionality         : set up profile module routes
# Purpose               :
*******************************************************/
























var routes = [
    {
        path: "profile",
        canActivate: [_setupprofile_guard__WEBPACK_IMPORTED_MODULE_4__["SetupprofileGuard"]],
        children: [
            { path: "", canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]], component: _profileview_profileview_component__WEBPACK_IMPORTED_MODULE_6__["ProfileviewComponent"] },
            { path: "edit", canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]], component: _profileedit_profileedit_component__WEBPACK_IMPORTED_MODULE_7__["ProfileeditComponent"] },
        ]
    },
    // { path : "user/chart/:userCPP",   component : ProfileChartComponent },
    {
        path: "testimonial",
        pathMatch: 'full',
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"], _setupprofile_guard__WEBPACK_IMPORTED_MODULE_4__["SetupprofileGuard"]],
        component: _testimonial_testimonial_component__WEBPACK_IMPORTED_MODULE_11__["TestimonialComponent"]
    },
    {
        path: "search",
        pathMatch: 'full',
        component: _list_list_component__WEBPACK_IMPORTED_MODULE_8__["ListComponent"]
    },
    {
        path: "privacy-settings",
        pathMatch: 'full',
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"], _setupprofile_guard__WEBPACK_IMPORTED_MODULE_4__["SetupprofileGuard"]],
        component: _privacysettings_privacysettings_component__WEBPACK_IMPORTED_MODULE_9__["PrivacysettingsComponent"]
    },
    {
        path: "notification-settings",
        pathMatch: 'full',
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"], _setupprofile_guard__WEBPACK_IMPORTED_MODULE_4__["SetupprofileGuard"]],
        component: _notificationsettings_notificationsettings_component__WEBPACK_IMPORTED_MODULE_21__["NotificationsettingsComponent"]
    },
    {
        path: "control-panel-settings",
        pathMatch: 'full',
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"], _setupprofile_guard__WEBPACK_IMPORTED_MODULE_4__["SetupprofileGuard"]],
        component: _controllpanelsettings_controllpanelsettings_component__WEBPACK_IMPORTED_MODULE_12__["ControllpanelsettingsComponent"]
    },
    {
        path: "card/build",
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"], _setupprofile_guard__WEBPACK_IMPORTED_MODULE_4__["SetupprofileGuard"]],
        component: _cardbuilder_cardbuilder_component__WEBPACK_IMPORTED_MODULE_13__["CardbuilderComponent"]
    },
    {
        path: "card/success/:token",
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"], _setupprofile_guard__WEBPACK_IMPORTED_MODULE_4__["SetupprofileGuard"]],
        component: _cardbuildersuccess_cardbuildersuccess_component__WEBPACK_IMPORTED_MODULE_20__["CardbuildersuccessComponent"]
    },
    {
        path: "change-password",
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"], _setupprofile_guard__WEBPACK_IMPORTED_MODULE_4__["SetupprofileGuard"]],
        component: _changepassword_changepassword_component__WEBPACK_IMPORTED_MODULE_14__["ChangepasswordComponent"]
    },
    {
        path: "connections",
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"], _setupprofile_guard__WEBPACK_IMPORTED_MODULE_4__["SetupprofileGuard"]],
        component: _connections_connections_component__WEBPACK_IMPORTED_MODULE_15__["ConnectionsComponent"]
    },
    {
        path: "blocks",
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"], _setupprofile_guard__WEBPACK_IMPORTED_MODULE_4__["SetupprofileGuard"]],
        component: _blocks_blocks_component__WEBPACK_IMPORTED_MODULE_16__["BlocksComponent"]
    },
    {
        path: "notifications",
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"], _setupprofile_guard__WEBPACK_IMPORTED_MODULE_4__["SetupprofileGuard"]],
        component: _seemorenotifications_seemorenotifications_component__WEBPACK_IMPORTED_MODULE_17__["SeemorenotificationsComponent"]
    },
    {
        path: "invitations",
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"], _setupprofile_guard__WEBPACK_IMPORTED_MODULE_4__["SetupprofileGuard"]],
        component: _all_invitations_all_invitations_component__WEBPACK_IMPORTED_MODULE_18__["AllInvitationsComponent"]
    },
    {
        path: "recommendations",
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"], _setupprofile_guard__WEBPACK_IMPORTED_MODULE_4__["SetupprofileGuard"]],
        component: _all_recommendations_all_recommendations_component__WEBPACK_IMPORTED_MODULE_19__["AllRecommendationsComponent"]
    },
    {
        path: "chat-histroy",
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"], _setupprofile_guard__WEBPACK_IMPORTED_MODULE_4__["SetupprofileGuard"]],
        component: _chat_history_chat_history_component__WEBPACK_IMPORTED_MODULE_22__["ChatHistoryComponent"]
    },
    {
        path: 'my-blocks',
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"], _setupprofile_guard__WEBPACK_IMPORTED_MODULE_4__["SetupprofileGuard"]],
        component: _myblocklist_myblocklist_component__WEBPACK_IMPORTED_MODULE_24__["MyblocklistComponent"]
    },
    { path: "lifetime", component: _lifetime_lifetime_component__WEBPACK_IMPORTED_MODULE_23__["LifetimeComponent"] },
    { path: ":userCPP", component: _publicprofile_publicprofile_component__WEBPACK_IMPORTED_MODULE_10__["PublicprofileComponent"], canActivate: [_profile_guard__WEBPACK_IMPORTED_MODULE_5__["ProfileGuard"]] },
];
var ProfileRoutingModule = /** @class */ (function () {
    function ProfileRoutingModule() {
    }
    ProfileRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ProfileRoutingModule);
    return ProfileRoutingModule;
}());



/***/ }),

/***/ "./src/app/profile/profile.guard.ts":
/*!******************************************!*\
  !*** ./src/app/profile/profile.guard.ts ***!
  \******************************************/
/*! exports provided: ProfileGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileGuard", function() { return ProfileGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var ProfileGuard = /** @class */ (function () {
    function ProfileGuard(uService, router, cService) {
        this.uService = uService;
        this.router = router;
        this.cService = cService;
    }
    ProfileGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        var cpp = state.url.split("/");
        cpp = cpp[1];
        var user = null;
        if (localStorage.getItem("_user")) {
            user = this.cService.getLoggedUserData();
            user = parseInt(user._i);
        }
        return this.uService.userPrivacyCheckingData({ cpp: cpp })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (responseData) {
            if (responseData.statustext === 'success') {
                var currentUser = responseData.data.find(function (item) {
                    return item.cpp.toLowerCase() == cpp.toLowerCase();
                });
                var loggedInUser = responseData.data.find(function (item) {
                    return item.id == user;
                });
                if (currentUser && currentUser.privacySettings) {
                    var viewProfileSettings = currentUser.privacySettings.find(function (item) {
                        return item.option.flag === 'view-my-profile';
                    });
                    if (viewProfileSettings && viewProfileSettings.show_status == 0) {
                        _this.router.navigate(["access-deny"]);
                    }
                    var guestviewProfileSettings = currentUser.privacySettings.find(function (item) {
                        return item.option.flag === 'guest-view-my-profile';
                    });
                    if (!loggedInUser) {
                        if (guestviewProfileSettings && guestviewProfileSettings.show_status == 0) {
                            _this.router.navigate(["access-deny"]);
                        }
                    }
                    if (loggedInUser) {
                        var currentUserBlockIds = [];
                        if (currentUser.blocksIds && currentUser.blocksIds.blocks_ids) {
                            currentUserBlockIds = currentUser.blocksIds.blocks_ids.split(",");
                        }
                        var loggedInUserBlockIds = [];
                        if (loggedInUser.blocksIds && loggedInUser.blocksIds.blocks_ids) {
                            loggedInUserBlockIds = loggedInUser.blocksIds.blocks_ids.split(",");
                        }
                        if (currentUserBlockIds.indexOf(loggedInUser.id.toString()) > -1 || loggedInUserBlockIds.indexOf(currentUser.id.toString()) > -1) {
                            _this.router.navigate(["access-deny"]);
                        }
                    }
                }
                return true;
            }
            else {
                return false;
            }
        }));
    };
    ProfileGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"]])
    ], ProfileGuard);
    return ProfileGuard;
}());



/***/ }),

/***/ "./src/app/profile/profile.module.ts":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.module.ts ***!
  \*******************************************/
/*! exports provided: ProfileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileModule", function() { return ProfileModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-charts */ "./node_modules/ng2-charts/index.js");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_charts__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-routing.module */ "./src/app/profile/profile-routing.module.ts");
/* harmony import */ var _profileview_profileview_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profileview/profileview.component */ "./src/app/profile/profileview/profileview.component.ts");
/* harmony import */ var _profileedit_profileedit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./profileedit/profileedit.component */ "./src/app/profile/profileedit/profileedit.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./list/list.component */ "./src/app/profile/list/list.component.ts");
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-owl-carousel */ "./node_modules/ngx-owl-carousel/index.js");
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _privacysettings_privacysettings_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./privacysettings/privacysettings.component */ "./src/app/profile/privacysettings/privacysettings.component.ts");
/* harmony import */ var ngx_img_cropper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-img-cropper */ "./node_modules/ngx-img-cropper/index.js");
/* harmony import */ var ng_circle_progress__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-circle-progress */ "./node_modules/ng-circle-progress/index.js");
/* harmony import */ var _global_global_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../global/global.module */ "./src/app/global/global.module.ts");
/* harmony import */ var _publicprofile_publicprofile_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./publicprofile/publicprofile.component */ "./src/app/profile/publicprofile/publicprofile.component.ts");
/* harmony import */ var _testimonial_testimonial_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./testimonial/testimonial.component */ "./src/app/profile/testimonial/testimonial.component.ts");
/* harmony import */ var _controllpanelsettings_controllpanelsettings_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./controllpanelsettings/controllpanelsettings.component */ "./src/app/profile/controllpanelsettings/controllpanelsettings.component.ts");
/* harmony import */ var _cardbuilder_cardbuilder_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./cardbuilder/cardbuilder.component */ "./src/app/profile/cardbuilder/cardbuilder.component.ts");
/* harmony import */ var _changepassword_changepassword_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./changepassword/changepassword.component */ "./src/app/profile/changepassword/changepassword.component.ts");
/* harmony import */ var _connections_connections_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./connections/connections.component */ "./src/app/profile/connections/connections.component.ts");
/* harmony import */ var _blocks_blocks_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./blocks/blocks.component */ "./src/app/profile/blocks/blocks.component.ts");
/* harmony import */ var _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./notifications/notifications.component */ "./src/app/profile/notifications/notifications.component.ts");
/* harmony import */ var _ngx_share_button__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ngx-share/button */ "./node_modules/@ngx-share/button/fesm5/ngx-share-button.js");
/* harmony import */ var _seemorenotifications_seemorenotifications_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./seemorenotifications/seemorenotifications.component */ "./src/app/profile/seemorenotifications/seemorenotifications.component.ts");
/* harmony import */ var _all_invitations_all_invitations_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./all-invitations/all-invitations.component */ "./src/app/profile/all-invitations/all-invitations.component.ts");
/* harmony import */ var _all_recommendations_all_recommendations_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./all-recommendations/all-recommendations.component */ "./src/app/profile/all-recommendations/all-recommendations.component.ts");
/* harmony import */ var _cardbuildersuccess_cardbuildersuccess_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./cardbuildersuccess/cardbuildersuccess.component */ "./src/app/profile/cardbuildersuccess/cardbuildersuccess.component.ts");
/* harmony import */ var _notificationsettings_notificationsettings_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./notificationsettings/notificationsettings.component */ "./src/app/profile/notificationsettings/notificationsettings.component.ts");
/* harmony import */ var _chat_history_chat_history_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./chat-history/chat-history.component */ "./src/app/profile/chat-history/chat-history.component.ts");
/* harmony import */ var _previewcv_previewcv_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./previewcv/previewcv.component */ "./src/app/profile/previewcv/previewcv.component.ts");
/* harmony import */ var _lifetime_lifetime_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./lifetime/lifetime.component */ "./src/app/profile/lifetime/lifetime.component.ts");
/* harmony import */ var _myblocklist_myblocklist_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./myblocklist/myblocklist.component */ "./src/app/profile/myblocklist/myblocklist.component.ts");

/*****************************************************
# Company Name          :
# Author                :
# Created Date          : 10-01-2019
# Module                : ProfileModule
# Object name           : ProfileModule
# Functionality         : set up profile module
# Purpose               :
*******************************************************/
































var ProfileModule = /** @class */ (function () {
    function ProfileModule() {
    }
    ProfileModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_profileview_profileview_component__WEBPACK_IMPORTED_MODULE_6__["ProfileviewComponent"], _profileedit_profileedit_component__WEBPACK_IMPORTED_MODULE_7__["ProfileeditComponent"], _list_list_component__WEBPACK_IMPORTED_MODULE_8__["ListComponent"], _privacysettings_privacysettings_component__WEBPACK_IMPORTED_MODULE_10__["PrivacysettingsComponent"], _publicprofile_publicprofile_component__WEBPACK_IMPORTED_MODULE_14__["PublicprofileComponent"], _testimonial_testimonial_component__WEBPACK_IMPORTED_MODULE_15__["TestimonialComponent"], _controllpanelsettings_controllpanelsettings_component__WEBPACK_IMPORTED_MODULE_16__["ControllpanelsettingsComponent"], _cardbuilder_cardbuilder_component__WEBPACK_IMPORTED_MODULE_17__["CardbuilderComponent"], _changepassword_changepassword_component__WEBPACK_IMPORTED_MODULE_18__["ChangepasswordComponent"], _connections_connections_component__WEBPACK_IMPORTED_MODULE_19__["ConnectionsComponent"], _blocks_blocks_component__WEBPACK_IMPORTED_MODULE_20__["BlocksComponent"], _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_21__["NotificationsComponent"], _seemorenotifications_seemorenotifications_component__WEBPACK_IMPORTED_MODULE_23__["SeemorenotificationsComponent"], _all_invitations_all_invitations_component__WEBPACK_IMPORTED_MODULE_24__["AllInvitationsComponent"], _all_recommendations_all_recommendations_component__WEBPACK_IMPORTED_MODULE_25__["AllRecommendationsComponent"], _cardbuildersuccess_cardbuildersuccess_component__WEBPACK_IMPORTED_MODULE_26__["CardbuildersuccessComponent"], _notificationsettings_notificationsettings_component__WEBPACK_IMPORTED_MODULE_27__["NotificationsettingsComponent"], _chat_history_chat_history_component__WEBPACK_IMPORTED_MODULE_28__["ChatHistoryComponent"], _previewcv_previewcv_component__WEBPACK_IMPORTED_MODULE_29__["PreviewcvComponent"], _lifetime_lifetime_component__WEBPACK_IMPORTED_MODULE_30__["LifetimeComponent"], _myblocklist_myblocklist_component__WEBPACK_IMPORTED_MODULE_31__["MyblocklistComponent"]],
            imports: [
                ngx_img_cropper__WEBPACK_IMPORTED_MODULE_11__["ImageCropperModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfileRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_9__["OwlModule"],
                ng_circle_progress__WEBPACK_IMPORTED_MODULE_12__["NgCircleProgressModule"].forRoot(),
                _global_global_module__WEBPACK_IMPORTED_MODULE_13__["GlobalModule"],
                _ngx_share_button__WEBPACK_IMPORTED_MODULE_22__["ShareButtonModule"],
                ng2_charts__WEBPACK_IMPORTED_MODULE_4__["ChartsModule"]
            ]
        })
    ], ProfileModule);
    return ProfileModule;
}());



/***/ }),

/***/ "./src/app/profile/profileedit/profileedit.component.html":
/*!****************************************************************!*\
  !*** ./src/app/profile/profileedit/profileedit.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"proEdit\">\n  <div class=\"row\">\n      <div class=\"col-md-3  col-xs-12 \">\n          <div class=\"editImage\">\n            <div class=\"editImageMain\">\n              <div class=\"editImagePop\" (click)=\"openEditPicModal(content)\"><i class=\"fa fa-plus-circle\"\n                  aria-hidden=\"true\"></i></div>\n              <img *ngIf=\"profilePic\" [src]=\"profilePic\" />\n            </div>\n            <div class=\"text-center\">\n              <button type=\"button\" name=\"button\" (click)=\"openEditPicModal(content)\">{{\n                'PROFILEEDIT.EDIT'|translate }}</button>\n              <button *ngIf=\"profilePic\" class=\"remove\" type=\"button\" name=\"button\" (click)=\"removeProfilePic()\">{{\n                'PROFILEEDIT.REMOVE'|translate }}</button>\n            </div>\n          </div>\n        </div>\n       <div class=\"col-md-9 col-xs-12 profile-edit-form-main-content\">\n\n         <ngb-tabset #tab=\"ngbTabset\" (tabChange)=\"changeTabEvent($event)\">\n           <!-- Personal Info -->\n           <ngb-tab id=\"personal\" (load)=\"personalDetails()\">\n             <ng-template ngbTabTitle><i class=\"fa fa-info\" aria-hidden=\"true\"></i> {{ 'PROFILE.PERSONAL_INFO' | translate }}</ng-template>\n             <ng-template ngbTabContent>\n               <div *ngIf=\"loader.personal.list\" class=\"loader-p\"><i class=\"fa fa-cog fa-spin\"></i></div>\n               <div class=\"proEditForm\">\n                  <div class=\"profile-edit-form-container\">\n                    <div class=\"alert alert-success\" *ngIf=\"personalSuccessMsg\">{{ personalSuccessMsg }}</div>\n                    <div class=\"alert alert-danger\" *ngIf=\"personalErrorMsg\">{{ personalErrorMsg }}</div>\n                    <div class=\"row\">\n                      <div class=\"col-lg-4\">\n                        <div class=\"formWrap\">\n                          <label for=\"\">{{ 'PROFILEEDIT.FIRST_NAME'|translate }} :</label>\n                          <input class=\"inpField\" type=\"text\" [(ngModel)]=\"personalForm.first_name\" value=\"\" placeholder=\"\">\n                          <div *ngIf=\"personalForm.submit && (personalForm.first_name==null || personalForm.first_name =='')\"\n                            class=\"alert alert-danger\">\n                            {{ 'PROFILEEDIT.FIRST_NAME_REQUIRED'|translate }}\n                          </div>\n      \n                        </div>\n                      </div>\n                      <div class=\"col-lg-4\">\n                        <div class=\"formWrap\">\n                          <label for=\"\">{{ 'PROFILEEDIT.LAST_NAME'|translate }} :</label>\n                          <input class=\"inpField\" type=\"text\" [(ngModel)]=\"personalForm.last_name\" value=\"\" placeholder=\"\">\n                          <div *ngIf=\"personalForm.submit && (personalForm.last_name==null || personalForm.last_name =='')\"\n                            class=\"alert alert-danger\">\n                            {{ 'PROFILEEDIT.LAST_NAME_REQUIRED'|translate }}\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"col-lg-4\">\n                        <div class=\"formWrap\">\n                          <label for=\"\">{{ 'PROFILEEDIT.FAMILY_NAME'|translate }} :</label>\n                          <input class=\"inpField\" type=\"text\" [(ngModel)]=\"personalForm.family_name\" value=\"\" placeholder=\"\">\n      \n      \n                        </div>\n                      </div>\n                    </div>\n      \n                    <div class=\"row\">\n                      \n                      <div class=\"col-lg-6\">\n                        <div class=\"formWrap\">\n                          <label for=\"\">{{ 'PROFILEEDIT.ADDRESS'|translate }} : </label>\n                          <span class=\"formSpan\">\n                            <input class=\"inpField largeWidth\" type=\"text\" [(ngModel)]=\"personalForm.address\" value=\"\" placeholder=\"\">\n                          </span>\n                        </div>\n                      </div>\n                      <div class=\"col-lg-6\">\n                        <div class=\"formWrap\">\n                          <label for=\"\">{{ 'PROFILEEDIT.LOCATION'|translate }} : <small><i class=\"fa fa-asterisk\" aria-hidden=\"true\"></i></small></label>\n                          <span class=\"formWrap\">\n                            <ng-select class=\"inpField width200\" [items]=\"countryList\" [(ngModel)]=\"personalForm.country_id\"\n                              bindLabel=\"name\" bindValue=\"id\" (change)=\"getCityList()\"></ng-select>\n                            <div *ngIf=\"personalForm.submit && (personalForm.country_id==null || personalForm.country_id =='')\"\n                              class=\"alert alert-danger\">\n                              {{ 'PROFILEEDIT.COUNTRY_REQUIRED'|translate }}\n                            </div>\n                          </span> &nbsp;\n                          <span class=\"formWrap\">\n                            <ng-select class=\"inpField width200\" [items]=\"cityList\" [(ngModel)]=\"personalForm.city_id\"\n                              bindLabel=\"name\" bindValue=\"id\"></ng-select>\n                            <div *ngIf=\"personalForm.submit && (personalForm.city_id==null || personalForm.city_id =='')\"\n                              class=\"alert alert-danger\">\n                              {{ 'PROFILEEDIT.CITY_REQUIRED'|translate }}\n                            </div>\n                          </span>\n      \n                        </div>\n                      </div>\n                    </div>\n      \n                    <div class=\"row\">\n                      <div class=\"col-lg-6\">\n                          <div class=\"formWrap\">\n                            <label for=\"\">{{ 'PROFILEEDIT.DOB'|translate }} : <small><i class=\"fa fa-asterisk\" aria-hidden=\"true\"></i></small></label>\n                            <select [(ngModel)]=\"personalForm.dob_date\" class=\"inpField autoWidth withSpace\">\n                              <option *ngFor=\"let d of dayList\" [value]=\"d.id\">{{d.name}}</option>\n                            </select>\n                            <select [(ngModel)]=\"personalForm.dob_month\" class=\"inpField autoWidth withSpace\">\n                              <option *ngFor=\"let d of monthList\" [value]=\"d.id\">{{d.name}}</option>\n                            </select>\n                            <select [(ngModel)]=\"personalForm.dob_year\" class=\"inpField autoWidth withSpace\">\n                              <option *ngFor=\"let d of years\" [value]=\"d\">{{d}}</option>\n                            </select>\n        \n                          </div>\n                        </div>\n                      <div class=\"col-lg-6\">\n                        <div class=\"formWrap\">\n                          <label for=\"\">{{ 'PROFILEEDIT.EMAIL'|translate }} : <small><i class=\"fa fa-asterisk\" aria-hidden=\"true\"></i></small></label>\n                          <span class=\"formSpan\">\n                            <input class=\"inpField largeWidth\" type=\"email\" [(ngModel)]=\"personalForm.email\" value=\"\"\n                              placeholder=\"\">\n                            <div *ngIf=\"personalForm.submit && (personalForm.email==null || personalForm.email =='')\" class=\"alert alert-danger\">\n                              {{ 'PROFILEEDIT.EMAIL_REQUIRED'|translate }}\n                            </div>\n                          </span>\n                        </div>\n                      </div>\n                      \n                    </div>\n                    <div class=\"row\">\n                      \n                      <div class=\"col-lg-6\">\n                          <div class=\"formWrap\">\n                            <label for=\"\">{{ 'PROFILEEDIT.MOBILE'|translate }} : <small><i class=\"fa fa-asterisk\" aria-hidden=\"true\"></i></small></label>\n                            <span class=\"formSpan\">\n                              <div class=\"inpField largeWidth profile-edit-mobile\">\n                                  <ng-select class=\"inpField phCodeSelect\" [items]=\"countryCodes\" bindLabel=\"code\"\n                                  bindValue=\"code\" [clearable]=\"false\" [searchable]=\"false\" [(ngModel)]=\"personalForm.mobile_code\"\n                                  >\n                                  <ng-template ng-label-tmp let-item=\"item\">\n                                    <img height=\"15\" width=\"15\" [src]=\"item.flag | picturepath:'flag'\"/>&nbsp;\n                                    <b>{{item.code}}</b>\n                                    </ng-template>\n                                    <ng-template ng-option-tmp let-item=\"item\" let-index=\"index\">\n                                        <img height=\"15\" width=\"15\" [src]=\"item.flag | picturepath:'flag'\"/>&nbsp;\n                                        <b>{{item.code}}</b>\n                                    </ng-template>\n                                  </ng-select>\n      \n                                <!-- <select [(ngModel)]=\"personalForm.mobile_code\">\n                                    <option *ngFor=\"let code of countryCodes\" value=\"{{code.code}}\">\n                                        {{ code.code+ '('+code.code+')' }}\n                                    </option>\n                                  </select> -->\n                              <input type=\"text\" appOnlynumaricinput maxlength=\"10\" [(ngModel)]=\"personalForm.mobile_no\" value=\"\"\n                                placeholder=\"\">\n                              </div>\n                              <div *ngIf=\"personalForm.submit && (personalForm.mobile_no==null || personalForm.mobile_no =='')\"\n                                class=\"alert alert-danger\">\n                                {{ 'PROFILEEDIT.MOBILE_REQUIRED'|translate }}\n                              </div>\n                              <div *ngIf=\"personalForm.submit && (personalForm.mobile_no.length != 10)\" class=\"alert alert-danger\">\n                                {{ 'PROFILEEDIT.MOBILE_LENGTH'|translate }}\n                              </div>\n      \n                            </span>\n                          </div>\n                      </div>\n                      <div class=\"col-lg-6\">\n                          <div class=\"formWrap\">\n                            <label for=\"\">{{ 'PROFILEEDIT.WEBSITE'|translate }} :</label>\n                            <input class=\"inpField largeWidth\" type=\"text\" [(ngModel)]=\"personalForm.website\" value=\"\"\n                              placeholder=\"\">\n        \n                          </div>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-lg-6\">\n                            <div class=\"formWrap\">\n                              <label for=\"\">{{ 'PROFILEEDIT.ABOUT_ME'|translate }} :</label>\n                              <textarea maxlength=\"250\" class=\"inpField largeWidth\"  [(ngModel)]=\"personalForm.about_me\" \n                                placeholder=\"\"></textarea>\n          \n                            </div>\n                          </div>\n                          <div class=\"col-lg-6\">\n                            <div class=\"formWrap\">\n                              <label for=\"\">{{ 'PROFILEEDIT.VIDEO_LINK'|translate }} :</label>\n                              \n                              <input class=\"inpField largeWidth\" type=\"text\" [(ngModel)]=\"personalForm.video_link\" value=\"\"\n                                placeholder=\"\">\n\n                                <div *ngIf=\"personalForm.submit && (urlErr.video_link == 1)\" class=\"alert alert-danger\">\n                                    {{ 'PROFILEEDIT.VALID_URL'|translate }}\n                                  </div>\n                                  <div *ngIf=\"personalForm.submit && (urlErr.video_link == 2)\" class=\"alert alert-danger\">\n                                      {{ 'PROFILEEDIT.ONLY_YOUTUBE_LINK'|translate }}\n                                    </div>\n                            </div>\n                          </div>\n                    </div>\n                    \n      \n                    <div class=\"formSocial\">\n                      <h2>{{ 'PROFILEEDIT.SOCIAL_LINKS'|translate }} :</h2>\n                      <ul>\n                        <li><i class=\"fa fa-facebook\" aria-hidden=\"true\"></i> :\n                          <input class=\"inpField largeWidth\" type=\"text\" [(ngModel)]=\"personalForm.facebook_link\" value=\"\"\n                            placeholder=\"\">\n                          <div *ngIf=\"personalForm.submit && (urlErr.facebook == true)\" class=\"alert alert-danger\">\n                            {{ 'PROFILEEDIT.VALID_URL'|translate }}\n                          </div>\n                        </li>\n                        <li><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i> :\n                          <input class=\"inpField largeWidth\" type=\"text\" [(ngModel)]=\"personalForm.twitter_link\" value=\"\"\n                            placeholder=\"\">\n                          <div *ngIf=\"personalForm.submit && (urlErr.twitter == true)\" class=\"alert alert-danger\">\n                            {{ 'PROFILEEDIT.VALID_URL'|translate }}\n                          </div>\n                        </li>\n                        <li><i class=\"fa fa-deviantart\" aria-hidden=\"true\"></i> :\n                          <input class=\"inpField largeWidth\" type=\"text\" [(ngModel)]=\"personalForm.deviantart_link\" value=\"\"\n                            placeholder=\"\">\n                          <div *ngIf=\"personalForm.submit && (urlErr.deviantart == true)\" class=\"alert alert-danger\">\n                            {{ 'PROFILEEDIT.VALID_URL'|translate }}\n                          </div>\n                        </li>\n                        <li><i class=\"fa fa-dribbble\" aria-hidden=\"true\"></i> :\n                          <input class=\"inpField largeWidth\" type=\"text\" [(ngModel)]=\"personalForm.dribbble_link\" value=\"\"\n                            placeholder=\"\">\n                          <div *ngIf=\"personalForm.submit && (urlErr.dribbble == true)\" class=\"alert alert-danger\">\n                            {{ 'PROFILEEDIT.VALID_URL'|translate }}\n                          </div>\n                        </li>\n                        <li><i class=\"fa fa-behance\" aria-hidden=\"true\"></i> :\n                          <input class=\"inpField largeWidth\" type=\"text\" [(ngModel)]=\"personalForm.behance_link\" value=\"\"\n                            placeholder=\"\">\n                          <div *ngIf=\"personalForm.submit && (urlErr.behance == true)\" class=\"alert alert-danger\">\n                            {{ 'PROFILEEDIT.VALID_URL'|translate }}\n                          </div>\n                        </li>\n                        <li><i class=\"fa fa-pinterest-p\" aria-hidden=\"true\"></i> :\n                          <input class=\"inpField largeWidth\" type=\"text\" [(ngModel)]=\"personalForm.pinterest_link\" value=\"\"\n                            placeholder=\"\">\n                          <div *ngIf=\"personalForm.submit && (urlErr.pinterest == true)\" class=\"alert alert-danger\">\n                            {{ 'PROFILEEDIT.VALID_URL'|translate }}\n                          </div>\n                        </li>\n                      </ul>\n                    </div>\n      \n                  </div>\n       \n                 <div class=\"buttonGr\">\n                   <div class=\"row\">\n                     <div class=\"col-6\">\n                       <a class=\"btnWhite\"   (click)=\"goToCvConsult()\">{{ 'PROFILEEDIT.HELP_TOCREATE_CV'|translate }}</a>\n                     </div>\n                     <div class=\"col-6\">\n                       <div class=\"text-right\">\n       \n                         <button type=\"button\" class=\"btnGreen\" name=\"button\" (click)=updatePersonalFrom()>\n                           <span *ngIf=\"loader.personal.submit\" class=\"loader-p\"><i class=\"fa fa-cog fa-spin\"></i></span>\n                           {{ 'PROFILEEDIT.SAVE' | translate}}\n                         </button>\n                       </div>\n                     </div>\n                   </div>\n                 </div>\n       \n               </div>\n             </ng-template>\n           </ngb-tab>\n           <!-- Personal Info -->\n       \n       \n           <!-- Education -->\n           <ngb-tab id=\"education\">\n             <ng-template ngbTabTitle>\n               <div>\n                 <i class=\"fa fa-book\" aria-hidden=\"true\"></i> {{ 'PROFILE.EDUCATION' | translate }}\n               </div>\n             </ng-template>\n             <ng-template ngbTabContent>\n       \n               <div class=\"justify-content-center\">\n                 <div class=\"profile-edit-form-container\">\n                   <div class=\"alert alert-success\" *ngIf=\"educationSuccessMsg\">{{ educationSuccessMsg }}</div>\n       \n                   <div class=\"formWrap\">\n                     <label class=\"col-xl-3 noGap\" for=\"\">{{'PROFILEEDIT.DEGREE' | translate }} :</label>\n                     <span class=\"formSpan col-xl-9\">\n                       <ng-select class=\"inpField fullWidth\" [items]=\"degreelist\" [(ngModel)]=\"educationForm.degree_id\"\n                         bindLabel=\"name\" bindValue=\"id\" (change)=\"getDegreeFields()\"></ng-select>\n                       <div *ngIf=\"educationForm.submit && (educationForm.degree_id==null || educationForm.degree_id=='')\"\n                         class=\"alert alert-danger\">\n                         {{'PROFILEEDIT.DEGREE_REQUIRED' | translate }}\n                       </div>\n                     </span>\n                   </div>\n       \n                   <div class=\"formWrap\">\n                     <label class=\"col-xl-3 noGap\" for=\"\">{{'PROFILEEDIT.FIELD' | translate }} :</label>\n                     <span class=\"formSpan col-xl-9\">\n                       <ng-select class=\"inpField fullWidth\" [items]=\"degreeFieldlist\" [(ngModel)]=\"educationForm.field_id\"\n                         bindLabel=\"name\" bindValue=\"id\"></ng-select>\n                       <div *ngIf=\"educationForm.submit && (educationForm.field_id==null || educationForm.field_id=='')\" class=\"alert alert-danger\">\n                         {{'PROFILEEDIT.DEGREE_FIELD_REQUIRED' | translate }}\n                       </div>\n                     </span>\n                   </div>\n       \n                   <div class=\"formWrap\">\n                     <label class=\"col-xl-3 noGap\" for=\"\">{{'PROFILEEDIT.DATE_OF_DEGREE' | translate }} :</label>\n                     <span class=\"formSpan withSpace\">\n                       <ng-select placeholder=\"{{ 'PROFILEEDIT.DURATION_FROM' | translate}}\" class=\"inpField autoWidth\"\n                         [items]=\"years\" (change)=\"reDefineToYear($event)\" [(ngModel)]=\"educationForm.from_year\"></ng-select>\n                       <div *ngIf=\"educationForm.submit && (educationForm.from_year==null || educationForm.from_year=='')\"\n                         class=\"alert alert-danger\">\n                         {{'PROFILEEDIT.DEGREE_FROM_YEAR_REQUIRED' | translate }}\n                       </div>\n                     </span>\n                     <span class=\"formSpan\">\n                       <ng-select placeholder=\"{{ 'PROFILEEDIT.DURATION_TO' | translate}}\" class=\"inpField autoWidth withSpace\"\n                         [items]=\"toYears\" [(ngModel)]=\"educationForm.to_year\"></ng-select>\n                       <div *ngIf=\"educationForm.submit && (educationForm.to_year==null || educationForm.to_year=='')\" class=\"alert alert-danger\">\n                         {{'PROFILEEDIT.DEGREE_TO_REQUIRED' | translate }}\n                       </div>\n                     </span>\n                   </div>\n       \n                   <div class=\"addField\">\n                     <div class=\"text-right\">\n                       <button type=\"button\" name=\"button\" (click)=submitEducationFrom()>\n                         <span *ngIf=\"loader.education.submit\" class=\"loader-p\"><i class=\"fa fa-cog fa-spin\"></i></span>\n                         {{ 'PROFILEEDIT.SAVE' | translate}}</button>&nbsp;\n                       <button type=\"button\" *ngIf=\"resetBtnDisplay\" name=\"button\" (click)=\"resetEducationForm()\">{{\n                         'PROFILEEDIT.RESET' | translate}}</button>\n                     </div>\n                   </div>\n                   <div class=\"formTable\">\n                     <table class=\"table table-borderless\">\n                       <thead>\n                         <tr>\n                           <th>#</th>\n                           <th>{{'PROFILEEDIT.DEGREE' | translate }}</th>\n                           <th>{{'PROFILEEDIT.FIELD' | translate }}</th>\n                           <th>{{'PROFILEEDIT.DATE_OF_DEGREE' | translate }}</th>\n                           <th></th>\n                         </tr>\n                       </thead>\n                       <tbody>\n                         <tr *ngIf=\"loader.education.list\">\n                           <td colspan=\"5\" class=\"loader-p\"><i class=\"fa fa-cog fa-spin\"></i></td>\n                         </tr>\n                         <tr *ngFor=\"let d of userDegreelist; let i=index\">\n                           <td>{{(i+1)}} </td>\n                           <td>{{ d.degreeDetails.details[0].name }}</td>\n                           <td>{{ d.degreeFieldDetails.details[0].name }}</td>\n                           <td>\n                             {{ d.from_year }}\n                             <span *ngIf=\"d.to_year\">\n                               -\n                               {{ d.to_year }}\n                             </span>\n                           </td>\n                           <td>\n                             <a href=\"javascript:\" (click)=\"editEducation(d)\"><i class=\"fa fa-pencil\"></i></a>\n                             <a href=\"javascript:\" (click)=\"deleteEducation(d.id)\"><i class=\"fa fa-trash\"></i></a>\n                           </td>\n                         </tr>\n                         <tr *ngIf=\"userDegreelist.length === 0\">\n                           <td colspan=\"5\">{{ \"PROFILEEDIT.NO_RECORD_FOUND\" |translate }}</td>\n                         </tr>\n                       </tbody>\n                     </table>\n                   </div>\n       \n                 </div>\n               </div>\n       \n               <div class=\"buttonGr\">\n                 <div class=\"row\">\n                   <div class=\"col-6\">\n                     <a class=\"btnWhite\"  (click)=\"goToCvConsult()\">{{ 'PROFILEEDIT.HELP_TOCREATE_CV'|translate }}</a>\n                   </div>\n                   <div class=\"col-6\">\n                     <div class=\"text-right\">\n                       <button class=\"btnOrange\" type=\"button\" name=\"button\" (click)=\"setActive(tab,'personal')\"><i class=\"fa fa-arrow-left\"\n                           aria-hidden=\"true\"></i> {{ 'PROFILEEDIT.BACK'|translate }}</button>\n                       <button class=\"btnGreen\" type=\"button\" name=\"button\" (click)=\"setActive(tab,'skills')\">{{\n                         'PROFILEEDIT.NEXT'|translate }} <i class=\"fa fa-arrow-right\" aria-hidden=\"true\"></i></button>\n                     </div>\n                   </div>\n                 </div>\n               </div>\n       \n             </ng-template>\n           </ngb-tab>\n           <!-- Skills -->\n       \n           <ngb-tab id=\"skills\">\n             <ng-template ngbTabTitle><i class=\"fa fa-star\" aria-hidden=\"true\"></i> {{ 'PROFILE.SKILLS' | translate }}</ng-template>\n             <ng-template ngbTabContent>\n               <div class=\"justify-content-center\">\n                 <div class=\"profile-edit-form-container\">\n                   <div class=\"alert alert-success\" *ngIf=\"skillSuccessMsg\">{{ skillSuccessMsg }}</div>\n                   <div class=\"formWrap\">\n                     <label class=\"col-xl-3 noGap\" for=\"\">{{ \"PROFILEEDIT.SKILLS\"|translate }} :</label>\n                     <span class=\"formSpan col-xl-9\">\n                       <!-- <input class=\"inpField fullWidth\" type=\"text\" [(ngModel)]=\"skillForm.skill_name\" value=\"\" placeholder=\"{{ 'PROFILEEDIT.SKILL_NAME'|translate }}\"> -->\n                       <ng-select class=\"inpField fullWidth\" [items]=\"skillsList\" [(ngModel)]=\"skillForm.skill_id\" bindLabel=\"name\"\n                         bindValue=\"id\"></ng-select>\n       \n                       <div *ngIf=\"skillForm.submit && (skillForm.skill_id==null || skillForm.skill_id =='')\" class=\"alert alert-danger\">\n                         {{'PROFILEEDIT.SKILL_NAME_REQUIRED' | translate }}\n                       </div>\n                     </span>\n                   </div>\n       \n                   <div class=\"formWrap\">\n                     <label class=\"col-xl-3 noGap\" for=\"\">{{ \"PROFILEEDIT.DEGREE\"|translate }} :</label>\n                     <span class=\"formSpan\">\n                       <label class=\"diffRadio\">\n                         <input type=\"radio\" name=\"radio\" [checked]=\"skillForm.status==1\" (click)=\"skillForm.status=1\">\n                         <span class=\"checkmark\"></span>\n                         <span class=\"checkTxt\">{{ \"PROFILEEDIT.SKILLS_STATUS_EXCELLENT\"|translate }}</span>\n                       </label>\n                       <label class=\"diffRadio\">\n                         <input type=\"radio\" name=\"radio\" [checked]=\"skillForm.status==2\" (click)=\"skillForm.status=2\">\n                         <span class=\"checkmark\"></span>\n                         <span class=\"checkTxt\">{{ \"PROFILEEDIT.SKILLS_STATUS_VERY_GOOD\"|translate }}</span>\n                       </label>\n                       <label class=\"diffRadio\">\n                         <input type=\"radio\" name=\"radio\" [checked]=\"skillForm.status==3\" (click)=\"skillForm.status=3\">\n                         <span class=\"checkmark\"></span>\n                         <span class=\"checkTxt\">{{ \"PROFILEEDIT.SKILLS_STATUS_GOOD\"|translate }}</span>\n                       </label>\n                       <label class=\"diffRadio\">\n                         <input type=\"radio\" name=\"radio\" [checked]=\"skillForm.status==4\" (click)=\"skillForm.status=4\">\n                         <span class=\"checkmark\"></span>\n                         <span class=\"checkTxt\">{{ \"PROFILEEDIT.SKILLS_STATUS_FRESH\"|translate }}</span>\n                       </label>\n                       <div *ngIf=\"skillForm.submit && (skillForm.status==null || skillForm.status =='')\" class=\"alert alert-danger\">\n                         {{'PROFILEEDIT.SKILL_DEGREE_REQUIRED' | translate }}\n                       </div>\n                     </span>\n                   </div>\n       \n                   <div class=\"addField\">\n                     <div class=\"text-right\">\n                       <button type=\"button\" name=\"button\" (click)=\"submitSkillForm()\">\n                         <span *ngIf=\"loader.skills.submit\" class=\"loader-p\"><i class=\"fa fa-cog fa-spin\"></i></span>\n                         {{ \"PROFILEEDIT.SAVE\"|translate }}</button>\n                       &nbsp;\n                       <button type=\"button\" *ngIf=\"resetBtnDisplay\" name=\"button\" (click)=\"resetSkillForm()\">{{\n                         \"PROFILEEDIT.RESET\"|translate }}</button>\n                     </div>\n                   </div>\n       \n                   <div class=\"formTable\">\n                     <table class=\"table table-borderless\">\n                       <thead>\n                         <tr>\n                           <th>#</th>\n                           <th>{{ \"PROFILEEDIT.SKILLS\"|translate }}</th>\n                           <th>{{ \"PROFILEEDIT.DEGREE\"|translate }}</th>\n                           <th></th>\n                         </tr>\n                       </thead>\n                       <tbody>\n                         <tr *ngIf=\"loader.skills.list\">\n                           <td colspan=\"5\" class=\"loader-p\"><i class=\"fa fa-cog fa-spin\"></i></td>\n                         </tr>\n                         <tr *ngFor=\"let s of userSkilllist; let i = index\">\n                           <td>{{ (i+1) }}</td>\n                           <td>{{ s.details[0].name }}</td>\n                           <td>\n                             <span *ngIf=\"s.status==1\">{{ \"PROFILEEDIT.SKILLS_STATUS_EXCELLENT\"|translate }}</span>\n                             <span *ngIf=\"s.status==2\">{{ \"PROFILEEDIT.SKILLS_STATUS_VERY_GOOD\"|translate }}</span>\n                             <span *ngIf=\"s.status==3\">{{ \"PROFILEEDIT.SKILLS_STATUS_GOOD\"|translate }}</span>\n                             <span *ngIf=\"s.status==4\">{{ \"PROFILEEDIT.SKILLS_STATUS_FRESH\"|translate }}</span>\n                           </td>\n                           <td>\n                             <a href=\"javascript:\" (click)=\"editSkills(s)\"><i class=\"fa fa-pencil\"></i></a>\n                             <a href=\"javascript:\" (click)=\"deleteSkills(s.id)\"><i class=\"fa fa-trash\"></i></a>\n                           </td>\n                         </tr>\n                         <tr *ngIf=\"userSkilllist.length === 0\">\n                           <td colspan=\"4\">{{ \"PROFILEEDIT.NO_RECORD_FOUND\" |translate }}</td>\n                         </tr>\n                       </tbody>\n                     </table>\n                   </div>\n       \n                 </div>\n               </div>\n       \n               <div class=\"buttonGr\">\n                 <div class=\"row\">\n                   <div class=\"col-6\">\n                     <a class=\"btnWhite\"  (click)=\"goToCvConsult()\">{{ 'PROFILEEDIT.HELP_TOCREATE_CV'|translate }}</a>\n                   </div>\n                   <div class=\"col-6\">\n                     <div class=\"text-right\">\n                       <button class=\"btnOrange\" type=\"button\" name=\"button\" (click)=\"setActive(tab,'education')\"><i class=\"fa fa-arrow-left\"\n                           aria-hidden=\"true\"></i> {{ 'PROFILEEDIT.BACK'|translate }}</button>\n                       <button class=\"btnGreen\" type=\"button\" name=\"button\" (click)=\"setActive(tab,'experience')\">{{\n                         'PROFILEEDIT.NEXT'|translate }} <i class=\"fa fa-arrow-right\" aria-hidden=\"true\"></i></button>\n                     </div>\n                   </div>\n                 </div>\n               </div>\n       \n             </ng-template>\n           </ngb-tab>\n           <!-- Experience -->\n           <ngb-tab id=\"experience\">\n             <ng-template ngbTabTitle><i class=\"fa fa-suitcase\" aria-hidden=\"true\"></i> {{ 'PROFILE.EXPERIENCE' | translate }}</ng-template>\n             <ng-template ngbTabContent>\n               <div class=\"justify-content-center\">\n                 <div class=\"profile-edit-form-container\">\n                   <div class=\"alert alert-success\" *ngIf=\"experienceSuccessMsg\">{{ experienceSuccessMsg }}</div>\n                   <div class=\"alert alert-danger\" *ngIf=\"experienceErrorMsg\">{{ experienceErrorMsg }}</div>\n       \n                   <div class=\"formWrap\">\n                     <label class=\"col-xl-3 noGap\" for=\"\">{{'PROFILEEDIT.EXPERIENCE_COMAPNY_NAME' | translate }} :</label>\n                     <span class=\"formSpan col-xl-9\">\n                       <input class=\"inpField fullWidth\" type=\"text\" [(ngModel)]=\"experienceForm.company_name\" value=\"\"\n                         placeholder=\"{{'PROFILEEDIT.EXPERIENCE_COMAPNY_NAME' | translate }}\">\n                       <div *ngIf=\"experienceForm.submit && (experienceForm.company_name==null || experienceForm.company_name =='')\"\n                         class=\"alert alert-danger\">\n                         {{'PROFILEEDIT.EXPERIENCE_COMAPNY_NAME_REQUIRED' | translate }}\n                       </div>\n                     </span>\n                   </div>\n       \n                   <div class=\"formWrap\">\n                     <label class=\"col-xl-3 noGap\" for=\"\">{{'PROFILEEDIT.POSITION' | translate }} :</label>\n                     <span class=\"formSpan col-xl-9\">\n                       <ng-select class=\"inpField fullWidth\" [items]=\"positionlist\" [(ngModel)]=\"experienceForm.position_id\"\n                         bindLabel=\"name\" bindValue=\"id\"></ng-select>\n                       <div *ngIf=\"experienceForm.submit && (experienceForm.position_id==null || experienceForm.position_id=='')\"\n                         class=\"alert alert-danger\">\n                         {{'PROFILEEDIT.POSITION_REQUIRED' | translate }}\n                       </div>\n                     </span>\n                   </div>\n       \n                   <div class=\"formWrap\">\n                     <label class=\"col-xl-3 noGap\" for=\"\">{{'PROFILEEDIT.DURATION' | translate }} :</label>\n                     <span class=\"formSpan withSpace\">\n                       <ng-select placeholder=\"{{ 'PROFILEEDIT.DURATION_FROM' | translate}}\" class=\"inpField autoWidth\"\n                         [items]=\"years\" [(ngModel)]=\"experienceForm.from_year\" (change)=\"reDefineToYear($event)\"></ng-select>\n                       <div *ngIf=\"experienceForm.submit && (experienceForm.from_year==null || experienceForm.from_year=='')\"\n                         class=\"alert alert-danger\">\n                         {{'PROFILEEDIT.DURATION_FROM_YEAR_REQUIRED' | translate }}\n                       </div>\n                     </span>\n       \n                     <ng-select [disabled]=\"experienceForm.is_current\" placeholder=\"{{ 'PROFILEEDIT.DURATION_TO' | translate}}\"\n                       class=\"inpField autoWidth withSpace\" [items]=\"toYears\" [(ngModel)]=\"experienceForm.to_year\"></ng-select>\n       \n                     <label class=\"customCheck\">{{'PROFILEEDIT.EXPERIENCE_CURRENT' | translate }}\n                       <input type=\"checkbox\" [(ngModel)]=\"experienceForm.is_current\" (click)=\"checkValue($event)\">\n                       <span class=\"checkmark\"></span>\n                     </label>\n                   </div>\n       \n                   <div class=\"formWrap\">\n                     <label class=\"col-xl-3 noGap vertTop\" for=\"\">{{'PROFILEEDIT.EXPERIENCE_SUMMARY' | translate }} :</label>\n                     <textarea class=\"col-xl-9 inpField fullWidth\" type=\"text\" [(ngModel)]=\"experienceForm.summery\" value=\"\"\n                       placeholder=\"{{'PROFILEEDIT.EXPERIENCE_SUMMARY' | translate }}\"></textarea>\n                   </div>\n       \n                   <div class=\"addField\">\n                     <div class=\"text-right\">\n                       <button type=\"button\" name=\"button\" (click)=submitExperienceFrom()>\n                         <span *ngIf=\"loader.experience.submit\" class=\"loader-p\"><i class=\"fa fa-cog fa-spin\"></i></span>\n                         {{ 'PROFILEEDIT.SAVE' | translate}}</button>&nbsp;\n                       <button type=\"button\" *ngIf=\"resetBtnDisplay\" name=\"button\" (click)=resetExperienceForm()>{{\n                         'PROFILEEDIT.RESET' | translate}}</button>\n                     </div>\n                   </div>\n       \n                   <div class=\"formTable\">\n                     <table class=\"table table-borderless\">\n                       <thead>\n                         <tr>\n                           <th>#</th>\n                           <th>{{'PROFILEEDIT.POSITION' | translate }}</th>\n                           <th>{{'PROFILEEDIT.EXPERIENCE_COMAPNY_NAME' | translate }}</th>\n                           <th>{{'PROFILEEDIT.DURATION_FROM' | translate }}</th>\n                           <th>{{'PROFILEEDIT.DURATION_TO' | translate }}</th>\n                           <th>{{'PROFILEEDIT.ACTION' | translate }}</th>\n                         </tr>\n                       </thead>\n                       <tbody>\n                         <tr *ngIf=\"loader.experience.list\">\n                           <td colspan=\"5\" class=\"loader-p\"><i class=\"fa fa-cog fa-spin\"></i></td>\n                         </tr>\n                         <tr *ngFor=\"let e of userExperiencelist; let i=index\">\n                           <td>{{(i+1)}}</td>\n                           <td>{{ e.position.details[0].name }} </td>\n                           <td>{{ (e.company_name)? e.company_name: ((e.company)?e.company.details[0].name:'') }}</td>\n                           <td>{{ e.from_year }}</td>\n                           <td>{{ e.to_year }} <span *ngIf=\"e.is_current==1\">{{ 'PROFILE.EXPERIENCE_CURRENT' | translate }}</span></td>\n       \n                           <td>\n                             <a href=\"javascript:\" (click)=\"editExperience(e)\"><i class=\"fa fa-pencil\"></i></a>\n                             <a href=\"javascript:\" (click)=\"deleteExperience(e.id)\"><i class=\"fa fa-trash\"></i></a>\n                           </td>\n                         </tr>\n                         <tr *ngIf=\"userExperiencelist.length === 0\">\n                           <td colspan=\"6\">{{ \"PROFILEEDIT.NO_RECORD_FOUND\" |translate }}</td>\n                         </tr>\n                       </tbody>\n                     </table>\n                   </div>\n       \n                 </div>\n               </div>\n       \n               <div class=\"buttonGr\">\n                 <div class=\"row\">\n                   <div class=\"col-6\">\n                     <a class=\"btnWhite\"  (click)=\"goToCvConsult()\">{{ 'PROFILEEDIT.HELP_TOCREATE_CV'|translate }}</a>\n                   </div>\n                   <div class=\"col-6\">\n                     <div class=\"text-right\">\n                       <button class=\"btnOrange\" type=\"button\" name=\"button\" (click)=\"setActive(tab,'skills')\"><i class=\"fa fa-arrow-left\"\n                           aria-hidden=\"true\"></i> {{ 'PROFILEEDIT.BACK'|translate }}</button>\n                       <button class=\"btnGreen\" type=\"button\" name=\"button\" (click)=\"setActive(tab,'certificate')\">{{\n                         'PROFILEEDIT.NEXT'|translate }} <i class=\"fa fa-arrow-right\" aria-hidden=\"true\"></i></button>\n                     </div>\n                   </div>\n                 </div>\n               </div>\n             </ng-template>\n           </ngb-tab>\n           <!-- Experience -->\n       \n           <!-- Certificate -->\n           <ngb-tab id=\"certificate\">\n             <ng-template ngbTabTitle><i class=\"fa fa-graduation-cap\" aria-hidden=\"true\"></i> {{ 'PROFILEEDIT.CERTIFICATE' |\n               translate }}</ng-template>\n             <ng-template ngbTabContent>\n               <div class=\"justify-content-center\">\n                 <div class=\"profile-edit-form-container\">\n                   <div class=\"alert alert-success\" *ngIf=\"certificateSuccessMsg\">{{ certificateSuccessMsg }}</div>\n       \n                   <div class=\"formWrap\">\n                     <label class=\"col-xl-3 noGap\" for=\"\">{{ 'PROFILEEDIT.CERTIFICATE' | translate }} :</label>\n                     <span class=\"formSpan col-xl-9\">\n                       <input class=\"inpField fullWidth\" type=\"text\" [(ngModel)]=\"certificateForm.certificate_name\" value=\"\"\n                         placeholder=\"{{ 'PROFILEEDIT.CERTIFICATE' | translate }}\">\n                       <div *ngIf=\"certificateForm.submit && (certificateForm.certificate_name==null || certificateForm.certificate_name =='')\"\n                         class=\"alert alert-danger\">\n                         {{ 'PROFILEEDIT.CERTIFICATE_NAME_REQUIRED' | translate }}\n                       </div>\n                     </span>\n                   </div>\n       \n                   <div class=\"formWrap\">\n                     <label class=\"col-xl-3 noGap vertTop\" for=\"\">{{ 'PROFILEEDIT.CERTIFICATE_SUMMARY' | translate }} :</label>\n                     <textarea class=\"col-xl-9 inpField fullWidth\" [(ngModel)]=\"certificateForm.summery\" placeholder=\"{{ 'PROFILEEDIT.CERTIFICATE_SUMMARY' | translate }}\"></textarea>\n                   </div>\n       \n                   <div class=\"formWrap\">\n                     <label class=\"col-xl-3 noGap\" for=\"\">{{'PROFILEEDIT.DURATION' | translate }} :</label>\n                     <span class=\"formSpan withSpace\">\n                       <ng-select placeholder=\"{{ 'PROFILEEDIT.DURATION_FROM' | translate}}\" class=\"inpField autoWidth\"\n                         [items]=\"years\" [(ngModel)]=\"certificateForm.from_year\" (change)=\"reDefineToYear($event)\"></ng-select>\n                       <div *ngIf=\"certificateForm.submit && (certificateForm.from_year==null || certificateForm.from_year=='')\"\n                         class=\"alert alert-danger\">\n                         {{'PROFILEEDIT.DURATION_FROM_YEAR_REQUIRED' | translate }}\n                       </div>\n                     </span>\n       \n                     <span class=\"formSpan withSpace\">\n                       <ng-select placeholder=\"{{ 'PROFILEEDIT.DURATION_TO' | translate}}\" class=\"inpField autoWidth withSpace\"\n                         [items]=\"toYears\" [(ngModel)]=\"certificateForm.to_year\"></ng-select>\n                       <div *ngIf=\"certificateForm.submit && (certificateForm.to_year==null || certificateForm.to_year=='')\"\n                         class=\"alert alert-danger\">\n                         {{'PROFILEEDIT.DEGREE_TO_REQUIRED' | translate }}\n                       </div>\n                     </span>\n                   </div>\n       \n                   <div class=\"formWrap\">\n                     <label class=\"col-xl-3 noGap\" for=\"\">{{'PROFILEEDIT.UPLOAD' | translate }} :</label>\n                     <div class=\"fileUpload\">\n                       <label for=\"file-upload\" class=\"custom-file-upload\">{{'PROFILEEDIT.BROWSE' | translate }}</label>\n                       <input id=\"file-upload\" type=\"file\" accept=\".png, .jpg, .jpeg, .gif\" (change)=\"onFileChanged($event)\" />\n                     </div>\n                     <span class=\"uploadPic\" *ngIf=\"certificatePicture\"><img [src]=\"certificatePicture\" alt=\"\"></span>\n       \n                     <div class=\"alert alert-danger\" *ngIf=\"pictureError.status == 1\">{{ pictureError.msg }}</div>\n                     <div class=\"alert alert-danger\" *ngIf=\"pictureSizeError.status == 1\">{{ pictureSizeError.msg }}</div>\n       \n                   </div>\n       \n                   <div class=\"addField\">\n                     <div class=\"text-right\">\n                       <button type=\"button\" name=\"button\" (click)=submitCertificateFrom()>\n                         <span *ngIf=\"loader.certificate.submit\" class=\"loader-p\"><i class=\"fa fa-cog fa-spin\"></i></span>\n                         {{ 'PROFILEEDIT.SAVE' | translate}}</button>&nbsp;\n                       <button type=\"button\" name=\"button\" *ngIf=\"resetBtnDisplay\" (click)=\"resetCertificateForm()\">{{\n                         'PROFILEEDIT.RESET' | translate}}</button>\n                     </div>\n                   </div>\n       \n                   <div class=\"formTable\">\n                     <table class=\"table table-borderless\">\n                       <thead>\n                         <tr>\n                           <th>#</th>\n                           <th>{{'PROFILEEDIT.CERTIFICATE_NAME' | translate }}</th>\n                           <th class=\"text-center\">{{'PROFILEEDIT.DURATION_FROM' | translate }}</th>\n                           <th class=\"text-center\">{{'PROFILEEDIT.DURATION_TO' | translate }}</th>\n                           <th class=\"text-center\">{{'PROFILEEDIT.ACTION' | translate }}</th>\n       \n                         </tr>\n                       </thead>\n                       <tbody>\n                         <tr *ngIf=\"loader.certificate.list\">\n                           <td colspan=\"5\" class=\"loader-p\"><i class=\"fa fa-cog fa-spin\"></i></td>\n                         </tr>\n                         <tr *ngFor=\"let c of userCertificatelist; let i=index\">\n                           <td>{{(i+1)}}</td>\n                           <td>{{ c.certificate_name }}</td>\n                           <td class=\"text-center\">{{ c.from_year }}</td>\n                           <td class=\"text-center\">{{ c.to_year }}</td>\n       \n                           <td class=\"text-center\">\n                             <a href=\"javascript:\" (click)=\"editCertificate(c)\"><i class=\"fa fa-pencil\"></i></a>\n                             <a href=\"javascript:\" (click)=\"deleteCertificate(c.id)\"><i class=\"fa fa-trash\"></i></a>\n                           </td>\n                         </tr>\n                         <tr *ngIf=\"userCertificatelist.length === 0\">\n                           <td colspan=\"5\">{{ \"PROFILEEDIT.NO_RECORD_FOUND\" |translate }}</td>\n                         </tr>\n                       </tbody>\n                     </table>\n                   </div>\n       \n                 </div>\n               </div>\n       \n               <div class=\"buttonGr\">\n                 <div class=\"row\">\n                   <div class=\"col-6\">\n                     <a class=\"btnWhite\"  (click)=\"goToCvConsult()\">{{ 'PROFILEEDIT.HELP_TOCREATE_CV'|translate }}</a>\n                   </div>\n                   <div class=\"col-6\">\n                     <div class=\"text-right\">\n                       <button class=\"btnOrange\" type=\"button\" name=\"button\" (click)=\"setActive(tab,'experience')\"><i class=\"fa fa-arrow-left\"\n                           aria-hidden=\"true\"></i> {{ 'PROFILEEDIT.BACK'|translate }}</button>\n                       <button class=\"btnGreen\" type=\"button\" name=\"button\"  (click)=\"setActive(tab,'projects')\">{{\n                           'PROFILEEDIT.NEXT'|translate }} <i class=\"fa fa-arrow-right\" aria-hidden=\"true\"></i></button>\n                     </div>\n                   </div>\n                 </div>\n               </div>\n       \n             </ng-template>\n           </ngb-tab>\n       \n           <!-- Projects -->\n       \n           <ngb-tab id=\"projects\">\n             <ng-template ngbTabTitle><i class=\"fa fa-graduation-cap\" aria-hidden=\"true\"></i> {{ 'PROFILEEDIT.PROJECTS' |\n               translate }}</ng-template>\n             <ng-template ngbTabContent>\n               <div class=\"justify-content-center\">\n                 <div class=\"profile-edit-form-container\">\n                   <div class=\"alert alert-success\" *ngIf=\"projectSuccessMsg\">{{ projectSuccessMsg }}</div>\n                   <div class=\"alert alert-danger\" *ngIf=\"projectErrorMsg\">{{ projectErrorMsg }}</div>\n       \n                   <div class=\"formWrap\">\n                     <label class=\"col-xl-3 noGap\" for=\"\">{{ 'PROFILEEDIT.PROJECT_NAME' | translate }} :</label>\n                     <span class=\"formSpan col-xl-9\">\n                       <input class=\"inpField fullWidth\" type=\"text\" [(ngModel)]=\"projectForm.name\" value=\"\" placeholder=\"{{ 'PROFILEEDIT.PROJECT_NAME' | translate }}\">\n                       <div *ngIf=\"projectForm.submit && (projectForm.name==null || projectForm.name =='')\" class=\"alert alert-danger\">\n                         {{ 'PROFILEEDIT.PROJECT_NAME_REQUIRED' | translate }}\n                       </div>\n                     </span>\n                   </div>\n       \n                   <div class=\"formWrap\">\n                     <label class=\"col-xl-3 noGap \" for=\"\">{{ 'PROFILEEDIT.PROJECT_COMPANY' | translate }} :</label>\n                     <span class=\"formSpan col-xl-9\">\n                     <ng-select placeholder=\"{{ 'PROFILEEDIT.PROJECT_COMPANY' | translate }}\"  class=\"inpField fullWidth\" [items]=\"userCompanyList\" bindLabel=\"name\" bindValue=\"id\" [(ngModel)]=\"projectForm.cId\"></ng-select>\n       \n                     <div *ngIf=\"projectForm.submit && (projectForm.cId==null || projectForm.cId =='')\" class=\"alert alert-danger\">\n                       {{ 'PROFILEEDIT.PROJECT_COMPANY_REQUIRED' | translate }}\n                     </div>\n                     </span>\n                   </div>\n       \n                   <div class=\"formWrap\">\n                     <label class=\"col-xl-3 noGap\" for=\"\">{{'PROFILEEDIT.DURATION' | translate }} :</label>\n                     <span class=\"formSpan withSpace\">\n                       <input class=\"inpField autoWidth\" type=\"text\" [(ngModel)]=\"projectForm.from\" value=\"\" placeholder=\"{{ 'PROFILEEDIT.DURATION_FROM' | translate }}\" bsDatepicker [bsValue]=\"bsValue\" [bsConfig]=\"{ dateInputFormat: 'YYYY-MM-DD' }\" [maxDate]=\"maxDay\" autocomplete=\"off\" readonly>\n       \n                       <div *ngIf=\"projectForm.submit && (projectForm.from==null || projectForm.from=='')\" class=\"alert alert-danger\">\n                         {{'PROFILEEDIT.DURATION_FROM_YEAR_REQUIRED' | translate }}\n                       </div>\n                     </span>\n       \n                     <span class=\"formSpan withSpace\">\n                       <input class=\"inpField autoWidth\" type=\"text\" [(ngModel)]=\"projectForm.to\" value=\"\" placeholder=\"{{ 'PROFILEEDIT.DURATION_TO' | translate }}\" bsDatepicker [bsValue]=\"bsValue\" [bsConfig]=\"{ dateInputFormat: 'YYYY-MM-DD' }\" [maxDate]=\"maxDay\" autocomplete=\"off\" readonly>\n       \n       \n                       <div *ngIf=\"projectForm.submit && (projectForm.to==null || projectForm.to=='')\" class=\"alert alert-danger\">\n                         {{'PROFILEEDIT.DEGREE_TO_REQUIRED' | translate }}\n                       </div>\n                     </span>\n                   </div>\n                   <div class=\"addField\">\n                     <div class=\"text-right\">\n                       <button type=\"button\" name=\"button\" (click)=submitProjectFrom()>\n                         <span *ngIf=\"loader.project.submit\" class=\"loader-p\"><i class=\"fa fa-cog fa-spin\"></i></span>\n                         {{ 'PROFILEEDIT.SAVE' | translate}}</button>&nbsp;\n                       <button type=\"button\" name=\"button\" *ngIf=\"resetBtnDisplay\" (click)=\"resetProjectForm()\">{{\n                         'PROFILEEDIT.RESET' | translate}}</button>\n                     </div>\n                   </div>\n       \n                   <div class=\"formTable\">\n                     <table class=\"table table-borderless\">\n                       <thead>\n                         <tr>\n                           <th>#</th>\n                           <th>{{'PROFILEEDIT.PROJECT_NAME' | translate }}</th>\n                           <th>{{'PROFILEEDIT.PROJECT_COMPANY' | translate }}</th>\n                           <th class=\"text-center\">{{'PROFILEEDIT.DURATION_FROM' | translate }}</th>\n                           <th class=\"text-center\">{{'PROFILEEDIT.DURATION_TO' | translate }}</th>\n                           <th class=\"text-center\">{{'PROFILEEDIT.ACTION' | translate }}</th>\n       \n                         </tr>\n                       </thead>\n                       <tbody>\n                         <tr *ngIf=\"loader.project.list\">\n                           <td colspan=\"5\" class=\"loader-p\"><i class=\"fa fa-cog fa-spin\"></i></td>\n                         </tr>\n                         <tr *ngFor=\"let project of userProjectlist; let i=index\">\n                           <td>{{(i+1)}}</td>\n                           <td>{{ project.name }}</td>\n                           <td>{{ project.company.company_name }}</td>\n                           <td class=\"text-center\">{{ project.from_date|date }}</td>\n                           <td class=\"text-center\">{{ project.to_date|date }}</td>\n       \n                           <td class=\"text-center\">\n                             <a href=\"javascript:\" (click)=\"editProject(project)\"><i class=\"fa fa-pencil\"></i></a>\n                             <a href=\"javascript:\" (click)=\"deleteProject(project.id)\"><i class=\"fa fa-trash\"></i></a>\n                           </td>\n                         </tr>\n                         <tr *ngIf=\"userProjectlist.length === 0\">\n                           <td colspan=\"6\">{{ \"PROFILEEDIT.NO_RECORD_FOUND\" |translate }}</td>\n                         </tr>\n                       </tbody>\n                     </table>\n                   </div>\n       \n                 </div>\n               </div>\n       \n               <div class=\"buttonGr\">\n                 <div class=\"row\">\n                   <div class=\"col-6\">\n                     <a class=\"btnWhite\"  (click)=\"goToCvConsult()\">{{ 'PROFILEEDIT.HELP_TOCREATE_CV'|translate }}</a>\n                   </div>\n                   <div class=\"col-6\">\n                     <div class=\"text-right\">\n                       <button class=\"btnOrange\" type=\"button\" name=\"button\" (click)=\"setActive(tab,'certificate')\"><i class=\"fa fa-arrow-left\"\n                           aria-hidden=\"true\"></i> {{ 'PROFILEEDIT.BACK'|translate }}</button>\n                       <!-- <button class=\"btnGreen\" type=\"button\" name=\"button\"  (click)=\"setActive(tab,1)\">Next <i class=\"fa fa-arrow-right\" aria-hidden=\"true\"></i></button> -->\n                     </div>\n                   </div>\n                 </div>\n               </div>\n       \n             </ng-template>\n           </ngb-tab>\n         </ngb-tabset>\n       </div> \n\n</div>\n\n</div>\n\n<ng-template #content let-modal>\n  <h2><span>{{ 'PROFILEEDIT.EDIT_PROFILE_PHOTO' |translate }}</span></h2>\n  <span class=\"modalClose\" (click)=\"modal.dismiss('Cross click')\"></span>\n  <div class=\"modal-body\">\n\n    <div>\n      <div class=\"alert alert-success\" *ngIf=\"successMsg\">{{ successMsg }}</div>\n      <div class=\"alert alert-danger\" *ngIf=\"errorMsg\">{{ errorMsg }}</div>\n    </div>\n\n    <span class=\"file-upload-all\">\n      <label class=\"custom-file-upload\" for=\"custom-input\">{{ 'COMMON.UPLOAD_PHOTO' | translate }}</label>\n      <input id=\"custom-input\" type=\"file\" accept=\".png, .jpg, .jpeg, .gif\" (change)=\"fileChangeListener($event, cropper)\">\n    </span>\n    <button class=\"cropSave\" (click)=\"savePhoto()\">{{ 'PROFILE.SAVE_BUTTON' | translate }}</button>\n\n    <div class=\"imgCrop\">\n      <div class=\"\">\n        <img-cropper #cropper [image]=\"data\" [settings]=\"cropperSettings\"></img-cropper>\n      </div>\n      <div class=\"cropDisp\" *ngIf=\"data.image\">\n        <img [src]=\"data.image\" [width]=\"cropperSettings.croppedWidth\" [height]=\"cropperSettings.croppedHeight\">\n      </div>\n\n      <!-- <div class=\"\" *ngIf=\"data.image\">\n        <img-cropper [image]=\"data\" [settings]=\"cropperSettings\"></img-cropper>\n      </div>\n      <div class=\"cropDisp\" *ngIf=\"data.image\">\n        <img  [src]=\"data.image\" [width]=\"cropperSettings.croppedWidth\" [height]=\"cropperSettings.croppedHeight\">\n      </div> -->\n      <div class=\"clearfix\"></div>\n\n    </div>\n  </div>\n</ng-template>"

/***/ }),

/***/ "./src/app/profile/profileedit/profileedit.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/profile/profileedit/profileedit.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZWVkaXQvcHJvZmlsZWVkaXQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/profile/profileedit/profileedit.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/profile/profileedit/profileedit.component.ts ***!
  \**************************************************************/
/*! exports provided: ProfileeditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileeditComponent", function() { return ProfileeditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ngx_img_cropper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-img-cropper */ "./node_modules/ngx-img-cropper/index.js");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _services_cvcard_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/cvcard.service */ "./src/app/services/cvcard.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _globalConfig__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../globalConfig */ "./src/app/globalConfig.ts");
/* harmony import */ var ng_date_format__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-date-format */ "./node_modules/ng-date-format/fesm5/ng-date-format.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_13__);
/*****************************************************
# Company Name          :
# Author                :
# Created Date          : 31-01-2019
# Module                : ProfileeditComponent
# Object name           : ProfileeditComponent
# Functionality         : All profile edit operations
# Purpose               : constructor, ngOnInit, setActive, open, getDismissReason, openEditPicModal, fileChangeListener, savePhoto, openAlertModal, removeProfilePic, changeTabEvent, getEducationData, getDegreeFields, resetEducationForm, submitEducationFrom, editEducation, deleteEducation, getSkillData, resetSkillForm, submitSkillForm, editSkills, deleteSkills, checkValue, getExperienceData, resetExperienceForm, submitExperienceFrom, editExperience, deleteExperience, onFileChanged, getCertificateData, resetCertificateForm, submitCertificateFrom, editCertificate, deleteCertificate, validURL, personalDetails, updatePersonalFrom, getCityList
*******************************************************/














var ProfileeditComponent = /** @class */ (function () {
    /* Function Name : constructor
      * Author :
      * Created Date : 31-01-2019
      * Modified Date : *
      * Purpose : to define the all helpful objects and defin the languages data
      * PARAMS :
      */
    function ProfileeditComponent(fb, modalService, uService, translate, cService, cvCardService, sanitizer, route, dateFormater) {
        var _this = this;
        this.fb = fb;
        this.modalService = modalService;
        this.uService = uService;
        this.translate = translate;
        this.cService = cService;
        this.cvCardService = cvCardService;
        this.sanitizer = sanitizer;
        this.route = route;
        this.dateFormater = dateFormater;
        this.maxDay = new Date(); // 
        this.successMsg = ''; // success message
        this.errorMsg = ''; // error message
        this.profilePic = ''; // user profile picture
        this.years = []; // from years
        this.toYears = []; // to years
        this.dates = []; // dates 
        this.confirmMessage = ''; // confirm message
        this.resetBtnDisplay = true; // reset button display status
        this.countryCodes = [];
        // EDUCATION CONFIG //
        this.educationForm = {
            "id": null,
            "degree_id": null,
            "field_id": null,
            'from_year': null,
            'to_year': null,
            "error": 0,
            "submit": false
        };
        this.educationSuccessMsg = ''; // education success message
        this.educationResponsedata = null; // education response data
        this.userDegreelist = []; // user degree list
        this.degreelist = []; // degree list from db
        this.degreeFieldlist = []; // digree field list
        // EDUCATION CONFIG  END//
        // SKILLS CONFIG //
        this.skillForm = {
            "id": null,
            "skill_id": null,
            "status": null,
            "error": 0,
            "submit": false
        };
        this.skillSuccessMsg = ''; // skills success message
        this.userSkilllist = []; // user skills list
        this.skillsList = []; // skill list from db
        // SKILLS CONFIG  END//
        // EXPERIENCE CONFIG //
        this.experienceForm = {
            "id": null,
            "company_name": null,
            "position_id": null,
            'from_year': null,
            'is_current': null,
            "summery": null,
            "error": 0,
            "submit": false
        };
        this.experienceSuccessMsg = ''; //experience success message
        this.experienceErrorMsg = ''; // esperience error message
        this.experienceResponsedata = null; // experience response data
        this.userExperiencelist = []; // user experience list
        this.positionlist = []; // position list from db
        // EXPERIENCE CONFIG  END//
        // CERTIFICATE CONFIG //
        this.certificateForm = {
            "id": null,
            "certificate_name": null,
            "summery": null,
            'from_year': null,
            'to_year': null,
            'picture': null,
            'file': null,
            "error": 0,
            "submit": false
        };
        this.certificateSuccessMsg = ''; // certificate success message
        this.certificateResponsedata = null; // certificate response data
        this.userCertificatelist = []; // user certificate list
        this.certificatePicture = ''; // certificate picture
        this.pictureError = {
            status: 0,
            msg: ''
        };
        this.pictureSizeError = {
            status: 0,
            msg: ''
        };
        // pictureErrorMsg: string = '';
        // CERTIFICATE CONFIG  END//
        // PERSONAL CONFIG //
        this.personalForm = {
            "id": null,
            "first_name": null,
            "last_name": null,
            "family_name": null,
            "profile_pic": null,
            "email": null,
            "website": null,
            "facebook_link": null,
            "deviantart_link": null,
            "behance_link": null,
            "twitter_link": null,
            "dribbble_link": null,
            "pinterest_link": null,
            "mobile_no": null,
            "mobile_code": null,
            "country_id": null,
            "city_id": null,
            "dob_year": null,
            "dob_month": null,
            "dob_date": null,
            "address": null,
            "about_me": '',
            "video_link": '',
            "error": 0,
            "submit": false
        };
        // Project form
        this.projectForm = {
            "id": null,
            "name": null,
            "cId": null,
            "from": null,
            "to": null,
            "error": 0,
            "submit": false
        };
        this.userProjectlist = []; // user project list
        this.userCompanyList = []; // user company list
        this.projectSuccessMsg = ''; // success message for user project manage
        this.projectErrorMsg = ''; // error message for user project manage
        this.urlErr = {
            'facebook': false,
            'deviantart': false,
            'behance': false,
            'twitter': false,
            'dribbble': false,
            'pinterest': false,
            'video_link': 0
        };
        this.personalSuccessMsg = ''; // personal success message
        this.personalErrorMsg = ''; // personal error message
        this.personalResponsedata = null; // personal response data
        this.countryList = []; // country list from db
        this.cityList = []; // city list from db
        this.monthList = []; // month list
        this.dayList = []; // day list
        this.loader = {
            'personal': {
                'list': false,
                'submit': false
            },
            'education': {
                'list': false,
                'submit': false
            },
            'skills': {
                'list': false,
                'submit': false
            },
            'experience': {
                'list': false,
                'submit': false
            },
            'certificate': {
                'list': false,
                'submit': false
            },
            'project': {
                'list': false,
                'submit': false
            },
        };
        this.cService.activelang.subscribe(function (lang) {
            // this language will be used as a fallback when a translation isn't found in the current language
            translate.setDefaultLang(lang);
            // the lang to use, if the lang isn't available, it will use the current loader to get them
            translate.use(lang);
        });
        translate.get('PROFILEEDIT.PICTURE_VALIDATION_ERROR').subscribe(function (tData) {
            _this.pictureError.msg = tData;
        });
        this.data = {};
        this.cService.profilePic.subscribe(function (pic) {
            if (pic) {
                _this.personalForm.profile_pic = pic;
                _this.profilePic = _this.sanitizer.bypassSecurityTrustUrl(pic);
                _this.data.image = _this.profilePic;
            }
            else {
                _this.personalForm.profile_pic = null;
                _this.profilePic = "";
                _this.data.image = "";
            }
        });
        this.cropperSettings = new ngx_img_cropper__WEBPACK_IMPORTED_MODULE_6__["CropperSettings"]();
        this.cropperSettings.noFileInput = true;
        var currentYear = new Date().getFullYear();
        for (var y = currentYear; y > currentYear - 100; y--) {
            this.years.push(y);
        }
    }
    /* Function Name : ngOnInit
      * Author :
      * Created Date : 31-01-2019
      * Modified Date : *
      * Purpose : to get data after html load
      * PARAMS :
      */
    ProfileeditComponent.prototype.ngOnInit = function () {
        // this.countryCodes = CountryCodes.Country;
        // let selectCode = this.countryCodes.find((i) => {
        //   return i.code == 'SA';
        // });
        // this.personalForm.mobile_code = selectCode.dial_code;
        // month list
        for (var m = 1; m <= 12; m++) {
            this.monthList.push({
                id: (m < 10) ? '0' + m : m.toString(),
                name: (m < 10) ? '0' + m : m.toString(),
            });
        }
        for (var d = 1; d <= 31; d++) {
            this.dayList.push({
                id: (d < 10) ? '0' + d : d.toString(),
                name: (d < 10) ? '0' + d : d.toString(),
            });
        }
        this.personalDetails();
        this.getEducationData();
        this.getSkillData();
        this.getExperienceData();
        this.getCertificateData();
        this.getProjectDetails();
    };
    ProfileeditComponent.prototype.reDefineToYear = function (event) {
        this.toYears = [];
        this.educationForm.to_year = null;
        this.experienceForm.to_year = null;
        this.certificateForm.to_year = null;
        var currentYear = new Date().getFullYear();
        for (var y = event; y <= currentYear; y++) {
            this.toYears.push(y);
        }
    };
    /* Function Name : setActive
      * Author :
      * Created Date : 31-01-2019
      * Modified Date : *
      * Purpose : to set active tab
      * PARAMS : tab, activeTab
      */
    ProfileeditComponent.prototype.setActive = function (tab, activeTab) {
        tab.select(activeTab);
    };
    /* Function Name : open
      * Author :
      * Created Date : 31-01-2019
      * Modified Date : *
      * Purpose : to set open modal
      * PARAMS : content
      */
    ProfileeditComponent.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    /* Function Name : getDismissReason
      * Author :
      * Created Date : 31-01-2019
      * Modified Date : *
      * Purpose : to dismiss modal
      * PARAMS : reason
      */
    ProfileeditComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    /* Function Name : openEditPicModal
      * Author :
      * Created Date : 31-01-2019
      * Modified Date : *
      * Purpose : to open edit profile picture modal
      * PARAMS : content
      */
    ProfileeditComponent.prototype.openEditPicModal = function (content) {
        this.modalService.open(content, { size: 'lg', centered: true, windowClass: 'DefaultModal' });
    };
    /* Function Name : fileChangeListener
      * Author :
      * Created Date : 31-01-2019
      * Modified Date : *
      * Purpose : to get file object on image upload
      * PARAMS : $event, cropper
      */
    ProfileeditComponent.prototype.fileChangeListener = function ($event, cropper) {
        var image = new Image();
        var file = $event.target.files[0];
        if (file && (file.type == 'image/jpeg' || file.type == 'image/png' || file.type == 'image/gif')) {
            if (file.size < 250000) {
                var myReader = new FileReader();
                var that = this;
                myReader.onloadend = function (loadEvent) {
                    image.src = loadEvent.target.result;
                    setTimeout(function () {
                        cropper.setImage(image);
                    }, 10);
                };
                myReader.readAsDataURL(file);
            }
            else {
                this.translate.get(['COMMON.ERROR', 'PROFILEEDIT.PROFILE_PIC_SIZE_ERROR']).subscribe(function (tData) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_13___default()({
                        title: tData['COMMON.ERROR'],
                        text: tData['PROFILEEDIT.PROFILE_PIC_SIZE_ERROR'],
                        icon: 'error'
                    });
                });
            }
        }
        else {
            this.translate.get(['COMMON.ERROR', 'PROFILEEDIT.PROFILE_PIC_TYPE_ERROR']).subscribe(function (tData) {
                sweetalert__WEBPACK_IMPORTED_MODULE_13___default()({
                    title: tData['COMMON.ERROR'],
                    text: tData['PROFILEEDIT.PROFILE_PIC_TYPE_ERROR'],
                    icon: 'error'
                });
            });
        }
    };
    /* Function Name : savePhoto
      * Author :
      * Created Date : 31-01-2019
      * Modified Date : *
      * Purpose : to save photo
      * PARAMS :
      */
    ProfileeditComponent.prototype.savePhoto = function () {
        var _this = this;
        if (this.data.image) {
            this.uService.changeProfilePic({
                "pic": this.data['image']
            }).subscribe(function (res) {
                if (res.statustext === 'success') {
                    localStorage.setItem("_propic", _this.data['image']);
                    _this.cService.setProfilePic(_this.data['image']);
                    _this.errorMsg = '';
                    _this.successMsg = res.message;
                }
                else {
                    _this.successMsg = '';
                    _this.errorMsg = res.message;
                }
            });
        }
        else {
            this.translate.get(['COMMON.ERROR', 'PROFILEEDIT.PROFILE_PIC_TYPE_ERROR']).subscribe(function (tData) {
                sweetalert__WEBPACK_IMPORTED_MODULE_13___default()({
                    title: tData['COMMON.ERROR'],
                    text: tData['PROFILEEDIT.PROFILE_PIC_TYPE_ERROR'],
                    icon: 'error'
                });
            });
        }
    };
    /* Function Name : openAlertModal
      * Author :
      * Created Date : 31-01-2019
      * Modified Date : *
      * Purpose : to open alert modal
      * PARAMS : alertContent
      */
    ProfileeditComponent.prototype.openAlertModal = function (alertContent) {
        this.modalService.open(document.getElementById(alertContent), { size: 'sm', centered: true, windowClass: 'DefaultModal' });
    };
    /* Function Name : removeProfilePic
      * Author :
      * Created Date : 31-01-2019
      * Modified Date : *
      * Purpose : to remove profile picture
      * PARAMS :
      */
    ProfileeditComponent.prototype.removeProfilePic = function () {
        var _this = this;
        this.translate.get(['COMMON.ARE_YOU_SURE', 'PROFILEEDIT.CONFIRMTODELETEPROFILEPIC']).subscribe(function (tData) {
            sweetalert__WEBPACK_IMPORTED_MODULE_13___default()({
                title: tData['COMMON.ARE_YOU_SURE'],
                text: tData['PROFILEEDIT.CONFIRMTODELETEPROFILEPIC'],
                icon: "warning",
                buttons: {
                    cancel: true,
                    confirm: true,
                },
            }).then(function (willDelete) {
                if (willDelete) {
                    _this.uService.removeProfilePic().subscribe(function (response) {
                        if (response.statustext === 'success') {
                            localStorage.removeItem("_propic");
                            _this.profilePic = "";
                            _this.cService.setProfilePic("");
                        }
                    });
                }
            });
        });
    };
    /* Function Name : changeTabEvent
      * Author :
      * Created Date : 31-01-2019
      * Modified Date : *
      * Purpose : to get data on tab change
      * PARAMS : e
      */
    ProfileeditComponent.prototype.changeTabEvent = function (e) {
        var currentYear = new Date().getFullYear();
        for (var y = currentYear; y > currentYear - 100; y--) {
            this.years.push(y);
        }
        this.toYears = this.years;
        // switch (e.nextId) {
        //   case "personal":
        //     this.personalDetails();
        //     break;
        //   case "education":
        //     this.getEducationData();
        //     break;
        //   case "skills":
        //     this.getSkillData();
        //     break;
        //   case "experience":
        //     this.getExperienceData();
        //     break;
        //   case "certificate":
        //     this.getCertificateData();
        //     break;
        //   case "projects":
        //     this.getProjectDetails();
        //     break;
        // }
    };
    // EDUCATION TAB //
    /* Function Name : getEducationData
      * Author :
      * Created Date : 31-01-2019
      * Modified Date : *
      * Purpose : to get education data
      * PARAMS :
      */
    ProfileeditComponent.prototype.getEducationData = function () {
        var _this = this;
        this.loader.education.list = true;
        this.resetEducationForm();
        this.uService.getUserDetailsInEditView('education')
            .subscribe(function (responseData) {
            if (responseData.statustext === 'success') {
                _this.educationResponsedata = responseData.data;
                if (responseData.data.degree) {
                    _this.degreelist = responseData.data.degree;
                }
                if (responseData.data.user.degree) {
                    _this.userDegreelist = responseData.data.user.degree;
                }
            }
            _this.loader.education.list = false;
        });
    };
    /* Function Name : getDegreeFields
      * Author :
      * Created Date : 31-01-2019
      * Modified Date : *
      * Purpose : to get degree field data
      * PARAMS :
      */
    ProfileeditComponent.prototype.getDegreeFields = function () {
        var degId = this.educationForm.degree_id;
        if (this.educationResponsedata.degreeField) {
            var degreeFileds = this.educationResponsedata.degreeField;
            this.educationForm.field_id = null;
            this.degreeFieldlist = [];
            this.degreeFieldlist = degreeFileds.filter(function (i) {
                return i.degree_id == degId;
            });
        }
    };
    /* Function Name : resetEducationForm
      * Author :
      * Created Date : 31-01-2019
      * Modified Date : *
      * Purpose : to reset education form
      * PARAMS :
      */
    ProfileeditComponent.prototype.resetEducationForm = function () {
        this.educationForm = {
            "id": null,
            "degree_id": null,
            "field_id": null,
            'from_year': null,
            'to_year': null,
            'error': 0,
            'submit': false
        };
        this.resetBtnDisplay = true;
    };
    /* Function Name : submitEducationFrom
      * Author :
      * Created Date : 31-01-2019
      * Modified Date : *
      * Purpose : to submit education form
      * PARAMS :
      */
    ProfileeditComponent.prototype.submitEducationFrom = function () {
        var _this = this;
        this.educationForm.submit = true;
        if (!this.educationForm.degree_id || !this.educationForm.field_id || !this.educationForm.from_year || !this.educationForm.to_year) {
            this.educationForm.error = 1;
        }
        else {
            var userDegree = this.userDegreelist;
            if ((this.educationForm.id && userDegree.find(function (item) { return ((item.id != _this.educationForm.id)) && (item.degree_id == _this.educationForm.degree_id); })) || (!this.educationForm.id && userDegree.find(function (item) { return (item.degree_id == _this.educationForm.degree_id); }))) {
                this.translate.get(['COMMON.ERROR', 'COMMON.DEGREE_EXIST']).subscribe(function (tData) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_13___default()({
                        title: tData['COMMON.ERROR'],
                        text: tData['COMMON.DEGREE_EXIST'],
                        icon: 'error'
                    });
                    _this.educationForm.error = 1;
                });
            }
            else {
                this.educationForm.error = 0;
            }
        }
        if (this.educationForm.error == 0) {
            this.loader.education.submit = true;
            if (this.educationForm.id) {
                this.uService.editEducationData(this.educationForm)
                    .subscribe(function (response) {
                    _globalConfig__WEBPACK_IMPORTED_MODULE_11__["SCROLL_TO_TOP"]();
                    if (response.statustext === 'success') {
                        _this.translate.get(['COMMON.SUCCESS']).subscribe(function (tData) {
                            sweetalert__WEBPACK_IMPORTED_MODULE_13___default()({
                                title: tData['COMMON.SUCCESS'],
                                text: response.message,
                                icon: 'success'
                            });
                        });
                        _this.getEducationData();
                        _this.resetEducationForm();
                    }
                    _this.loader.education.submit = false;
                });
            }
            else {
                this.uService.addEducationData(this.educationForm)
                    .subscribe(function (response) {
                    _globalConfig__WEBPACK_IMPORTED_MODULE_11__["SCROLL_TO_TOP"]();
                    if (response.statustext === 'success') {
                        _this.translate.get(['COMMON.SUCCESS']).subscribe(function (tData) {
                            sweetalert__WEBPACK_IMPORTED_MODULE_13___default()({
                                title: tData['COMMON.SUCCESS'],
                                text: response.message,
                                icon: 'success'
                            });
                        });
                        _this.getEducationData();
                        _this.resetEducationForm();
                    }
                    _this.loader.education.submit = false;
                });
            }
        }
    };
    /* Function Name : editEducation
      * Author :
      * Created Date : 31-01-2019
      * Modified Date : *
      * Purpose : to get education data on edit mode in form
      * PARAMS : educationDetails
      */
    ProfileeditComponent.prototype.editEducation = function (educationDetails) {
        this.resetBtnDisplay = false;
        this.educationForm["id"] = educationDetails.id;
        this.educationForm["degree_id"] = educationDetails.degree_id;
        this.getDegreeFields();
        this.educationForm["field_id"] = educationDetails.degree_field_id;
        this.educationForm["from_year"] = educationDetails.from_year;
        this.educationForm["to_year"] = educationDetails.to_year;
    };
    /* Function Name : deleteEducation
      * Author :
      * Created Date : 31-01-2019
      * Modified Date : *
      * Purpose : to delete education details
      * PARAMS : degreeId
      */
    ProfileeditComponent.prototype.deleteEducation = function (degreeId) {
        var _this = this;
        this.translate.get(['COMMON.ARE_YOU_SURE', 'PROFILEEDIT.CONFIRM_TO_DELETE_DEGREE']).subscribe(function (tData) {
            sweetalert__WEBPACK_IMPORTED_MODULE_13___default()({
                title: tData['COMMON.ARE_YOU_SURE'],
                text: tData['PROFILEEDIT.CONFIRM_TO_DELETE_DEGREE'],
                icon: "warning",
                buttons: {
                    cancel: true,
                    confirm: true,
                },
            }).then(function (willDelete) {
                if (willDelete) {
                    _this.loader.education.list = true;
                    _this.uService.deleteEducationData({ "user_degree_id": degreeId })
                        .subscribe(function (response) {
                        if (response.statustext === 'success') {
                            _this.educationSuccessMsg = response.message;
                            _this.getEducationData();
                            setTimeout(function () {
                                _this.educationSuccessMsg = '';
                            }, 5000);
                        }
                    });
                }
            });
        });
    };
    // EDUCATION TAB CLOSE//
    // SKILLS TAB //
    /* Function Name : getSkillData
      * Author :
      * Created Date : 31-01-2019
      * Modified Date : *
      * Purpose : to get user skill data
      * PARAMS :
      */
    ProfileeditComponent.prototype.getSkillData = function () {
        var _this = this;
        this.loader.skills.list = true;
        this.resetSkillForm();
        this.uService.getUserDetailsInEditView('skills')
            .subscribe(function (responseData) {
            if (responseData.statustext === 'success') {
                if (responseData.data.user.skills) {
                    _this.userSkilllist = responseData.data.user.skills;
                    _this.skillsList = responseData.data.skills;
                }
            }
            _this.loader.skills.list = false;
        });
    };
    /* Function Name : resetSkillForm
      * Author :
      * Created Date : 31-01-2019
      * Modified Date : *
      * Purpose : to reset skill form
      * PARAMS :
      */
    ProfileeditComponent.prototype.resetSkillForm = function () {
        this.skillForm = {
            "id": null,
            "skill_id": null,
            "status": null,
            "error": 0,
            "submit": false
        };
        this.resetBtnDisplay = true;
    };
    /* Function Name : submitSkillForm
      * Author :
      * Created Date : 31-01-2019
      * Modified Date : *
      * Purpose : to submit skill form
      * PARAMS :
      */
    ProfileeditComponent.prototype.submitSkillForm = function () {
        var _this = this;
        this.skillForm.submit = true;
        if (!this.skillForm.skill_id || !this.skillForm.status) {
            this.skillForm.error = 1;
        }
        else {
            var userSkills = this.userSkilllist;
            if ((this.skillForm.id && userSkills.find(function (item) { return ((item.id != _this.skillForm.id)) && (item.skill_id == _this.skillForm.skill_id); })) || (!this.skillForm.id && userSkills.find(function (item) { return (item.skill_id == _this.skillForm.skill_id); }))) {
                this.translate.get(['COMMON.ERROR', 'COMMON.SKILL_EXIST']).subscribe(function (tData) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_13___default()({
                        title: tData['COMMON.ERROR'],
                        text: tData['COMMON.SKILL_EXIST'],
                        icon: 'error'
                    });
                    _this.skillForm.error = 1;
                });
            }
            else {
                this.skillForm.error = 0;
            }
        }
        if (this.skillForm.error == 0) {
            this.loader.skills.submit = true;
            if (this.skillForm.id) {
                this.uService.editSkillData(this.skillForm)
                    .subscribe(function (response) {
                    _globalConfig__WEBPACK_IMPORTED_MODULE_11__["SCROLL_TO_TOP"]();
                    if (response.statustext === 'success') {
                        _this.translate.get(['COMMON.SUCCESS']).subscribe(function (tData) {
                            sweetalert__WEBPACK_IMPORTED_MODULE_13___default()({
                                title: tData['COMMON.SUCCESS'],
                                text: response.message,
                                icon: 'success'
                            });
                        });
                        _this.getSkillData();
                        _this.resetSkillForm();
                    }
                    _this.loader.skills.submit = false;
                });
            }
            else {
                this.uService.addSkillData(this.skillForm)
                    .subscribe(function (response) {
                    _globalConfig__WEBPACK_IMPORTED_MODULE_11__["SCROLL_TO_TOP"]();
                    if (response.statustext === 'success') {
                        _this.translate.get(['COMMON.SUCCESS']).subscribe(function (tData) {
                            sweetalert__WEBPACK_IMPORTED_MODULE_13___default()({
                                title: tData['COMMON.SUCCESS'],
                                text: response.message,
                                icon: 'success'
                            });
                        });
                        _this.getSkillData();
                        _this.resetSkillForm();
                    }
                    _this.loader.skills.submit = false;
                });
            }
        }
    };
    /* Function Name : editSkills
      * Author :
      * Created Date : 31-01-2019
      * Modified Date : *
      * Purpose : to get skill data on edit mode
      * PARAMS :  skillDetails
      */
    ProfileeditComponent.prototype.editSkills = function (skillDetails) {
        this.resetBtnDisplay = false;
        this.skillForm["id"] = skillDetails.id;
        this.skillForm["skill_id"] = skillDetails.skill_id;
        this.skillForm["status"] = skillDetails.status;
    };
    /* Function Name : deleteSkills
      * Author :
      * Created Date : 31-01-2019
      * Modified Date : *
      * Purpose : to delete skill details
      * PARAMS :  skillId
      */
    ProfileeditComponent.prototype.deleteSkills = function (skillId) {
        var _this = this;
        this.translate.get(['COMMON.ARE_YOU_SURE', 'PROFILEEDIT.CONFIRM_TO_DELETE_SKILL']).subscribe(function (tData) {
            sweetalert__WEBPACK_IMPORTED_MODULE_13___default()({
                title: tData['COMMON.ARE_YOU_SURE'],
                text: tData['PROFILEEDIT.CONFIRM_TO_DELETE_SKILL'],
                icon: "warning",
                buttons: {
                    cancel: true,
                    confirm: true,
                },
            }).then(function (willDelete) {
                if (willDelete) {
                    _this.loader.skills.list = true;
                    _this.uService.deleteSkillData({ "user_skill_id": skillId })
                        .subscribe(function (response) {
                        if (response.statustext === 'success') {
                            _this.translate.get(['COMMON.SUCCESS']).subscribe(function (tData) {
                                sweetalert__WEBPACK_IMPORTED_MODULE_13___default()({
                                    title: tData['COMMON.SUCCESS'],
                                    text: response.message,
                                    icon: 'success'
                                });
                            });
                            _this.getSkillData();
                        }
                    });
                }
            });
        });
    };
    // SKILLS TAB CLOSE //
    // EXPERIENCE TAB //
    /* Function Name : checkValue
      * Author :
      * Created Date : 31-01-2019
      * Modified Date : *
      * Purpose : to check the value
      * PARAMS :  event
      */
    ProfileeditComponent.prototype.checkValue = function (event) {
        this.experienceForm.is_current = (event.target.checked) ? 1 : 0;
        if (this.experienceForm.is_current === 1) {
            this.experienceForm.to_year = null;
        }
    };
    /* Function Name : getExperienceData
      * Author :
      * Created Date : 31-01-2019
      * Modified Date : *
      * Purpose : to get experience data of a user
      * PARAMS :
      */
    ProfileeditComponent.prototype.getExperienceData = function () {
        var _this = this;
        this.loader.experience.list = true;
        this.resetExperienceForm();
        this.uService.getUserDetailsInEditView('experience')
            .subscribe(function (responseData) {
            //console.log(responseData.data.user.experience);
            if (responseData.statustext === 'success') {
                _this.experienceResponsedata = responseData.data;
                if (responseData.data.positionList) {
                    _this.positionlist = responseData.data.positionList;
                }
                if (responseData.data.user.experience) {
                    _this.userExperiencelist = responseData.data.user.experience;
                }
            }
            _this.loader.experience.list = false;
        });
    };
    /* Function Name : resetExperienceForm
      * Author :
      * Created Date : 31-01-2019
      * Modified Date : *
      * Purpose : to reset experience form
      * PARAMS :
      */
    ProfileeditComponent.prototype.resetExperienceForm = function () {
        this.experienceForm = {
            "id": null,
            "company_name": null,
            "position_id": null,
            'from_year': null,
            'to_year': null,
            'is_current': null,
            'summery': null,
            "error": 0,
            "submit": false
        };
        this.resetBtnDisplay = true;
    };
    /* Function Name : submitExperienceFrom
      * Author :
      * Created Date : 31-01-2019
      * Modified Date : *
      * Purpose : to submit experience form
      * PARAMS :
      */
    ProfileeditComponent.prototype.submitExperienceFrom = function () {
        var _this = this;
        this.experienceForm.submit = true;
        this.experienceForm.company_name = this.experienceForm.company_name.trim();
        if (!this.experienceForm.company_name || !this.experienceForm.position_id || !this.experienceForm.from_year) {
            this.experienceForm.error = 1;
        }
        else {
            var duplicateExperience = this.userExperiencelist.filter(function (item) {
                return (item.position.id == _this.experienceForm.position_id &&
                    item.company_name == _this.experienceForm.company_name &&
                    item.from_year == _this.experienceForm.from_year &&
                    item.to_year == _this.experienceForm.to_year);
            });
            if (duplicateExperience && duplicateExperience.length > 0) {
                this.translate.get(['COMMON.ERROR', 'PROFILEEDIT.DUPLICATE_EXPERIENCE_ERROR']).subscribe(function (tData) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_13___default()({
                        title: tData['COMMON.ERROR'],
                        text: tData['PROFILEEDIT.DUPLICATE_EXPERIENCE_ERROR'],
                        icon: 'error'
                    });
                });
                this.experienceForm.error = 1;
            }
            else {
                this.experienceForm.error = 0;
            }
        }
        if (this.experienceForm.error == 0) {
            this.loader.experience.submit = true;
            if (this.experienceForm.id) {
                this.uService.editExperienceData(this.experienceForm)
                    .subscribe(function (response) {
                    _globalConfig__WEBPACK_IMPORTED_MODULE_11__["SCROLL_TO_TOP"]();
                    if (response.statustext === 'success') {
                        _this.translate.get(['COMMON.SUCCESS']).subscribe(function (tData) {
                            sweetalert__WEBPACK_IMPORTED_MODULE_13___default()({
                                title: tData['COMMON.SUCCESS'],
                                text: response.message,
                                icon: 'success'
                            });
                        });
                        _this.getExperienceData();
                        _this.resetExperienceForm();
                    }
                    else if (response.statustext === 'error') {
                        _this.experienceErrorMsg = response.message;
                        _this.translate.get(['COMMON.ERROR']).subscribe(function (tData) {
                            sweetalert__WEBPACK_IMPORTED_MODULE_13___default()({
                                title: tData['COMMON.ERROR'],
                                text: response.message,
                                icon: 'error'
                            });
                        });
                    }
                    _this.loader.experience.submit = false;
                });
            }
            else {
                this.uService.addExperienceData(this.experienceForm)
                    .subscribe(function (response) {
                    _globalConfig__WEBPACK_IMPORTED_MODULE_11__["SCROLL_TO_TOP"]();
                    if (response.statustext === 'success') {
                        _this.translate.get(['COMMON.SUCCESS']).subscribe(function (tData) {
                            sweetalert__WEBPACK_IMPORTED_MODULE_13___default()({
                                title: tData['COMMON.SUCCESS'],
                                text: response.message,
                                icon: 'success'
                            });
                        });
                        _this.getExperienceData();
                        _this.resetExperienceForm();
                    }
                    else if (response.statustext === 'error') {
                        _this.translate.get(['COMMON.ERROR']).subscribe(function (tData) {
                            sweetalert__WEBPACK_IMPORTED_MODULE_13___default()({
                                title: tData['COMMON.ERROR'],
                                text: response.message,
                                icon: 'error'
                            });
                        });
                    }
                    _this.loader.experience.submit = false;
                });
            }
        }
    };
    /* Function Name : editExperience
      * Author :
      * Created Date : 31-01-2019
      * Modified Date : *
      * Purpose : to get data in edit mode
      * PARAMS :  experienceDetails
      */
    ProfileeditComponent.prototype.editExperience = function (experienceDetails) {
        this.resetBtnDisplay = false;
        this.experienceForm["id"] = experienceDetails.id;
        this.experienceForm["company_name"] = experienceDetails.company_name;
        this.experienceForm["position_id"] = experienceDetails.position_id;
        this.experienceForm["from_year"] = experienceDetails.from_year;
        this.experienceForm["to_year"] = experienceDetails.to_year;
        this.experienceForm["is_current"] = experienceDetails.is_current;
        this.experienceForm["summery"] = experienceDetails.summery;
    };
    /* Function Name : deleteExperience
      * Author :
      * Created Date : 31-01-2019
      * Modified Date : *
      * Purpose : to delete experience details
      * PARAMS :  experienceId
      */
    ProfileeditComponent.prototype.deleteExperience = function (experienceId) {
        var _this = this;
        this.translate.get(['COMMON.ARE_YOU_SURE', 'PROFILEEDIT.CONFIRM_TO_DELETE_EXPERIENCE']).subscribe(function (tData) {
            sweetalert__WEBPACK_IMPORTED_MODULE_13___default()({
                title: tData['COMMON.ARE_YOU_SURE'],
                text: tData['PROFILEEDIT.CONFIRM_TO_DELETE_EXPERIENCE'],
                icon: "warning",
                buttons: {
                    cancel: true,
                    confirm: true,
                },
            }).then(function (willDelete) {
                if (willDelete) {
                    _this.loader.experience.list = true;
                    _this.uService.deleteExperienceData({ "user_experience_id": experienceId })
                        .subscribe(function (response) {
                        if (response.statustext === 'success') {
                            _this.translate.get(['COMMON.SUCCESS']).subscribe(function (tData) {
                                sweetalert__WEBPACK_IMPORTED_MODULE_13___default()({
                                    title: tData['COMMON.SUCCESS'],
                                    text: response.message,
                                    icon: 'success'
                                });
                            });
                            _this.getExperienceData();
                        }
                    });
                }
            });
        });
    };
    // EXPERIENCE TAB CLOSE //
    // CERTIFICATE TAB //
    /* Function Name : onFileChanged
      * Author :
      * Created Date : 31-01-2019
      * Modified Date : *
      * Purpose : to get image data on file browse
      * PARAMS :  event
      */
    ProfileeditComponent.prototype.onFileChanged = function (event) {
        var _this = this;
        //this.certificateForm.file = event.target.files[0];
        this.certificatePicture = '';
        this.certificateForm.picture = '';
        this.pictureError.status = 0;
        var uploadImage = (event.target.files[0]) ? event.target.files[0] : '';
        if (uploadImage && uploadImage.type.indexOf('image/') == -1) {
            this.pictureError.status = 1;
            return false;
        }
        else {
            this.pictureError.status = 0;
        }
        if (uploadImage && uploadImage.size > 500000) {
            this.pictureSizeError.status = 1;
            this.translate.get('PROFILEEDIT.CERTIFICATE_PIC_SIZE_ERROR').subscribe(function (tData) {
                _this.pictureSizeError.msg = tData;
            });
            return false;
        }
        else {
            this.pictureSizeError.status = 0;
        }
        var reader = new FileReader();
        reader.readAsDataURL(uploadImage);
        reader.onload = function () {
            _this.certificatePicture = reader.result;
            _this.certificateForm.picture = reader.result;
        };
        // console.log(this.certificateForm.file);
    };
    /* Function Name : getCertificateData
      * Author :
      * Created Date : 31-01-2019
      * Modified Date : *
      * Purpose : to get certificate data
      * PARAMS :
      */
    ProfileeditComponent.prototype.getCertificateData = function () {
        var _this = this;
        this.loader.certificate.list = true;
        this.resetCertificateForm();
        this.uService.getUserDetailsInEditView('certificate')
            .subscribe(function (responseData) {
            if (responseData.statustext === 'success') {
                _this.certificateResponsedata = responseData.data;
                if (responseData.data.user.certificates) {
                    _this.userCertificatelist = responseData.data.user.certificates;
                }
            }
            _this.loader.certificate.list = false;
        });
    };
    /* Function Name : resetCertificateForm
      * Author :
      * Created Date : 31-01-2019
      * Modified Date : *
      * Purpose : to reset certificate form
      * PARAMS :
      */
    ProfileeditComponent.prototype.resetCertificateForm = function () {
        this.certificateForm = {
            "id": null,
            "certificate_name": null,
            "summery": null,
            'from_year': null,
            'to_year': null,
            'picture': null,
            'error': 0,
            'submit': false
        };
        this.certificatePicture = '';
        this.certificateForm.submit = false;
        this.resetBtnDisplay = true;
        this.pictureError.status = 0;
        this.pictureSizeError.status = 0;
    };
    /* Function Name : submitCertificateFrom
      * Author :
      * Created Date : 31-01-2019
      * Modified Date : *
      * Purpose : to submit certificate form
      * PARAMS :
      */
    ProfileeditComponent.prototype.submitCertificateFrom = function () {
        var _this = this;
        this.certificateForm.submit = true;
        this.certificateForm.certificate_name = this.certificateForm.certificate_name.trim();
        if (!this.certificateForm.certificate_name || !this.certificateForm.from_year || !this.certificateForm.to_year) {
            this.certificateForm.error = 1;
        }
        else {
            this.certificateForm.error = 0;
        }
        if (this.certificateForm.error == 0) {
            this.loader.certificate.submit = true;
            if (this.certificateForm.id) {
                this.uService.editCertificateData(this.certificateForm)
                    .subscribe(function (response) {
                    _globalConfig__WEBPACK_IMPORTED_MODULE_11__["SCROLL_TO_TOP"]();
                    if (response.statustext === 'success') {
                        _this.translate.get(['COMMON.SUCCESS']).subscribe(function (tData) {
                            sweetalert__WEBPACK_IMPORTED_MODULE_13___default()({
                                title: tData['COMMON.SUCCESS'],
                                text: response.message,
                                icon: 'success'
                            });
                        });
                        _this.getCertificateData();
                        _this.resetCertificateForm();
                    }
                    _this.loader.certificate.submit = false;
                });
            }
            else {
                this.uService.addCertificateData(this.certificateForm)
                    .subscribe(function (response) {
                    _globalConfig__WEBPACK_IMPORTED_MODULE_11__["SCROLL_TO_TOP"]();
                    if (response.statustext === 'success') {
                        _this.translate.get(['COMMON.SUCCESS']).subscribe(function (tData) {
                            sweetalert__WEBPACK_IMPORTED_MODULE_13___default()({
                                title: tData['COMMON.SUCCESS'],
                                text: response.message,
                                icon: 'success'
                            });
                        });
                        _this.getCertificateData();
                        _this.resetCertificateForm();
                    }
                    _this.loader.certificate.submit = false;
                });
            }
        }
    };
    /* Function Name : editCertificate
      * Author :
      * Created Date : 31-01-2019
      * Modified Date : *
      * Purpose : to get data on edit mode
      * PARAMS :  certificateDetails
      */
    ProfileeditComponent.prototype.editCertificate = function (certificateDetails) {
        this.resetBtnDisplay = false;
        this.certificateForm["id"] = certificateDetails.id;
        this.certificateForm["certificate_name"] = certificateDetails.certificate_name;
        this.certificateForm["summery"] = certificateDetails.summery;
        this.certificateForm["from_year"] = certificateDetails.from_year;
        this.certificateForm["to_year"] = certificateDetails.to_year;
        if (certificateDetails.picture) {
            this.certificatePicture = _globalConfig__WEBPACK_IMPORTED_MODULE_11__["s3URL"] + "certificates/" + certificateDetails.picture;
        }
        else {
            this.certificatePicture = '';
        }
    };
    /* Function Name : deleteCertificate
      * Author :
      * Created Date : 31-01-2019
      * Modified Date : *
      * Purpose : to delete certificate data
      * PARAMS :  certificateId
      */
    ProfileeditComponent.prototype.deleteCertificate = function (certificateId) {
        var _this = this;
        this.translate.get(['COMMON.ARE_YOU_SURE', 'PROFILEEDIT.CONFIRM_TO_DELETE_CERTIFICATE']).subscribe(function (tData) {
            sweetalert__WEBPACK_IMPORTED_MODULE_13___default()({
                title: tData['COMMON.ARE_YOU_SURE'],
                text: tData['PROFILEEDIT.CONFIRM_TO_DELETE_CERTIFICATE'],
                icon: "warning",
                buttons: {
                    cancel: true,
                    confirm: true,
                },
            }).then(function (willDelete) {
                if (willDelete) {
                    _this.loader.certificate.list = true;
                    _this.uService.deleteCertificateData({ "user_certificate_id": certificateId })
                        .subscribe(function (response) {
                        if (response.statustext === 'success') {
                            _this.translate.get(['COMMON.SUCCESS']).subscribe(function (tData) {
                                sweetalert__WEBPACK_IMPORTED_MODULE_13___default()({
                                    title: tData['COMMON.SUCCESS'],
                                    text: response.message,
                                    icon: 'success'
                                });
                            });
                            _this.getCertificateData();
                        }
                    });
                }
            });
        });
    };
    // CERTIFICATE TAB CLOSE //
    /* Function Name : validURL
  * Author :
  * Created Date : 31-01-2019
  * Modified Date : *
  * Purpose : to check the valid url
  * PARAMS :  myURL
  */
    // PERSONAL TAB //
    ProfileeditComponent.prototype.validURL = function (myURL) {
        var pattern = new RegExp(/(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/);
        return pattern.test(myURL);
    };
    /* Function Name : personalDetails
      * Author :
      * Created Date : 31-01-2019
      * Modified Date : *
      * Purpose : to get personal details
      * PARAMS :
      */
    ProfileeditComponent.prototype.personalDetails = function () {
        var _this = this;
        this.loader.personal.list = true;
        this.personalForm.error = 0;
        this.personalForm.submit = false;
        this.personalSuccessMsg = '';
        this.personalErrorMsg = '';
        this.uService.getUserDetailsInEditView('personal')
            .subscribe(function (responseData) {
            if (responseData.statustext === 'success') {
                if (responseData.data.country) {
                    _this.countryList = responseData.data.country;
                }
                if (responseData.data.country_ph_list) {
                    _this.countryCodes = responseData.data.country_ph_list;
                }
                if (responseData.data.user) {
                    if (new Date(responseData.data.user.dob)) {
                        _this.personalForm.dob_year = _this.dateFormater.transform(responseData.data.user.dob, 'yyyy');
                        _this.personalForm.dob_month = _this.dateFormater.transform(responseData.data.user.dob, 'MM');
                        _this.personalForm.dob_date = _this.dateFormater.transform(responseData.data.user.dob, 'dd');
                    }
                    _this.personalForm.first_name = responseData.data.user.first_name;
                    _this.personalForm.last_name = responseData.data.user.last_name;
                    _this.personalForm.family_name = responseData.data.user.family_name;
                    _this.personalForm.email = responseData.data.user.email;
                    _this.personalForm.website = responseData.data.user.website;
                    _this.personalForm.mobile_no = responseData.data.user.mobile_no;
                    _this.personalForm.mobile_code = responseData.data.user.mobile_code;
                    _this.personalForm.facebook_link = responseData.data.user.facebook_link;
                    _this.personalForm.behance_link = responseData.data.user.behance_link;
                    _this.personalForm.deviantart_link = responseData.data.user.deviantart_link;
                    _this.personalForm.twitter_link = responseData.data.user.twitter_link;
                    _this.personalForm.dribbble_link = responseData.data.user.dribbble_link;
                    _this.personalForm.pinterest_link = responseData.data.user.pinterest_link;
                    _this.personalForm.country_id = responseData.data.user.country_id;
                    _this.personalForm.address = responseData.data.user.address;
                    _this.personalForm.about_me = responseData.data.user.about_me;
                    _this.personalForm.video_link = responseData.data.user.video_link;
                    _this.getCityList();
                    _this.personalForm.city_id = responseData.data.user.city_id;
                }
            }
            _this.loader.personal.list = false;
        });
    };
    /* Function Name : updatePersonalFrom
      * Author :
      * Created Date : 31-01-2019
      * Modified Date : *
      * Purpose : to update personal info
      * PARAMS :
      */
    ProfileeditComponent.prototype.updatePersonalFrom = function () {
        var _this = this;
        this.personalForm.submit = true;
        var formPostData = this.personalForm;
        this.urlErr = {
            'facebook': false,
            'deviantart': false,
            'behance': false,
            'twitter': false,
            'dribbble': false,
            'pinterest': false,
            'video_link': 0
        };
        this.personalForm.first_name = this.personalForm.first_name.trim();
        this.personalForm.last_name = this.personalForm.last_name.trim();
        this.personalForm.email = this.personalForm.email.trim();
        this.personalForm.mobile_no = this.personalForm.mobile_no.toString().trim();
        if (!this.personalForm.first_name ||
            !this.personalForm.last_name ||
            !this.personalForm.email ||
            !this.personalForm.mobile_no ||
            this.personalForm.mobile_no.length != 10 ||
            !this.personalForm.country_id ||
            this.personalForm.country_id == '' ||
            !this.personalForm.city_id ||
            this.personalForm.city_id == '') {
            this.personalForm.error = 1;
        }
        else {
            this.personalForm.error = 0;
        }
        if (this.personalForm.video_link && (this.validURL(this.personalForm.video_link) == false)) {
            this.urlErr.video_link = 1;
            this.personalForm.error = 1;
        }
        else if (this.personalForm.video_link && this.personalForm.video_link.indexOf("youtube.com") == -1 && this.personalForm.video_link.indexOf("youtu.be") == -1) {
            this.urlErr.video_link = 2;
            this.personalForm.error = 1;
        }
        if (this.personalForm.facebook_link && (this.validURL(this.personalForm.facebook_link) == false)) {
            this.urlErr.facebook = true;
            this.personalForm.error = 1;
        }
        if (this.personalForm.behance_link && (this.validURL(this.personalForm.behance_link) == false)) {
            this.urlErr.behance = true;
            this.personalForm.error = 1;
        }
        if (this.personalForm.deviantart_link && (this.validURL(this.personalForm.deviantart_link) == false)) {
            this.urlErr.deviantart = true;
            this.personalForm.error = 1;
        }
        if (this.personalForm.twitter_link && (this.validURL(this.personalForm.twitter_link) == false)) {
            this.urlErr.twitter = true;
            this.personalForm.error = 1;
        }
        if (this.personalForm.dribbble_link && (this.validURL(this.personalForm.dribbble_link) == false)) {
            this.personalForm.error = 1;
            this.urlErr.dribbble = true;
        }
        if (this.personalForm.pinterest_link && (this.validURL(this.personalForm.pinterest_link) == false)) {
            this.personalForm.error = 1;
            this.urlErr.pinterest = true;
        }
        if (this.personalForm.error == 0) {
            this.loader.personal.submit = true;
            this.uService.updatePersonalData(formPostData)
                .subscribe(function (responseData) {
                _globalConfig__WEBPACK_IMPORTED_MODULE_11__["SCROLL_TO_TOP"]();
                if (responseData.statustext === 'success') {
                    _this.translate.get(['COMMON.SUCCESS']).subscribe(function (tData) {
                        sweetalert__WEBPACK_IMPORTED_MODULE_13___default()({
                            title: tData['COMMON.SUCCESS'],
                            text: responseData.message,
                            icon: 'success'
                        });
                    });
                    var updatedProfileName = _this.personalForm.first_name + ' ' + _this.personalForm.last_name;
                    _this.cService.setProfileName(updatedProfileName);
                }
                else if (responseData.statustext === 'error') {
                    _this.translate.get(['COMMON.ERROR']).subscribe(function (tData) {
                        sweetalert__WEBPACK_IMPORTED_MODULE_13___default()({
                            title: tData['COMMON.ERROR'],
                            text: responseData.message,
                            icon: 'error'
                        });
                    });
                }
                _this.loader.personal.submit = false;
            });
        }
        else {
            _globalConfig__WEBPACK_IMPORTED_MODULE_11__["SCROLL_TO_TOP"]();
        }
    };
    /* Function Name : getCityList
      * Author :
      * Created Date : 31-01-2019
      * Modified Date : *
      * Purpose : to get city list
      * PARAMS :
      */
    ProfileeditComponent.prototype.getCityList = function () {
        var _this = this;
        this.cityList = [];
        this.personalForm.city_id = null;
        var countryId = this.personalForm.country_id;
        this.cService.getCityList(countryId)
            .subscribe(function (responseData) {
            if (responseData.statustext === 'success') {
                _this.cityList = responseData.data;
            }
        });
    };
    // PERSONAL TAB CLOSE //
    /* Function Name : getProjectDetails
      * Author :
      * Created Date : 14-03-2019
      * Modified Date : *
      * Purpose : to get user project details
      * PARAMS :
    */
    ProfileeditComponent.prototype.getProjectDetails = function () {
        var _this = this;
        this.loader.project.list = true;
        this.resetProjectForm();
        this.uService.getUserDetailsInEditView('project')
            .subscribe(function (responseData) {
            if (responseData.statustext === 'success') {
                // this.certificateResponsedata = responseData.data;
                if (responseData.data.company) {
                    _this.userCompanyList = responseData.data.company;
                }
                if (responseData.data.user.projects) {
                    _this.userProjectlist = responseData.data.user.projects;
                }
            }
            _this.loader.project.list = false;
        });
    };
    /* Function Name : resetProjectForm
      * Author :
      * Created Date : 14-03-2019
      * Modified Date : *
      * Purpose : to reset project form
      * PARAMS :
    */
    ProfileeditComponent.prototype.resetProjectForm = function () {
        this.projectForm = {
            id: null,
            name: null,
            cId: null,
            from: null,
            to: null,
            error: 0,
            submit: false
        };
    };
    /* Function Name : submitProjectFrom
      * Author :
      * Created Date : 14-03-2019
      * Modified Date : *
      * Purpose : to submit project form
      * PARAMS :
    */
    ProfileeditComponent.prototype.submitProjectFrom = function () {
        var _this = this;
        this.projectForm.submit = true;
        this.projectForm.error = 0;
        if (!this.projectForm.name || !this.projectForm.cId || !this.projectForm.from || !this.projectForm.to) {
            this.projectForm.error = 1;
        }
        if (this.projectForm.error == 0) {
            this.loader.project.submit = true;
            this.projectForm.cId = btoa(this.projectForm.cId);
            this.projectForm.from = new Date(this.projectForm.from).getTime();
            this.projectForm.to = new Date(this.projectForm.to).getTime();
            var action = null;
            if (this.projectForm.id) {
                action = this.uService.editProject(this.projectForm);
            }
            else {
                action = this.uService.addProject(this.projectForm);
            }
            action
                .subscribe(function (responseData) {
                if (responseData.statustext == 'success') {
                    _this.getProjectDetails();
                    _this.translate.get(['COMMON.SUCCESS']).subscribe(function (tData) {
                        sweetalert__WEBPACK_IMPORTED_MODULE_13___default()({
                            title: tData['COMMON.SUCCESS'],
                            text: responseData.message,
                            icon: 'success'
                        });
                    });
                }
                else {
                    _this.translate.get(['COMMON.ERROR']).subscribe(function (tData) {
                        sweetalert__WEBPACK_IMPORTED_MODULE_13___default()({
                            title: tData['COMMON.ERROR'],
                            text: responseData.message,
                            icon: 'error'
                        });
                    });
                }
                _this.loader.project.submit = false;
            });
        }
    };
    /* Function Name : editProject
      * Author :
      * Created Date : 14-03-2019
      * Modified Date : *
      * Purpose : to get  project form data on edit mode
      * PARAMS :  project
    */
    ProfileeditComponent.prototype.editProject = function (project) {
        this.projectForm = {
            id: btoa(project.id),
            name: project.name,
            cId: project.company_id,
            from: new Date(project.from_date),
            to: new Date(project.to_date),
            error: 0,
            submit: false
        };
    };
    /* Function Name : deleteProject
      * Author :
      * Created Date : 14-03-2019
      * Modified Date : *
      * Purpose : to delete a project
      * PARAMS :  projectId
    */
    ProfileeditComponent.prototype.deleteProject = function (projectId) {
        var _this = this;
        if (projectId) {
            this.translate.get(['COMMON.ARE_YOU_SURE', 'PROFILEEDIT.CONFIRM_TO_DELETE_PROJECT']).subscribe(function (tData) {
                sweetalert__WEBPACK_IMPORTED_MODULE_13___default()({
                    title: tData['COMMON.ARE_YOU_SURE'],
                    text: tData['PROFILEEDIT.CONFIRM_TO_DELETE_PROJECT'],
                    icon: "warning",
                    buttons: {
                        cancel: true,
                        confirm: true,
                    },
                }).then(function (willDelete) {
                    if (willDelete) {
                        _this.uService.deleteProject({ "id": btoa(projectId) })
                            .subscribe(function (responseData) {
                            if (responseData.statustext == 'success') {
                                _this.getProjectDetails();
                                _this.translate.get(['COMMON.SUCCESS']).subscribe(function (tData) {
                                    sweetalert__WEBPACK_IMPORTED_MODULE_13___default()({
                                        title: tData['COMMON.SUCCESS'],
                                        text: responseData.message,
                                        icon: 'success'
                                    });
                                });
                            }
                            else {
                                _this.translate.get(['COMMON.ERROR']).subscribe(function (tData) {
                                    sweetalert__WEBPACK_IMPORTED_MODULE_13___default()({
                                        title: tData['COMMON.ERROR'],
                                        text: responseData.message,
                                        icon: 'error'
                                    });
                                });
                            }
                            _this.loader.project.submit = false;
                        });
                    }
                });
            });
        }
    };
    /* Function Name : saveDefaultCard
      * Author :
      * Created Date : 30-07-2019
      * Modified Date : *
      * Purpose : to save default card of a user
      * PARAMS :
    */
    ProfileeditComponent.prototype.saveDefaultCard = function () {
        this.cvCardService.saveDefaultCard()
            .subscribe(function (responseData) { });
    };
    /* Function Name : checkUserAllInfoForDefaultCvBild
  * Author :
  * Created Date : 23-07-2019
  * Modified Date : *
  * Purpose : to check user info to build default cv
  * PARAMS :
  */
    ProfileeditComponent.prototype.checkUserAllInfoForDefaultCvBild = function () {
        var _this = this;
        if (this.profilePic &&
            this.personalForm.about_me &&
            this.personalForm.first_name &&
            this.personalForm.last_name &&
            this.personalForm.mobile_no &&
            this.personalForm.address &&
            this.personalForm.email &&
            this.personalForm.facebook_link &&
            this.personalForm.twitter_link &&
            this.personalForm.behance_link &&
            this.userDegreelist.length > 0 &&
            this.userExperiencelist.length > 0 &&
            this.userProjectlist.length > 0 &&
            this.userSkilllist.length > 0) {
            var personalData = this.personalForm;
            personalData['city_name'] = this.cityList.find(function (item) {
                return item.id = _this.personalForm.city_id;
            }).name;
            personalData['country_name'] = this.countryList.find(function (item) {
                return item.id = _this.personalForm.country_id;
            }).name;
            personalData['website'] = (this.personalForm.website) ? this.personalForm.website : '';
            var cvInfo = {
                "personal": personalData,
                "profilePic": this.personalForm.profile_pic,
                "educations": this.userDegreelist.map(function (item) {
                    return {
                        "id": item.id,
                        "degree_id": item.degree_id,
                        "field_id": item.degree_field_id,
                        "from_year": item.from_year,
                        "to_year": item.to_year,
                        "degree_name": item.degreeDetails.details[0].name,
                        "degree_field_name": item.degreeFieldDetails.details[0].name,
                        "university_name": (item.university) ? item.university.details[0].name : ''
                    };
                }),
                "skills": this.userSkilllist.map(function (item) {
                    return {
                        "id": item.id,
                        "skill_id": item.skill_id,
                        "status": item.status,
                        "skill_name": item.details[0].name,
                    };
                }),
                "experiences": this.userExperiencelist.map(function (item) {
                    return {
                        "id": item.id,
                        "company_name": (item.company_name) ? item.company_name : ((item.company) ? item.company.details[0].name : ''),
                        "position_id": item.position_id,
                        "from_year": item.from_year,
                        "to_year": item.to_year,
                        "is_current": item.is_current,
                        "summery": item.summery,
                        "position_name": item.position.details[0].name
                    };
                }),
                "certificates": this.userCertificatelist.map(function (item) {
                    return {
                        "id": item.id,
                        "certificate_name": item.certificate_name,
                        "summery": item.summery,
                        "from_year": item.from_year,
                        "to_year": item.to_year,
                        "picture": item.picture
                    };
                }),
                "projects": this.userProjectlist.map(function (item) {
                    return {
                        "id": item.id,
                        "name": item.name,
                        "cId": item.company_id,
                        "from": new Date(item.from_date).getTime(),
                        "to": new Date(item.to_date).getTime(),
                        "company_name": item.company.company_name
                    };
                }),
            };
            // return false;
            // let cvContent = localStorage.getItem('_cvinfo');
            var postData = {
                "cvType": 0,
                "cvData": JSON.stringify(cvInfo),
                "name": 'Careery CV',
                "comment": null,
                "templateId": 13,
                "templatePrice": 0,
                "paymentStatus": 1,
                "is_system": 1
            };
            this.cvCardService.sendCVGenerateRequest(postData)
                .subscribe(function (responseData) {
                if (responseData.statustext == 'success') {
                    console.log(responseData.message);
                }
            });
        }
    };
    ProfileeditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-profileedit',
            template: __webpack_require__(/*! ./profileedit.component.html */ "./src/app/profile/profileedit/profileedit.component.html"),
            styles: [__webpack_require__(/*! ./profileedit.component.scss */ "./src/app/profile/profileedit/profileedit.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"],
            _services_users_service__WEBPACK_IMPORTED_MODULE_7__["UsersService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"],
            _services_common_service__WEBPACK_IMPORTED_MODULE_10__["CommonService"],
            _services_cvcard_service__WEBPACK_IMPORTED_MODULE_8__["CvcardService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            ng_date_format__WEBPACK_IMPORTED_MODULE_12__["DatePipe"]])
    ], ProfileeditComponent);
    return ProfileeditComponent;
}());



/***/ }),

/***/ "./src/app/profile/profileview/profileview.component.html":
/*!****************************************************************!*\
  !*** ./src/app/profile/profileview/profileview.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Profile starts here -->\n\n<div class=\"profileMain\">\n  <!-- <app-pagination [config]=\"paginationConfig\" (pager)=\"clickPager($event)\"></app-pagination> -->\n  <div class=\"row\">\n    <div class=\"col-xl-3 col-lg-6 col-md-6\">\n      <div class=\"profileDesc\">\n        <div class=\"profileMainBox\">\n          <div class=\"profileDescImg\" (click)=\"openEditPicModal(content)\">\n            <img *ngIf=\"profilePic\" [src]=\"profilePic\" alt=\"\">\n            <img  *ngIf=\"userData && !profilePic\" src=\"assets/images/charachter/{{ gender+'_'+userData.experience_level }}.png\" alt=\"\">\n          </div>\n          <h2>{{firstName | titlecase}} {{lastName | titlecase}}</h2>\n          <h3 *ngIf=\"position\">{{ position }}</h3>\n          <h3>{{ 'PROFILE.CPP' |translate }} : {{cpp}}</h3>\n\n          <div class=\"profileAward\">\n             <span ><a  (click)=\"gotToCV()\" href=\"javascript:void(0)\"  ><i class=\"fa fa-eye\" aria-hidden=\"true\"></i> {{\"CV.PREVIEW_CV\"| translate}}</a></span>\n              <span *ngIf=\"profile_video_link\" (click)=\"openVideoModal()\"><i class=\"fa fa-forward\" aria-hidden=\"true\"></i> {{\"COMMON.MY_VIDEO\"| translate}}</span>\n\n          </div>\n          <div class=\"socialProfile\">\n            <ul ngbDropdown>\n              <li><a [routerLink]=\"['/profile/edit']\"><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i></a></li>\n              <li><a href=\"javascript:void(0)\" (click)=\"copyLink()\"><i class=\"fa fa-link\" aria-hidden=\"true\"></i></a></li>\n              <li>\n                <a *ngIf=\"dribbble_link\" href=\"{{ dribbble_link }}\" target=\"_blank\"><i class=\"fa fa-dribbble\" aria-hidden=\"true\"></i></a>\n                <a *ngIf=\"!dribbble_link\" [routerLink]=\"['/profile']\"><i class=\"fa fa-dribbble\" aria-hidden=\"true\"></i></a>\n              </li>\n              <li>\n                <a *ngIf=\"behance_link\" href=\"{{behance_link}}\" target=\"_blank\"><i class=\"fa fa-behance\" aria-hidden=\"true\"></i></a>\n                <a *ngIf=\"!behance_link\" [routerLink]=\"['/profile']\"><i class=\"fa fa-behance\" aria-hidden=\"true\"></i></a>\n              </li>\n              <li>\n                <a *ngIf=\"facebook_link\" href=\"{{facebook_link}}\" target=\"_blank\"><i class=\"fa fa-facebook\" aria-hidden=\"true\"></i></a>\n                <a *ngIf=\"!facebook_link\" [routerLink]=\"['/profile']\"><i class=\"fa fa-facebook\" aria-hidden=\"true\"></i></a>\n              </li>\n              <li>\n                <a *ngIf=\"twitter_link\" href=\"{{twitter_link}}\" target=\"_blank\"><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i></a>\n                <a *ngIf=\"!twitter_link\" [routerLink]=\"['/profile']\"><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i></a>\n              </li>\n              <li id=\"dropdownBasic2\" ngbDropdownToggle><a><i class=\"fa fa-share-alt\" aria-hidden=\"true\"></i></a></li>\n              <div ngbDropdownMenu aria-labelledby=\"dropdownBasic2\">\n                <ul>\n                  <li>\n                    <share-button button=\"facebook\" ></share-button> <span>Facebook</span>\n                  </li>\n                  <li>\n                    <share-button button=\"twitter\"></share-button> <span>Twitter</span>\n                  </li>\n                  <li>\n                    <share-button button=\"whatsapp\"></share-button> <span>WhatsApp</span>\n                  </li>\n                  <li>\n                    <a href=\"javascript:void(0)\" (click)=\"copyLink()\"><i class=\"fa fa-link\" aria-hidden=\"true\"></i></a> <span>{{ 'PROFILE.COPY_LINK' | translate }}</span>\n                  </li>\n                </ul>\n              </div>\n\n            </ul>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"managerLink\">\n        <div class=\"profileMainBox\">\n          <h2 class=\"rowDiv\">\n              <span class=\"manager-text\">{{ 'PROFILE.CAREERY_MANAGER' |translate }}</span>\n            <span (click)=\"openCareeryManagerModal()\" class=\"icon\"></span>\n          </h2>\n        </div>\n      </div>\n\n      <div class=\"profileCarousal\" style=\"position:relative\">\n        <div class=\"loader-container card\" *ngIf=\"loader.card_remove\">\n          <div class=\"loader-content\">\n            <i class=\"fa fa-cog fa-spin\"></i><br />\n            {{ 'CARD.PLEASE_WAIT_REMOVE_CARD' | translate }}\n          </div>\n        </div>\n        <div class=\"profileMainBox\">\n          <div class=\"text-center\" *ngIf=\"loader.card\">\n            <i class=\"fa fa-cog fa-spin\"></i><br />\n            <p>{{ 'CARD.PLEASE_WAIT' | translate }}</p>\n          </div>\n          <div >\n\n            <owl-carousel #cardOwl [options]=\"mySlideOptions\" [carouselClasses]=\"['owl-theme', 'sliding']\">\n              <div class=\"item\" *ngIf=\"userCardList.length == 0\">\n                  <div class=\"iconDown\">\n                      <a href=\"javascript:void(0)\"  (click)=\"downloadDefaultCardFile()\"> <i class=\"fa fa-download\"\n                          aria-hidden=\"true\"></i></a>\n                      \n                    </div>\n                  <section class=\"sheet\">\n                      <div class=\"card-left\">\n                        <div class=\"card-profile\">\n                            <img *ngIf=\"profilePic\" [src]=\"profilePic\" alt=\"\">\n                            <img  *ngIf=\"userData && !profilePic\" src=\"assets/images/charachter/{{ userData.gender+'_'+userData.experience_level }}.png\" alt=\"\">\n                        </div>\n                        <div class=\"card-profile-txt\">\n                          <h2>{{firstName | titlecase}} {{lastName | titlecase}}</h2>\n                          <h5>{{ position }}</h5>\n                        </div>\n                        <ul class=\"card-social\">\n                          <li><span class=\"hh\"><img src=\"assets/images/card_assets/images/phone.svg\" alt=\"\"></span> {{mobile_code+'-'+mobile_no}}\"</li>\n                          <li><span class=\"hh\"><img src=\"assets/images/card_assets/images/location.svg\" alt=\"\"></span> {{ ((address)?(address+ ', '):'')  + city+', ' + country }}</li>\n                          <li class=\"mail-icon\"><span class=\"hh\"><img src=\"assets/images/card_assets/images/email.svg\" alt=\"\"></span> {{ email }}</li>\n                        </ul>\n                      </div>\n                    \n                      <div class=\"card-right\">\n                        <div class=\"card-right-img\"><img src=\"assets/images/card_assets/images/card-logo.svg\" alt=\"\"></div>\n                        <div class=\"card-right-cont\">\n                          <div class=\"code-img\"><qrcode #cardQrCode [qrdata]=\"qrCodeUrl+'/'+cpp\" [size]=\"50\" [level]=\"'M'\" ></qrcode></div>\n                          <h5>CPP : {{ cpp }}</h5>\n                          <div class=\"gntby\">\n                            <ul>\n                              <li>Generated by</li>\n                              <li><img src=\"assets/images/card_assets/images/foot-logo.png\" alt=\"\"></li>\n                            </ul>\n                          </div>\n                        </div>\n                      </div>\n                    </section>\n              </div>\n              <div class=\"item\" *ngFor=\"let card of userCardList\">\n                <div class=\"iconDown\">\n                  <a href=\"{{ card.file | picturepath:'card' }}\" target=\"_blank\"> <i class=\"fa fa-download\"\n                      aria-hidden=\"true\"></i></a>\n                  &nbsp;&nbsp;\n                  <a class=\"anchor-common\" (click)=\"removeOwnCard(card)\"> <i class=\"fa fa-trash\"></i> </a>\n                </div>\n                <div *ngIf=\"card.details\">\n                  <div class=\"profileSingle\">\n                    <div class=\"profileDescImg\"><img *ngIf=\"card.details.photo\" [src]=\"card.details.photo\" alt=\"\"></div>\n                    <h2>{{ card.details.name  }}</h2>\n                    <h3>{{ card.details.position }}</h3>\n                  </div>\n                  <div class=\"proLocation\">\n                    <p><span><i class=\"fa fa-mobile\" aria-hidden=\"true\"></i></span> {{ card.details.mobile }}</p>\n                    <p><span><i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i></span>\n                      {{ card.details.city_name+', '+card.details.country_name }}</p>\n                    <div class=\"qrCode\"><qrcode #cardQrCode [qrdata]=\"qrCodeUrl+'/'+cpp\" [size]=\"50\" [level]=\"'M'\" ></qrcode></div>\n                  </div>\n                </div>\n                <div *ngIf=\"!card.details && card.file\">\n                  <img [src]=\"card.file| picturepath:'card'\" />\n                </div>\n              </div>\n              <div class=\"item\" >\n                  <!-- <div class=\"iconDown\">\n                    <a href=\"javascript:void(0)\"  (click)=\"downloadDefaultCardFile()\"> <i class=\"fa fa-download\"\n                        aria-hidden=\"true\"></i></a>\n                    \n                  </div> -->\n                  <img src=\"assets/images/card-back.png\" />\n              </div>\n            </owl-carousel>\n          </div>\n         \n        </div>\n      </div>\n\n      <div class=\"cvReview\">\n        <div class=\"profileMainBox\">\n          <div class=\"row align-items-center\">\n            <div class=\"col-md-6 withRightBdr\">\n              <!-- <div class=\"progressWrap\">\n                <circle-progress [percent]=\"points\" [titleFontSize]=\"40\" [showSubtitle]=\"false\" [showUnits]=\"false\" [outerStrokeColor]=\"'#707070'\" [innerStrokeColor]=\"'#D4D4D4'\" [radius]=\"100\" [backgroundPadding]=\"7\" [outerStrokeWidth]=\"5\" [space]=\"-5\" [innerStrokeWidth]=\"5\" [animation]=\"true\" [animationDuration]=\"1000\"></circle-progress>\n                <div class=\"progressPoint\">Points</div>\n              </div> -->\n              <div class=\"pointProgress\">\n                <div class=\"forPoints\"><span>{{ points }} {{ 'PROFILE.POINTS' | translate }}</span></div>\n                <div class=\"forRank\"><span>{{ 'PROFILE.YOUR_RANK' | translate }} <br> {{ rank }}</span></div>\n              </div>\n              <p *ngIf=\"loader.stat\" class=\"text-center\"><i class=\"fa fa-cog fa-spin\" aria-hidden=\"true\"></i></p>\n              <p class=\"tooltip-container\" (click)=\"openPointModal(pointsModal)\"> {{ 'PROFILE.KNOWLEDGE_METER' |translate }}\n                <i class=\"fa fa-info-circle meater-tooltip\"></i>\n                <span class=\"tooltip-text\">{{ siteSettings }}</span>\n              </p>\n            </div>\n            <div class=\"col-md-6\">\n\n              <div class=\"cppNum\" (click)=\"navigatePath('connections')\">\n                <span  ><i class=\"fa fa-users\" aria-hidden=\"true\"></i>\n                {{connection_count}} <i *ngIf=\"loader.stat\" class=\"fa fa-cog fa-spin\" aria-hidden=\"true\"></i></span>\n              </div>\n              <a class=\"cppPreview\" href=\"javascript:void(0)\" (click)=\"navigatePath('recommendations')\"><i class=\"fa fa-comments-o\" aria-hidden=\"true\"></i>\n              {{recommendations}} <i *ngIf=\"loader.stat\" class=\"fa fa-cog fa-spin\" aria-hidden=\"true\"></i></a>\n\n            </div>\n          </div>\n        </div>\n      </div>\n\n    </div>\n\n    <div class=\"col-xl-6 col-lg-12 orderThird\">\n      <div class=\"formTabs\">\n        <ngb-tabset (tabChange)=\"changeTabEvent($event)\">\n          <ngb-tab>\n            <ng-template ngbTabTitle><i class=\"fa fa-info\" aria-hidden=\"true\"></i> {{ 'PROFILE.PERSONAL_INFO' |\n              translate }}</ng-template>\n            <ng-template ngbTabContent>\n              <div class=\"ngb-tab-main-content\">\n\n                <p *ngIf=\"loader.personal\" class=\"loader-p\"><i class=\"fa fa-cog fa-spin\"></i></p>\n                <div class=\"row\">\n                  <div class=\"col-md-4\">\n                    <div class=\"formTabsInpWrap\">\n                      <label for=\"\">{{ 'PROFILEEDIT.FIRST_NAME' | translate }} :</label>\n\n                      <input class=\"inpField\" type=\"text\" name=\"\" value=\"{{firstName}}\" readonly>\n                    </div>\n                  </div>\n                  <div class=\"col-md-4\">\n                    <div class=\"formTabsInpWrap\">\n                      <label for=\"\">{{ 'PROFILEEDIT.LAST_NAME' | translate }} :</label>\n                      <input class=\"inpField\" type=\"text\" name=\"\" value=\"{{lastName}}\" readonly>\n                    </div>\n                  </div>\n                  <div class=\"col-md-4\">\n                    <div class=\"formTabsInpWrap\">\n                      <label for=\"\">{{ 'PROFILEEDIT.FAMILY_NAME' | translate }} :</label>\n                      <input class=\"inpField\" type=\"text\" name=\"\" value=\"{{familyName}}\" readonly>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-md-6\">\n                    <div class=\"formTabsInpWrap\">\n                      <label for=\"\">{{ 'PROFILE.COUNTRY' | translate }} :</label>\n\n                      <input class=\"inpField\" type=\"text\" name=\"\" value=\"{{userData?.country?.details[0].name}}\" readonly>\n                    </div>\n                  </div>\n                  <div class=\"col-md-6\">\n                    <div class=\"formTabsInpWrap\">\n                      <label for=\"\">{{ 'PROFILE.CITY' | translate }} :</label>\n                      <input class=\"inpField\" type=\"text\" name=\"\" value=\"{{userData?.city?.details[0].name}}\" readonly>\n                    </div>\n                  </div>\n                </div>\n\n                <div class=\"formTabsInpWrap\">\n                  <label for=\"\">{{ 'PROFILE.ADDRESS' | translate }} :</label>\n\n                  <input class=\"inpField\" type=\"text\" name=\"\" value=\"{{userData?.address}}\" readonly>\n                </div>\n\n                <div class=\"row\">\n                  <div class=\"col-md-6\">\n                    <div class=\"formTabsInpWrap\">\n                      <label for=\"\">{{ 'PROFILE.DATE_OF_BIRTH' | translate }} :</label>\n                      <input class=\"inpField\" type=\"text\" name=\"\" value=\"{{dob| date: 'dd-MM-yyyy'}}\" readonly>\n                    </div>\n                  </div>\n                  <div class=\"col-md-6\">\n                    <div class=\"formTabsInpWrap\">\n                      <label for=\"\">{{ 'PROFILE.GENDER' | translate }} :</label>\n\n                      <input class=\"inpField\" type=\"text\" name=\"\" value=\"{{gender | genderName}}\" readonly>\n                    </div>\n                  </div>\n                </div>\n\n                <div class=\"formTabsInpWrap\">\n                  <label for=\"\">{{ 'PROFILE.EMAIL' | translate }} :</label>\n                  <input class=\"inpField\" type=\"text\" name=\"\" value=\"{{email}}\" readonly>\n                </div>\n\n                <div class=\"formTabsInpWrap\">\n                  <label for=\"\">{{ 'PROFILE.MOBILE' | translate }} :</label>\n                  <input class=\"inpField\" type=\"text\" name=\"\" value=\"{{mobile_code+'-'+mobile_no}}\" readonly>\n                </div>\n\n                <div class=\"formTabsInpWrap\">\n                  <label for=\"\">{{ 'PROFILE.WEBSITE' | translate }} :</label>\n                  <input class=\"inpField\" type=\"text\" name=\"\" value=\"{{website}}\" readonly>\n                </div>\n              </div>\n\n            </ng-template>\n          </ngb-tab>\n          <ngb-tab (click)=\"educationDetails()\">\n            <ng-template ngbTabTitle><span (click)=\"educationDetails()\"><i class=\"fa fa-book\" aria-hidden=\"true\"></i>\n                {{ 'PROFILE.EDUCATION' | translate }}</span></ng-template>\n            <ng-template ngbTabContent>\n                <div class=\"ngb-tab-main-content\">\n                  <p *ngIf=\"loader.education\" class=\"loader-p\"><i class=\"fa fa-cog fa-spin\"></i></p>\n\n                  <ul class=\"list-group\">\n\n                    <li class=\"list-group-item\" *ngFor=\"let education of allEducations\">\n                      <h5>{{education?.degreeDetails?.details[0].name}}</h5>\n\n                      <p>{{education?.from_year}} - {{education?.to_year}}</p>\n                      <p>{{education?.degreeFieldDetails?.details[0].name}}</p>\n\n\n                    </li>\n\n                    <li *ngIf=\"allEducations?.length == 0\">\n                      <span>\n                        {{ \"PROFILEEDIT.NO_RECORD_FOUND\" |translate }}\n                      </span>\n                    </li>\n                  </ul>\n                </div>\n            </ng-template>\n          </ngb-tab>\n          <ngb-tab (click)=\"skillDetails()\">\n            <ng-template ngbTabTitle><span (click)=\"skillDetails()\"><i class=\"fa fa-star\" aria-hidden=\"true\"></i> {{\n                'PROFILE.SKILLS' | translate }}</span></ng-template>\n            <ng-template ngbTabContent>\n                <div class=\"ngb-tab-main-content\">\n                  <p *ngIf=\"loader.skills\" class=\"loader-p\"><i class=\"fa fa-cog fa-spin\"></i></p>\n                  <ul class=\"list-group\">\n\n                    <li class=\"list-group-item\" *ngFor=\"let skill of allSkills\">\n                      <h5>{{skill?.details[0].name}}</h5>\n                      <p *ngIf=\"skill?.status === 1\">{{ \"PROFILEEDIT.SKILLS_STATUS_EXCELLENT\"|translate }}</p>\n                      <p *ngIf=\"skill?.status === 2\">{{ \"PROFILEEDIT.SKILLS_STATUS_VERY_GOOD\"|translate }}</p>\n                      <p *ngIf=\"skill?.status === 3\">{{ \"PROFILEEDIT.SKILLS_STATUS_GOOD\"|translate }}</p>\n                      <p *ngIf=\"skill?.status === 4\">{{ \"PROFILEEDIT.SKILLS_STATUS_FRESH\"|translate }}</p>\n                    </li>\n\n                    <li *ngIf=\"allSkills?.length == 0\">\n                      <span>\n                        {{ \"PROFILEEDIT.NO_RECORD_FOUND\" |translate }}\n                      </span>\n                    </li>\n                  </ul>\n                </div>\n\n            </ng-template>\n          </ngb-tab>\n          <ngb-tab (click)=\"experienceDetails()\">\n            <ng-template ngbTabTitle><span (click)=\"experienceDetails()\"><i class=\"fa fa-suitcase\"\n                  aria-hidden=\"true\"></i>\n                {{ 'PROFILE.EXPERIENCE' | translate }}</span></ng-template>\n            <ng-template ngbTabContent>\n                <div class=\"ngb-tab-main-content\">\n              <p *ngIf=\"loader.experience\" class=\"loader-p\"><i class=\"fa fa-cog fa-spin\"></i></p>\n              <ul class=\"list-group\">\n\n                <li class=\"list-group-item\" *ngFor=\"let experience of allExperiences\">\n                  <h5>{{experience?.company_name}}</h5>\n                  <p *ngIf=\"experience?.is_current === 1; else elseBlock\">\n                    {{experience?.from_year}} - <span *ngIf=\"experience?.is_current === 1\">{{\n                      \"PROFILE.EXPERIENCE_CURRENT\"|translate }}</span>\n                  </p>\n                  <ng-template #elseBlock>{{experience?.from_year}} - {{experience?.to_year}}</ng-template>\n                  <p>{{experience?.position?.details[0].name}}</p>\n                  <p>{{experience?.summery}}</p>\n\n\n                </li>\n\n                <li *ngIf=\"allExperiences?.length == 0\">\n                  <span>\n                    {{ \"PROFILEEDIT.NO_RECORD_FOUND\" |translate }}\n                  </span>\n                </li>\n              </ul>\n              </div>\n            </ng-template>\n          </ngb-tab>\n          <ngb-tab (click)=\"certificateDetails()\">\n            <ng-template ngbTabTitle><span (click)=\"certificateDetails()\"><i class=\"fa fa-graduation-cap\"\n                  aria-hidden=\"true\"></i>\n                {{ 'PROFILE.CERTIFICATE' | translate }}</span></ng-template>\n            <ng-template ngbTabContent>\n                <div class=\"ngb-tab-main-content\">\n              <p *ngIf=\"loader.certificate\" class=\"loader-p\"><i class=\"fa fa-cog fa-spin\"></i></p>\n              <ul class=\"list-group\">\n\n                <li class=\"list-group-item\" *ngFor=\"let certificate of allCertificates\">\n                  <h5>{{certificate.certificate_name}}</h5>\n                  <p>From Year : {{certificate.from_year}} - {{certificate.to_year}}</p>\n                  <p>{{certificate.summery}}</p>\n\n                  <p *ngIf=\"certificate.picture\"><img [src]=\"(certificate.picture)| picturepath:'certificate'\" alt=\"\">\n                  </p>\n\n                </li>\n\n                <li *ngIf=\"allCertificates?.length == 0\">\n                  <span>\n                    {{ \"PROFILEEDIT.NO_RECORD_FOUND\" |translate }}\n                  </span>\n                </li>\n              </ul>\n              </div>\n            </ng-template>\n          </ngb-tab>\n\n          <ngb-tab (click)=\"projectDetails()\">\n            <ng-template ngbTabTitle><span (click)=\"projectDetails()\"><i class=\"fa fa-graduation-cap\"\n                  aria-hidden=\"true\"></i>\n                {{ 'PROFILE.PROJECT' | translate }}</span></ng-template>\n            <ng-template ngbTabContent>\n                <div class=\"ngb-tab-main-content\">\n              <p *ngIf=\"loader.project\" class=\"loader-p\"><i class=\"fa fa-cog fa-spin\"></i></p>\n              <ul class=\"list-group\">\n\n                <li class=\"list-group-item\" *ngFor=\"let project of allProjects\">\n                  <h5>{{project.name}}</h5>\n                  <p>{{project.company.company_name}}</p>\n                  <p>{{project.from_date|date}} - {{project.to_date|date}}</p>\n\n                </li>\n\n                <li *ngIf=\"allProjects?.length == 0\">\n                  <span>\n                    {{ \"PROFILEEDIT.NO_RECORD_FOUND\" |translate }}\n                  </span>\n                </li>\n              </ul>\n              </div>\n            </ng-template>\n          </ngb-tab>\n        </ngb-tabset>\n      </div>\n\n\n      <div class=\"testimonialCarousal\" *ngIf=\"activeTab == 'ngb-tab-0'\">\n        <div class=\"profileMainBox\">\n          <h2>{{ 'PROFILE.TESTIMONIALS' | translate }} :</h2>\n\n          <div *ngIf=\"allTestimonial?.length > 0 \">\n            <owl-carousel [options]=\"testimonialCaro\" [items]=\"allTestimonial\"\n              [carouselClasses]=\"['owl-theme', 'sliding']\">\n              <div class=\"item\" *ngFor=\"let testimonial of allTestimonial\">\n                <div class=\"testimonialHead\">\n                  <div class=\"testimonialHeadLeft\" >\n                    <img *ngIf=\"testimonial.is_anonymous != 1 && testimonial.fromuser.profile_pic\"\n                      [src]=\"testimonial.fromuser.profile_pic| picturepath:'users'\" alt=\"\">\n                    <img class=\"no-pro-pic\" *ngIf=\"testimonial.is_anonymous != 1 && !testimonial.fromuser.profile_pic && testimonial.fromuser.gender=='F'\" src=\"assets/images/female.jpg\" alt=\"\">\n                    <img class=\"no-pro-pic\" *ngIf=\"testimonial.is_anonymous != 1 && !testimonial.fromuser.profile_pic && testimonial.fromuser.gender=='M'\" src=\"assets/images/male.jpg\" alt=\"\">\n                    <img class=\"no-pro-pic\" *ngIf=\"testimonial.is_anonymous == 1\" src=\"assets/images/testimonial_no_img.jpg\" alt=\"\">\n                  </div>\n                  <div class=\"testimonialHeadRight\">\n                    <div *ngIf=\"testimonial.is_anonymous == 0\">\n                      <h3>{{(testimonial.fromuser.first_name+' '+testimonial.fromuser.last_name)}}</h3>\n                      <h4 *ngIf=\"testimonial.fromuser.position\">{{testimonial.fromuser.position.details[0].name}}</h4>\n                    </div>\n                    <div *ngIf=\"testimonial.is_anonymous == 1\">\n                      <h3>{{ 'TESTIMONIALS.ANONYMOUS'|translate }}</h3>\n                    </div>\n                  </div>\n                </div>\n                <p>{{testimonial.message}} </p>\n              </div>\n            </owl-carousel>\n          </div>\n\n          <div style=\"margin-top:25px;\" *ngIf=\"allTestimonial?.length == 0\">\n            <span>\n              {{ \"TESTIMONIALS.NO_RECORD_FOUND\" |translate }}\n            </span>\n          </div>\n\n\n        </div>\n      </div>\n\n    </div>\n\n    <div class=\"col-xl-3 col-lg-6 col-md-6 orderFirst\">\n\n      <app-notifications></app-notifications>\n    </div>\n  </div>\n</div>\n<!-- Profile starts here -->\n<ng-template #careeryMyVideoModal let-modal id=\"careeryPathModal\">\n    <!-- <h2><span>{{ 'PROFILE.POINTS' |translate }}</span></h2> -->\n    <span class=\"modalClose\" (click)=\"modal.dismiss('Cross click')\"></span>\n    <div class=\"modal-body noPad text-center\">\n      <div class=\"iframe-container\">\n        <iframe *ngIf=\"profile_video_link\" width=\"560\" height=\"315\" [src]=\"profile_video_link\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n      </div>\n    </div>\n  </ng-template>\n\n<!-- USER POINT MODAL -->\n<ng-template #pointsModal let-modal id=\"modalPopup\">\n  <h2><span>{{ 'PROFILE.POINTS' |translate }}</span></h2>\n  <span class=\"modalClose\" (click)=\"modal.dismiss('Cross click')\"></span>\n  <div class=\"modal-body\">\n    <div id=\"pointContents\" class=\"graphModal\">\n      <div class=\"user-details\">\n        <ul>\n          <li><small>{{ 'PROFILE.NAME' |translate }}</small> <span>{{ (firstName+' '+lastName) }}</span></li>\n          <li><small>{{ 'PROFILE.CPP' |translate }}</small> <span>{{ (cpp) }}</span></li>\n        </ul>\n      </div>\n      <canvas *ngIf=\"pieChartData.length > 0\" baseChart id=\"pointCanvas\" [data]=\"pieChartData\" [labels]=\"pieChartLabels\" [colors]=\"pieChartColors\"\n        [chartType]=\"pieChartType\" [options]=\"pieOptions\"></canvas>\n      <div class=\"no-record-msg\" *ngIf=\"pieChartData.length == 0\">{{ 'COMMON.NO_USER_POINTS' | translate }}</div>\n    </div>\n    <div class=\"chart-actions\" *ngIf=\"pieChartData.length > 0\">\n      <ul ngbDropdown>\n        <li><a (click)=\"downloadCanvas($event)\" id=\"downloadChartLink\"><i class=\"fa fa-floppy-o\"></i></a></li>\n        <li><a (click)=\"printChart()\"><i class=\"fa fa-print\"></i></a></li>\n        <li id=\"dropdownBasic3\" ngbDropdownToggle><a><i class=\"fa fa-share-alt\" aria-hidden=\"true\"></i></a></li>\n        <div ngbDropdownMenu aria-labelledby=\"dropdownBasic3\">\n          <ul>\n            <li>\n              <share-button button=\"facebook\" [url]=\"baseOrigin+'/user/chart/'+cpp\"></share-button> <span>Facebook</span>\n            </li>\n            <li>\n              <share-button button=\"twitter\" [url]=\"baseOrigin+'/user/chart/'+cpp\"></share-button> <span>Twitter</span>\n            </li>\n            <li>\n              <share-button button=\"whatsapp\" [url]=\"baseOrigin+'/user/chart/'+ cpp\"></share-button> <span>WhatsApp</span>\n            </li>\n            </ul>\n        </div>\n      </ul>\n    </div>\n  </div>\n</ng-template>\n\n<ng-template #careeryPathModal let-modal id=\"careeryPathModal\">\n\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">Careery Manager</h4>\n    <span class=\"modalClose\" (click)=\"modal.dismiss('Cross click')\"></span>\n  </div>\n\n  <div class=\"modal-body noPad\">\n    <div style=\"padding:30px 0;\" class=\"profileDesc\">\n      <div class=\"row\">\n        <div class=\"col-lg-6\">\n          <a class=\"modBtn\" [routerLink]=\"['/cv/build']\"><i class=\"fa fa-suitcase\" aria-hidden=\"true\"></i> {{ 'PROFILE.CV_BUILDER_LINK' | translate }}</a>\n        </div>\n        <div class=\"col-lg-6\">\n          <a class=\"modBtn\" [routerLink]=\"['/card/build']\"><i class=\"fa fa-user\" aria-hidden=\"true\"></i> {{ 'PROFILE.CARD_BUILDER_LINK' | translate }}</a>\n        </div>\n        <div class=\"col-lg-6\">\n          <a class=\"modBtn\" [routerLink]=\"['/profile/edit']\"><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i> {{ 'PROFILE.EDIT_PROF_LINK' | translate }}</a>\n        </div>\n      </div>\n    </div>\n  </div>\n</ng-template>\n<ng-template #content let-modal>\n    <h2><span>{{ 'PROFILEEDIT.EDIT_PROFILE_PHOTO' |translate }}</span></h2>\n    <span class=\"modalClose\" (click)=\"modal.dismiss('Cross click')\"></span>\n    <div class=\"modal-body\">\n\n      <div>\n        <div class=\"alert alert-success\" *ngIf=\"successMsg\">{{ successMsg }}</div>\n        <div class=\"alert alert-danger\" *ngIf=\"errorMsg\">{{ errorMsg }}</div>\n      </div>\n\n      <span class=\"file-upload-all\">\n        <label class=\"custom-file-upload\" for=\"custom-input\">{{ 'COMMON.UPLOAD_PHOTO' | translate }}</label>\n        <input id=\"custom-input\" type=\"file\" accept=\".png, .jpg, .jpeg, .gif\" (change)=\"fileChangeListener($event, cropper)\">\n      </span>\n      <button class=\"cropSave\" (click)=\"savePhoto()\">{{ 'PROFILE.SAVE_BUTTON' | translate }}</button>\n\n      <div class=\"imgCrop\">\n        <div class=\"\">\n          <img-cropper #cropper [image]=\"data\" [settings]=\"cropperSettings\"></img-cropper>\n        </div>\n        <div class=\"cropDisp\" *ngIf=\"data.image\">\n          <img [src]=\"data.image\" [width]=\"cropperSettings.croppedWidth\" [height]=\"cropperSettings.croppedHeight\">\n        </div>\n\n        <!-- <div class=\"\" *ngIf=\"data.image\">\n          <img-cropper [image]=\"data\" [settings]=\"cropperSettings\"></img-cropper>\n        </div>\n        <div class=\"cropDisp\" *ngIf=\"data.image\">\n          <img  [src]=\"data.image\" [width]=\"cropperSettings.croppedWidth\" [height]=\"cropperSettings.croppedHeight\">\n        </div> -->\n        <div class=\"clearfix\"></div>\n\n      </div>\n    </div>\n  </ng-template>\n\n  <canvas *ngIf=\"pieChartData.length > 0\" baseChart id=\"pointCanvas1\" [data]=\"pieChartData\" [labels]=\"pieChartLabels\" [colors]=\"pieChartColors\"\n      [chartType]=\"pieChartType\" [options]=\"pieOptions\"></canvas>"

/***/ }),

/***/ "./src/app/profile/profileview/profileview.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/profile/profileview/profileview.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZXZpZXcvcHJvZmlsZXZpZXcuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/profile/profileview/profileview.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/profile/profileview/profileview.component.ts ***!
  \**************************************************************/
/*! exports provided: ProfileviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileviewComponent", function() { return ProfileviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _globalConfig__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../globalConfig */ "./src/app/globalConfig.ts");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _services_cvcard_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/cvcard.service */ "./src/app/services/cvcard.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _services_testimonial_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/testimonial.service */ "./src/app/services/testimonial.service.ts");
/* harmony import */ var chart_piecelabel_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! chart.piecelabel.js */ "./node_modules/chart.piecelabel.js/src/Chart.PieceLabel.js");
/* harmony import */ var chart_piecelabel_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(chart_piecelabel_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-owl-carousel */ "./node_modules/ngx-owl-carousel/index.js");
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var ngx_img_cropper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-img-cropper */ "./node_modules/ngx-img-cropper/index.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _global_picturepath_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../global/picturepath.pipe */ "./src/app/global/picturepath.pipe.ts");
/* harmony import */ var _loader_loader_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../loader/loader.service */ "./src/app/loader/loader.service.ts");
/*****************************************************
# Company Name          :
# Author                :
# Created Date          : 20-01-2019
# Module                : ProfileviewComponent
# Object name           : ProfileviewComponent
# Functionality         : All user profile details
# Purpose               : constructor, ngOnInit, openEditProfile, getUserDetails,statDetails,  getTestimonials, educationDetails, skillDetails, experienceDetails, certificateDetails, openPointModal, printChart, downloadCanvas
*******************************************************/


















var ProfileviewComponent = /** @class */ (function () {
    /* Function Name : constructor
      * Author :
      * Created Date : 20-01-2019
      * Modified Date : *
      * Purpose : to define the all helpful objects and defin the languages data
      * PARAMS : route, authService, usersService, translate, cService, sanitizer, modalService
      */
    function ProfileviewComponent(route, authService, usersService, translate, cService, sanitizer, modalService, testimonialService, cvCardService, filePathPipe, loderService) {
        var _this = this;
        this.route = route;
        this.authService = authService;
        this.usersService = usersService;
        this.translate = translate;
        this.cService = cService;
        this.sanitizer = sanitizer;
        this.modalService = modalService;
        this.testimonialService = testimonialService;
        this.cvCardService = cvCardService;
        this.filePathPipe = filePathPipe;
        this.loderService = loderService;
        this.userData = null;
        this.pieChartLabels = []; // points piechart labels
        this.pieChartData = []; // points pie chart valus
        this.pieChartColors = []; // points pie chart colors
        this.pieChartType = 'pie'; // points chart type
        this.pieOptions = null; // points chart config
        this.userId = '';
        this.email = ''; // user email
        this.firstName = ''; // user first name
        this.lastName = ''; // user last name
        this.familyName = ''; // user FAMILY name
        this.address = ''; // user address
        this.dob = null; // user dob
        this.gender = ''; // get user gender
        this.mobile_no = ''; // get user mobile no
        this.mobile_code = ''; // get user mobile code
        this.country = ''; // get user country
        this.city = ''; // get user city
        this.cpp = ''; // get user cpp
        this.points = ''; // get user points
        this.position = ''; // get user positions
        this.connection_count = ''; //get user counts
        this.profile_pic = ''; // get user profile pic
        this.dribbble_link = ''; // get userdribbble link
        this.facebook_link = ''; // get facebook link
        this.pinterest_link = ''; // get pinterest link
        this.behance_link = ''; // get behance link
        this.twitter_link = ''; // get twitter link
        this.website = ''; // get twitter link
        this.profile_video_link = '';
        this.userCv = [];
        this.profile_image_path = _globalConfig__WEBPACK_IMPORTED_MODULE_6__["s3URL"] + 'userspic/'; // profile pic base path
        this.profilePic = null; // user profile pic
        this.allEducations = ''; // all educations list of a user
        this.allSkills = ''; // all skills of a user
        this.allExperiences = ''; // all experience list of a user
        this.allCertificates = ''; // all certificate list of a user
        this.allProjects = []; // all projects of auser
        this.recommendations = null; // get recommendations count
        this.rank = null; // get user rank
        this.images = null;
        this.imagePath = ''; // image path
        this.loader = {
            'personal': false,
            'education': false,
            'skills': false,
            'experience': false,
            'certificate': false,
            'project': false,
            'stat': false,
            'card': false,
            "card_remove": false
        };
        this.mySlideOptions = { items: 1, dots: false, nav: true }; // slider config
        this.testimonialCaro = { items: 1, dots: true, nav: true }; // testimonial slider config
        this.scrollbarOptions = { axis: 'y', theme: 'minimal-dark' }; // scroll ber config
        this.activeTab = 'ngb-tab-0';
        this.userCardList = [];
        this.baseOrigin = null;
        this.errorMsg = '';
        this.successMsg = '';
        this.siteSettings = null;
        this.qrCodeUrl = document.location.origin;
        this.cService.activelang.subscribe(function (lang) {
            // this language will be used as a fallback when a translation isn't found in the current language
            translate.setDefaultLang(lang);
            // the lang to use, if the lang isn't available, it will use the current loader to get them
            translate.use(lang);
        });
        this.cService.profilePic.subscribe(function (pic) {
            if (pic) {
                _this.profilePic = _this.sanitizer.bypassSecurityTrustUrl(pic);
            }
        });
        this.cropperSettings = new ngx_img_cropper__WEBPACK_IMPORTED_MODULE_14__["CropperSettings"]();
        this.cropperSettings.noFileInput = true;
        this.data = {};
        this.cService.profilePic.subscribe(function (pic) {
            if (pic) {
                _this.profilePic = _this.sanitizer.bypassSecurityTrustUrl(pic);
                _this.data.image = _this.profilePic;
            }
            else {
                _this.profilePic = "";
                _this.data.image = "";
            }
        });
    }
    /* Function Name : ngOnInit
      * Author :
      * Created Date : 20-01-2019
      * Modified Date : *
      * Purpose : to get data after html load
      * PARAMS :
      */
    ProfileviewComponent.prototype.ngOnInit = function () {
        this.baseOrigin = window.location.origin;
        localStorage.setItem('_sp', 'profile_user');
        this.getUserDetails();
    };
    /* Function Name : openEditProfile
      * Author :
      * Created Date : 20-01-2019
      * Modified Date : *
      * Purpose : to redirect edit profile page
      * PARAMS :
      */
    ProfileviewComponent.prototype.openCareeryManagerModal = function () {
        this.modalService.open(this.careeryPathModal, { size: 'lg', centered: true, windowClass: 'DefaultModal' });
    };
    /* Function Name : getUserDetails
      * Author :
      * Created Date : 20-01-2019
      * Modified Date : *
      * Purpose : to get user details
      * PARAMS :
      */
    ProfileviewComponent.prototype.getUserDetails = function () {
        var _this = this;
        this.loader.personal = true;
        this.usersService.userDetails().subscribe(function (response) {
            //console.log(response);
            if ((response['statustext'] === 'success')) {
                _this.userData = response['data'];
                _this.email = response['data'].email;
                _this.address = response['data'].address;
                _this.dob = response['data'].dob;
                if (!new Date(_this.dob)) {
                    _this.dob = '';
                }
                _this.userId = response['data'].id;
                _this.gender = response['data'].gender;
                _this.mobile_no = response['data'].mobile_no;
                _this.mobile_code = response['data'].mobile_code;
                _this.country = (response['data']['country']) ? response['data']['country'].name : '';
                _this.city = (response['data']['city']) ? response['data']['city'].name : '';
                _this.cpp = response['data'].cpp;
                if (response['data']['position'] && response['data']['position']['details']) {
                    _this.position = response['data']['position']['details'][0].name;
                }
                _this.firstName = response['data'].first_name;
                _this.lastName = response['data'].last_name;
                _this.familyName = response['data'].family_name;
                _this.profile_pic = response['data'].profile_pic;
                _this.facebook_link = response['data'].facebook_link;
                _this.twitter_link = response['data'].twitter_link;
                _this.dribbble_link = response['data'].dribbble_link;
                _this.pinterest_link = response['data'].pinterest_link;
                _this.behance_link = response['data'].behance_link;
                _this.website = response['data'].website;
                if (response['data'].video_link) {
                    var videoUrl = _this.cService.getYoutubeEmbedUrl(response['data'].video_link);
                    _this.profile_video_link = (response['data'].video_link) ? _this.sanitizer.bypassSecurityTrustResourceUrl(videoUrl) : '';
                }
                _this.siteSettings = response['data'].site_settings.user_point_tooltip_text;
                if (response['data'].cv) {
                    _this.userCv = response['data'].cv;
                }
                if (localStorage.getItem('_propic')) {
                    _this.cService.setProfilePic(localStorage.getItem('_propic'));
                }
                else if (response['data'].profile_pic) {
                    _this.profilePic = _globalConfig__WEBPACK_IMPORTED_MODULE_6__["s3URL"] + 'userspic/' + response['data'].profile_pic;
                    _this.cService.setProfilePic(_this.profilePic);
                }
                else {
                    localStorage.removeItem('_propic');
                    _this.cService.setProfilePic('');
                }
                _this.statDetails();
                _this.getUserCardList();
                _this.getTestimonials();
            }
            else {
                console.log('error');
            }
            _this.loader.personal = false;
        });
    };
    /* Function Name : statDetails
      * Author :
      * Created Date : 05-03-2019
      * Modified Date : *
      * Purpose : to get user  stat details
      * PARAMS :
      */
    ProfileviewComponent.prototype.statDetails = function () {
        var _this = this;
        this.loader.stat = true;
        var postData = {
            id: btoa(this.userData.id)
        };
        this.usersService.userStatDetails(postData).subscribe(function (response) {
            _this.loader.stat = false;
            if (response.statustext == 'success') {
                _this.connection_count = response.data.connection_count;
                _this.points = response.data.points;
                _this.recommendations = response.data.recommendations;
                _this.rank = response.data.rank;
            }
        });
    };
    /* Function Name : getTestimonials
      * Author :
      * Created Date : 20-01-2019
      * Modified Date : *
      * Purpose : to get user testimonials
      * PARAMS :
      */
    ProfileviewComponent.prototype.getTestimonials = function () {
        var _this = this;
        var type = 'accepted';
        var userid = this.userData.id;
        var token = localStorage.getItem("_token");
        var formPostData = {
            "id": btoa(userid)
        };
        this.testimonialService.publicTestimonial(formPostData).subscribe(function (response) {
            //console.log(response);
            if ((response['statustext'] === 'success')) {
                _this.allTestimonial = response['data'].filter(function (item) {
                    return item.fromuser.id != undefined;
                });
            }
            else {
                console.log('error testimonials');
            }
        });
    };
    /* Function Name : educationDetails
      * Author :
      * Created Date : 20-01-2019
      * Modified Date : *
      * Purpose : to get user education detaills
      * PARAMS :
      */
    ProfileviewComponent.prototype.educationDetails = function () {
        var _this = this;
        var type = 'education';
        this.loader.education = true;
        this.usersService.userDetailsByType(type).subscribe(function (response) {
            if ((response['statustext'] === 'success')) {
                //console.log(response);
                var count = response['data']['degree'].length;
                if (count > 0) {
                    _this.allEducations = response['data']['degree'];
                }
                else {
                    _this.allEducations = '';
                }
            }
            else {
                console.log('error in education details');
            }
            _this.loader.education = false;
        });
    };
    /* Function Name : skillDetails
      * Author :
      * Created Date : 20-01-2019
      * Modified Date : *
      * Purpose : to get user skills detaills
      * PARAMS :
      */
    ProfileviewComponent.prototype.skillDetails = function () {
        var _this = this;
        var type = 'skills';
        this.loader.skills = true;
        this.usersService.userDetailsByType(type).subscribe(function (response) {
            if ((response['statustext'] === 'success')) {
                //console.log(response);
                var count = response['data']['skills'].length;
                if (count > 0) {
                    _this.allSkills = response['data']['skills'];
                }
                else {
                    _this.allSkills = '';
                }
            }
            else {
                console.log('error in skills details');
            }
            _this.loader.skills = false;
        });
    };
    /* Function Name : experienceDetails
      * Author :
      * Created Date : 20-01-2019
      * Modified Date : *
      * Purpose : to get user experience detaills
      * PARAMS :
      */
    ProfileviewComponent.prototype.experienceDetails = function () {
        var _this = this;
        var type = 'experience';
        this.loader.experience = true;
        this.usersService.userDetailsByType(type).subscribe(function (response) {
            if ((response['statustext'] === 'success')) {
                //console.log(response);
                var count = response['data']['experience'].length;
                if (count > 0) {
                    _this.allExperiences = response['data']['experience'];
                }
                else {
                    _this.allExperiences = '';
                }
            }
            else {
                console.log('error in experience details');
            }
            _this.loader.experience = false;
        });
    };
    /* Function Name : certificateDetails
      * Author :
      * Created Date : 20-01-2019
      * Modified Date : *
      * Purpose : to get user certificate detaills
      * PARAMS :
      */
    ProfileviewComponent.prototype.certificateDetails = function () {
        var _this = this;
        var type = 'certificate';
        this.loader.certificate = true;
        this.usersService.userDetailsByType(type).subscribe(function (response) {
            if ((response['statustext'] === 'success')) {
                _this.allCertificates = response['data']['certificates'];
            }
            else {
                console.log('error in certificate details');
            }
            _this.loader.certificate = false;
        });
    };
    /* Function Name : projectDetails
      * Author :
      * Created Date : 14-03-2019
      * Modified Date : *
      * Purpose : to get user project detaills
      * PARAMS :
      */
    ProfileviewComponent.prototype.projectDetails = function () {
        var _this = this;
        var type = 'project';
        this.loader.project = true;
        this.usersService.userDetailsByType(type).subscribe(function (response) {
            if ((response['statustext'] === 'success')) {
                _this.allProjects = response['data']['projects'];
            }
            else {
                console.log('error in certificate details');
            }
            _this.loader.project = false;
        });
    };
    /* Function Name : openPointModal
      * Author :
      * Created Date : 26-02-2019
      * Modified Date : *
      * Purpose : to open points modal
      * PARAMS :
      */
    ProfileviewComponent.prototype.openPointModal = function (pointModal) {
        var _this = this;
        this.pieChartLabels = [];
        this.pieChartData = [];
        this.pieChartColors = [
            {
                backgroundColor: ['#26bfb5', '#5bc78c', '#fc9772', '#ff4a5f', '#adc72a'],
            }
        ];
        this.usersService.getUserPoints(btoa(this.userData.id))
            .subscribe(function (responseData) {
            if (responseData.data) {
                _this.pieOptions = {
                    pieceLabel: {
                        render: function (args) {
                            var label = args.label, value = args.value;
                            return value + ' points';
                        },
                        fontColor: '#FFFFFF',
                        fontSize: 13,
                        fontStyle: 'bold'
                    },
                    legend: { position: 'right' },
                    elements: {
                        arc: {
                            borderWidth: 0,
                            weight: 0.5
                        }
                    }
                };
                responseData.data.forEach(function (element) {
                    _this.pieChartLabels.push(element.point_name);
                    _this.pieChartData.push(element.total_point);
                });
                _this.modalService.open(pointModal, { size: 'lg', centered: true, windowClass: 'DefaultModal' });
            }
        });
    };
    /* Function Name : printChart
      * Author :
      * Created Date : 26-02-2019
      * Modified Date : *
      * Purpose : to print point chart
      * PARAMS :
      */
    ProfileviewComponent.prototype.printChart = function () {
        window.print();
    };
    /* Function Name : downloadCanvas
      * Author :
      * Created Date : 26-02-2019
      * Modified Date : *
      * Purpose : to download teh chart image
      * PARAMS :
      */
    ProfileviewComponent.prototype.downloadCanvas = function (event) {
        var anchor = document.getElementById('downloadChartLink');
        var canvas = document.getElementById('pointCanvas');
        var img = new Image();
        img.src = canvas.toDataURL();
        var context = canvas.getContext('2d');
        context.drawImage(img, 0, 0, 200, 200);
        var dataUrl = canvas.toDataURL('image/jpeg', 1);
        anchor['href'] = dataUrl;
        anchor['download'] = "chart.jpg";
    };
    /* Function Name : navigatePath
      * Author :
      * Created Date : 15-03-2019
      * Modified Date : *
      * Purpose : to redirect in new page
      * PARAMS :
      */
    ProfileviewComponent.prototype.navigatePath = function (path) {
        this.route.navigate(['/' + path]);
    };
    ProfileviewComponent.prototype.getUserCardList = function (afterRemove) {
        var _this = this;
        if (afterRemove === void 0) { afterRemove = false; }
        this.loader.card = true;
        var loggedInUser = this.cService.getLoggedUserData();
        this.cvCardService.getCardList({
            id: btoa(loggedInUser._i),
            "only_default": 1
        }).subscribe(function (responseData) {
            if (responseData.statustext == 'success') {
                var cardList = responseData.data.list;
                _this.userCardList = [];
                if (cardList.length > 0) {
                    _this.userCardList = cardList.map(function (item) {
                        var details = null;
                        if (item.card_details) {
                            details = JSON.parse(item.card_details);
                        }
                        return {
                            id: item.id,
                            details: details,
                            file: item.card_file
                        };
                    });
                }
                _this.cardOwl.reInit();
                if (afterRemove == true) {
                    _this.cardOwl.reInit();
                }
                _this.loader.card = false;
            }
        });
    };
    ProfileviewComponent.prototype.removeOwnCard = function (card) {
        var _this = this;
        this.translate.get(['CARD.CARD_REMOVE_CONFIRM']).subscribe(function (tData) {
            sweetalert__WEBPACK_IMPORTED_MODULE_15___default()({
                title: '',
                text: tData['CARD.CARD_REMOVE_CONFIRM'],
                icon: "warning",
                buttons: {
                    cancel: true,
                    confirm: true,
                },
            }).then(function (willDelete) {
                if (willDelete) {
                    _this.loader.card_remove = true;
                    _this.cvCardService.removeCard({
                        cardId: btoa(card.id)
                    })
                        .subscribe(function (responseData) {
                        _this.loader.card_remove = false;
                        if (responseData.statustext == 'success') {
                            _this.getUserCardList(true);
                        }
                    });
                }
            });
        });
    };
    /* Function Name : changeTabEvent
      * Author :
      * Created Date : 31-01-2019
      * Modified Date : *
      * Purpose : to get data on tab change
      * PARAMS : e
      */
    ProfileviewComponent.prototype.changeTabEvent = function (e) {
        this.activeTab = e.nextId;
    };
    /* Function Name : openEditPicModal
  * Author :
  * Created Date : 31-01-2019
  * Modified Date : *
  * Purpose : to open edit profile picture modal
  * PARAMS : content
  */
    ProfileviewComponent.prototype.openEditPicModal = function (content) {
        this.modalService.open(content, { size: 'lg', centered: true, windowClass: 'DefaultModal' });
    };
    /* Function Name : fileChangeListener
   * Author :
   * Created Date : 31-01-2019
   * Modified Date : *
   * Purpose : to get file object on image upload
   * PARAMS : $event, cropper
   */
    ProfileviewComponent.prototype.fileChangeListener = function ($event, cropper) {
        var image = new Image();
        var file = $event.target.files[0];
        if (file && (file.type == 'image/jpeg' || file.type == 'image/png' || file.type == 'image/gif')) {
            if (file.size < 250000) {
                var myReader = new FileReader();
                var that = this;
                myReader.onloadend = function (loadEvent) {
                    image.src = loadEvent.target.result;
                    setTimeout(function () {
                        cropper.setImage(image);
                    }, 10);
                };
                myReader.readAsDataURL(file);
            }
            else {
                this.translate.get(['COMMON.ERROR', 'PROFILEEDIT.PROFILE_PIC_SIZE_ERROR']).subscribe(function (tData) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_15___default()({
                        title: tData['COMMON.ERROR'],
                        text: tData['PROFILEEDIT.PROFILE_PIC_SIZE_ERROR'],
                        icon: 'error'
                    });
                });
            }
        }
        else {
            this.translate.get(['COMMON.ERROR', 'PROFILEEDIT.PROFILE_PIC_TYPE_ERROR']).subscribe(function (tData) {
                sweetalert__WEBPACK_IMPORTED_MODULE_15___default()({
                    title: tData['COMMON.ERROR'],
                    text: tData['PROFILEEDIT.PROFILE_PIC_TYPE_ERROR'],
                    icon: 'error'
                });
            });
        }
    };
    /* Function Name : savePhoto
      * Author :
      * Created Date : 31-01-2019
      * Modified Date : *
      * Purpose : to save photo
      * PARAMS :
      */
    ProfileviewComponent.prototype.savePhoto = function () {
        var _this = this;
        if (this.data.image) {
            this.usersService.changeProfilePic({
                "pic": this.data['image']
            }).subscribe(function (res) {
                if (res.statustext === 'success') {
                    localStorage.setItem("_propic", _this.data['image']);
                    _this.cService.setProfilePic(_this.data['image']);
                    _this.errorMsg = '';
                    _this.successMsg = res.message;
                }
                else {
                    _this.successMsg = '';
                    _this.errorMsg = res.message;
                }
            });
        }
        else {
            this.translate.get(['COMMON.ERROR', 'PROFILEEDIT.PROFILE_PIC_TYPE_ERROR']).subscribe(function (tData) {
                sweetalert__WEBPACK_IMPORTED_MODULE_15___default()({
                    title: tData['COMMON.ERROR'],
                    text: tData['PROFILEEDIT.PROFILE_PIC_TYPE_ERROR'],
                    icon: 'error'
                });
            });
        }
    };
    /* Function Name : copyLink
        * Author :
        * Created Date : 23-07-2019
        * Modified Date : *
        * Purpose : to copy profile link
        * PARAMS :
        */
    ProfileviewComponent.prototype.copyLink = function () {
        var copyText = document.createElement('input');
        copyText.value = window.location.href;
        document.body.appendChild(copyText);
        copyText.select();
        document.execCommand('copy');
        document.body.removeChild(copyText);
        this.translate.get(['COMMON.SUCCESS', 'COMMON.LINK_COPY']).subscribe(function (tData) {
            sweetalert__WEBPACK_IMPORTED_MODULE_15___default()({
                title: tData['COMMON.SUCCESS'],
                text: tData['COMMON.LINK_COPY'],
                icon: 'success'
            });
        });
    };
    ProfileviewComponent.prototype.openVideoModal = function () {
        this.modalService.open(this.careeryMyVideoModal, { size: 'lg', centered: true, windowClass: 'DefaultModal' });
    };
    /* Function Name : gotToCV
    * Author :
    * Created Date : 03-04-2019
    * Modified Date : *
    * Purpose : to redirect to cv
    * PARAMS :
    */
    ProfileviewComponent.prototype.gotToCV = function () {
        var _this = this;
        var defaultCv = null;
        if (this.userData.cv && this.userData.cv.length > 0) {
            defaultCv = this.userData.cv.find(function (i) { return i.is_default == 1; });
            if (defaultCv) {
                var cvPath = this.filePathPipe.transform(defaultCv.cv_file, 'cv');
                // let anchor = document.createElement('a');
                // anchor.href = cvPath;
                // anchor.download = 'Careery-cv.pdf';
                // document.body.appendChild(anchor);
                // anchor.click();
                var win = window.open(cvPath, '_blank');
                win.focus();
            }
        }
        if (!defaultCv) {
            this.cvCardService.saveDefaultCV({
                user_id: btoa(this.userId)
            })
                .subscribe(function (responseData) {
                if (responseData.statustext == 'success') {
                    setTimeout(function () {
                        _this.loderService.show();
                    }, 100);
                    setTimeout(function () {
                        _this.loderService.hide();
                        var cvPath = _this.filePathPipe.transform('careery-' + _this.userId + '-cv.pdf', 'cv');
                        // let anchor = document.createElement('a');
                        // anchor.href = cvPath;
                        // anchor.download = 'Careery-cv.pdf';
                        // document.body.appendChild(anchor);
                        // anchor.click();
                        var win = window.open(cvPath, '_blank');
                        win.focus();
                    }, 3000);
                }
            });
        }
    };
    /* Function Name : downloadDefaultCardFile
    * Author :
    * Created Date : 31-07-2019
    * Modified Date : *
    * Purpose : to download default careery card
    * PARAMS :
    */
    ProfileviewComponent.prototype.downloadDefaultCardFile = function () {
        var _this = this;
        this.cvCardService.saveDefaultCard({
            user_id: btoa(this.userId)
        })
            .subscribe(function (responseData) {
            setTimeout(function () {
                _this.loderService.show();
            }, 100);
            setTimeout(function () {
                _this.loderService.hide();
                var cvPath = _this.filePathPipe.transform('careery-' + _this.userId + '-card.pdf', 'card');
                var win = window.open(cvPath, '_blank');
                win.focus();
            }, 3000);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('cardQrCode', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ProfileviewComponent.prototype, "cardQrCode", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('cardOwl'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_13__["OwlCarousel"])
    ], ProfileviewComponent.prototype, "cardOwl", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('pointsModal'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProfileviewComponent.prototype, "pointsModal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('careeryPathModal'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProfileviewComponent.prototype, "careeryPathModal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('careeryMyVideoModal'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProfileviewComponent.prototype, "careeryMyVideoModal", void 0);
    ProfileviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profileview',
            template: __webpack_require__(/*! ./profileview.component.html */ "./src/app/profile/profileview/profileview.component.html"),
            providers: [_global_picturepath_pipe__WEBPACK_IMPORTED_MODULE_16__["PicturepathPipe"]],
            styles: [__webpack_require__(/*! ./profileview.component.scss */ "./src/app/profile/profileview/profileview.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"],
            _services_users_service__WEBPACK_IMPORTED_MODULE_7__["UsersService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            _services_common_service__WEBPACK_IMPORTED_MODULE_10__["CommonService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"],
            _services_testimonial_service__WEBPACK_IMPORTED_MODULE_11__["TestimonialService"],
            _services_cvcard_service__WEBPACK_IMPORTED_MODULE_8__["CvcardService"],
            _global_picturepath_pipe__WEBPACK_IMPORTED_MODULE_16__["PicturepathPipe"],
            _loader_loader_service__WEBPACK_IMPORTED_MODULE_17__["LoaderService"]])
    ], ProfileviewComponent);
    return ProfileviewComponent;
}());



/***/ }),

/***/ "./src/app/profile/publicprofile/publicprofile.component.html":
/*!********************************************************************!*\
  !*** ./src/app/profile/publicprofile/publicprofile.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"profileMain forPublicProfile\">\n  <div class=\"row\">\n\n    <div class=\"col-xl-3 col-lg-4\">\n      <div class=\"profileDesc\">\n        <div class=\"profileMainBox\">\n          <span ngbDropdown class=\"publicDrop\" *ngIf=\"activeUserId\">\n            <i class=\"fa fa-ellipsis-v\" aria-hidden=\"true\" id=\"dropPublic\" ngbDropdownToggle></i>\n            <div ngbDropdownMenu aria-labelledby=\"dropPublic\">\n              <ul>\n                <li><a (click)=\"openSendMessageModal(messageSendModal)\">{{ 'PROFILE.MESSAGE' |translate }}</a></li>\n                <li><a (click)=\"connectionSend(userData.id)\">{{ 'PROFILE.CONTACT' |translate }}</a></li>\n                <li *ngIf=\"display.block\"><a (click)=\"openBlock()\">{{ 'BLOCKS.BLOCK' |translate }}</a></li>\n                <li *ngIf=\"!display.block\"><a (click)=\"unblock()\">{{ 'BLOCKS.UNBLOCK' |translate }}</a></li>\n              </ul>\n            </div>\n          </span>\n          <div class=\"profileDescImg alt\">\n            <img *ngIf=\"profilePic\" [src]=\"profilePic\" alt=\"\">\n            <img  *ngIf=\"userData && !profilePic && userData.gender && userData.experience_level\" src=\"assets/images/charachter/{{ userData.gender+'_'+userData.experience_level }}.png\" alt=\"\">\n          </div>\n          <h2>{{userData.first_name | titlecase}} {{userData.last_name | titlecase}}</h2>\n          <h3 *ngIf=\"userData.position && userData.position.details\">{{ userData?.position?.details[0].name }}</h3>\n          <h3>CPP : {{ userData?.cpp }}</h3>\n          <div class=\"profileAward\">\n            <span *ngIf=\"display.cv\"\n                (click)=\"gotToCV(userData.cv[0])\"><i class=\"fa fa-eye\" aria-hidden=\"true\"></i> {{\"CV.PREVIEW_CV\"| translate}}</span>\n            <span *ngIf=\"profile_video_link\" (click)=\"openVideoModal()\"><i class=\"fa fa-forward\" aria-hidden=\"true\"></i> {{\"COMMON.MY_VIDEO\"| translate}}</span>\n\n            \n\n          </div>\n          <div class=\"socialProfile\">\n            <ul ngbDropdown>\n              <li>\n                <a *ngIf=\"userData.dribbble_link\" href=\"{{userData.dribbble_link}}\" target=\"_blank\"><i class=\"fa fa-dribbble\" aria-hidden=\"true\"></i></a>\n                <a *ngIf=\"!userData.dribbble_link\" [routerLink]=\"['/', userData.cpp]\"><i class=\"fa fa-dribbble\" aria-hidden=\"true\"></i></a>\n              </li>\n              <li>\n                <a *ngIf=\"userData.facebook_link\" href=\"{{userData.facebook_link}}\" target=\"_blank\"><i class=\"fa fa-facebook\"\n                    aria-hidden=\"true\"></i></a>\n                <a *ngIf=\"!userData.facebook_link\" [routerLink]=\"['/', userData.cpp]\"><i class=\"fa fa-facebook\"\n                      aria-hidden=\"true\"></i></a>\n              </li>\n              <li>\n                <a *ngIf=\"userData.twitter_link\" href=\"{{userData.twitter_link}}\" target=\"_blank\"><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i></a>\n                <a *ngIf=\"!userData.twitter_link\" [routerLink]=\"['/', userData.cpp]\"><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i></a>\n              </li>\n              <li id=\"dropdownBasic2\" ngbDropdownToggle><a><i class=\"fa fa-share-alt\" aria-hidden=\"true\"></i></a></li>\n              <!--  <div ngbDropdownMenu aria-labelledby=\"dropdownBasic2\">\n                <ul>\n                  <li><a class=\"facebook\" href=\"#\"><i class=\"fa fa-facebook\" aria-hidden=\"true\"></i></a> <span>Facebook</span></li>\n                  <li><a class=\"twitter\" href=\"#\"><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i></a> <span>Twitter</span></li>\n                  <li><a class=\"whatsapp\" href=\"#\"><i class=\"fa fa-whatsapp\" aria-hidden=\"true\"></i></a> <span>WhatsApp</span></li>\n                  <li><a href=\"#\"><i class=\"fa fa-link\" aria-hidden=\"true\"></i></a> <span>Copy Link</span></li>\n                </ul>\n              </div> -->\n              <div ngbDropdownMenu aria-labelledby=\"dropdownBasic2\">\n                <ul>\n                  <li>\n                    <share-button button=\"facebook\"></share-button><span>Facebook</span>\n                  </li>\n                  <li>\n                    <share-button button=\"twitter\"></share-button><span>Twitter</span>\n                  </li>\n                  <li>\n                    <share-button button=\"whatsapp\"></share-button><span>WhatsApp</span>\n                  </li>\n                  <li><a href=\"javascript:void(0)\" (click)=\"copyLink()\"><i class=\"fa fa-link\" aria-hidden=\"true\"></i></a>\n                    <span>{{ 'PROFILE.COPY_LINK' |translate }}</span></li>\n                </ul>\n              </div>\n\n\n            </ul>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"profileCarousal\" >\n        <div class=\"profileMainBox\">\n          <div class=\"text-center\" *ngIf=\"loader.card\">\n            <i class=\"fa fa-cog fa-spin\"></i><br />\n            <p>{{ 'CARD.PLEASE_WAIT' | translate }}</p>\n          </div>\n          <div >\n\n            <owl-carousel #cardOwl [options]=\"mySlideOptions\" [carouselClasses]=\"['owl-theme', 'sliding']\">\n                <div class=\"item\" *ngIf=\"userCardList.length == 0\">\n                    <div class=\"iconDown\">\n                        <a href=\"javascript:void(0)\"  (click)=\"downloadDefaultCardFile()\"> <i class=\"fa fa-download\"\n                            aria-hidden=\"true\"></i></a>\n                        \n                      </div>\n                    <section class=\"sheet\">\n                        <div class=\"card-left\">\n                          <div class=\"card-profile\">\n                              <img *ngIf=\"profilePic\" [src]=\"profilePic\" alt=\"\">\n                              <img  *ngIf=\"userData && !profilePic && userData.gender && userData.experience_level\" src=\"assets/images/charachter/{{ userData.gender+'_'+userData.experience_level }}.png\" alt=\"\">\n                          </div>\n                          <div class=\"card-profile-txt\">\n                            <h2>{{userData.first_name | titlecase}} {{userData.last_name | titlecase}}</h2>\n                            <h5>{{ userData?.position?.details[0].name }}</h5>\n                          </div>\n                          <ul class=\"card-social\">\n                            <li><span class=\"hh\"><img src=\"assets/images/card_assets/images/phone.svg\" alt=\"\"></span> {{userData.mobile_code+'-'+userData.mobile_no}}\"</li>\n                            <li><span class=\"hh\"><img src=\"assets/images/card_assets/images/location.svg\" alt=\"\"></span> {{ userData.address + ' ' + userData.city+', ' + userData.country }}</li>\n                            <li class=\"mail-icon\"><span class=\"hh\"><img src=\"assets/images/card_assets/images/email.svg\" alt=\"\"></span> {{ userData.email }}</li>\n                          </ul>\n                        </div>\n                      \n                        <div class=\"card-right\">\n                          <div class=\"card-right-img\"><img src=\"assets/images/card_assets/images/card-logo.svg\" alt=\"\"></div>\n                          <div class=\"card-right-cont\">\n                            <div class=\"code-img\"><qrcode #cardQrCode [qrdata]=\"qrCodeUrl+'/'+userData?.cpp\" [size]=\"50\" [level]=\"'M'\" ></qrcode></div>\n                            <h5>CPP : {{ userData?.cpp }}</h5>\n                            <div class=\"gntby\">\n                              <ul>\n                                <li>Generated by</li>\n                                <li><img src=\"assets/images/card_assets/images/foot-logo.png\" alt=\"\"></li>\n                              </ul>\n                            </div>\n                          </div>\n                        </div>\n                      </section>\n                </div>\n              <div class=\"item\" *ngFor=\"let card of userCardList\">\n                <div class=\"iconDown\"><a class=\"anchor-common\" (click)=\"gotToCard(card)\" *ngIf=\"display.card\"> <i class=\"fa fa-download\"\n                      aria-hidden=\"true\"></i></a></div>\n                <div *ngIf=\"card.details\">\n                  <div class=\"profileSingle\">\n                    <div class=\"profileDescImg\"><img *ngIf=\"card.details.photo\" [src]=\"card.details.photo\" alt=\"\"></div>\n                    <h2>{{ card.details.name  }}</h2>\n                    <h3>{{ card.details.position }}</h3>\n                  </div>\n                  <div class=\"proLocation\">\n                    <p><span><i class=\"fa fa-mobile\" aria-hidden=\"true\"></i></span> {{ card.details.mobile }}</p>\n                    <p><span><i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i></span>\n                      {{ card.details.city_name+', '+card.details.country_name }}</p>\n                    <div class=\"qrCode\"><img *ngIf=\"card.details.qrcode\" [src]=\"card.details.qrcode\" alt=\"\"></div>\n                  </div>\n                </div>\n                <div *ngIf=\"!card.details && card.file\">\n                  <img [src]=\"card.file| picturepath:'card'\" />\n                </div>\n              </div>\n              <div class=\"item\" >\n                  <!-- <div class=\"iconDown\">\n                    <a href=\"javascript:void(0)\"  (click)=\"downloadDefaultCardFile()\"> <i class=\"fa fa-download\"\n                        aria-hidden=\"true\"></i></a>\n                    \n                  </div> -->\n                  <img src=\"assets/images/card-back.png\" />\n              </div>\n            </owl-carousel>\n          </div>\n\n        </div>\n      </div>\n\n      <div class=\"cvReview\">\n        <div class=\"profileMainBox\">\n          <div class=\"row align-items-center\">\n            <div class=\"col-lg-6 withRightBdr\">\n              <!-- <div class=\"progressWrap\">\n              <circle-progress [percent]=\"userData?.points\" [titleFontSize]=\"40\" [showSubtitle]=\"false\" [showUnits]=\"false\" [outerStrokeColor]=\"'#707070'\" [innerStrokeColor]=\"'#D4D4D4'\" [radius]=\"100\" [backgroundPadding]=\"7\" [outerStrokeWidth]=\"5\" [space]=\"-5\" [innerStrokeWidth]=\"5\" [animation]=\"true\" [animationDuration]=\"1000\"></circle-progress>\n              <div class=\"progressPoint\">Points</div>\n            </div>\n            <p>Knowledge Meter</p> -->\n              <div class=\"pointProgress\">\n                <div class=\"forPoints\"><span>{{ points }} {{ 'PROFILE.POINTS' | translate }}</span></div>\n                <div class=\"forRank\"><span>{{ 'PROFILE.YOUR_RANK' | translate }} <br> {{ rank }}</span></div>\n              </div>\n              <p *ngIf=\"loader.stat\" align=\"center\"><i class=\"fa fa-cog fa-spin\" aria-hidden=\"true\"></i></p>\n              <p class=\"tooltip-container\" (click)=\"openPointModal(pointsModal)\"> {{ 'PROFILE.KNOWLEDGE_METER' |translate }} \n                <i class=\"fa fa-info-circle meater-tooltip\"></i>\n                <span class=\"tooltip-text\">{{ siteSettings }}</span>\n              </p>\n            </div>\n            <div class=\"col-lg-6\">\n              \n              <div class=\"cppNum\" (click)=\"connectionSend(userData.id)\">\n                  <span><i class=\"fa fa-users\" aria-hidden=\"true\"></i>\n                &nbsp;{{connection_count}} <i *ngIf=\"loader.stat\" class=\"fa fa-cog fa-spin\" aria-hidden=\"true\"></i>\n              </span>\n                </div>\n                <a class=\"cppPreview\" href=\"javascript:void(0)\" (click)=\"recommendationSend()\"><i class=\"fa fa-trophy\" aria-hidden=\"true\"></i> {{recommendations}} <i\n                  *ngIf=\"loader.stat\" class=\"fa fa-cog fa-spin\" aria-hidden=\"true\"></i></a>\n\n            </div>\n          </div>\n        </div>\n      </div>\n\n    </div>\n\n    <div class=\"col-xl-9 col-lg-8\">\n      <div class=\"alert alert-danger\" *ngIf=\"errorMsg\">{{errorMsg}}</div>\n      <div class=\"alert alert-success\" *ngIf=\"successMsg\">{{successMsg}}</div>\n      <div class=\"formTabs alt\">\n        <ngb-tabset>\n          <ngb-tab *ngIf=\"display.personalInfo\">\n            <ng-template ngbTabTitle><i class=\"fa fa-info\" aria-hidden=\"true\"></i>\n              {{ 'PROFILE.PERSONAL_INFO' | translate }}</ng-template>\n            <ng-template ngbTabContent>\n              <div *ngIf=\"loader.personal\" class=\"loader-p\"><i class=\"fa fa-cog fa-spin\"></i></div>\n              <div class=\"row\">\n                <div class=\"col-lg-4\">\n                  <div class=\"formTabsInpWrap\">\n                    <input class=\"inpField noRadious\" type=\"text\" name=\"country\" value=\"{{userData?.first_name}}\"\n                      placeholder=\"Country\" readonly>\n                  </div>\n                </div>\n                <div class=\"col-lg-4\">\n                  <div class=\"formTabsInpWrap\">\n                    <input class=\"inpField noRadious\" type=\"text\" name=\"\" value=\"{{userData?.last_name}}\"\n                      placeholder=\"City\" readonly>\n                  </div>\n                </div>\n                <div class=\"col-lg-4\">\n                  <div class=\"formTabsInpWrap\">\n                    <input class=\"inpField noRadious\" type=\"text\" name=\"\" value=\"{{userData?.family_name}}\" readonly>\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"row\">\n                <div class=\"col-lg-6\">\n                  <div class=\"formTabsInpWrap\">\n                    <input class=\"inpField noRadious\" type=\"text\" name=\"country\" value=\"{{userData?.country?.name}}\"\n                      placeholder=\"Country\" readonly>\n                  </div>\n                </div>\n                <div class=\"col-lg-6\">\n                  <div class=\"formTabsInpWrap\">\n                    <input class=\"inpField noRadious\" type=\"text\" name=\"\" value=\"{{userData?.city?.name}}\"\n                      placeholder=\"City\" readonly>\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"formTabsInpWrap\">\n                <input class=\"inpField noRadious\" type=\"text\" name=\"\" value=\"{{userData.address}}\" placeholder=\"Address\"\n                  readonly>\n              </div>\n\n              <div class=\"row\">\n                <div class=\"col-lg-6\">\n                  <div class=\"formTabsInpWrap\">\n                    <input class=\"inpField noRadious\" type=\"text\" name=\"dob\"\n                      value=\"{{userData.dob | date: 'dd/MM/yyyy'}}\" placeholder=\"Date Of Birth\" readonly>\n                  </div>\n                </div>\n                <div class=\"col-lg-6\">\n                  <div class=\"formTabsInpWrap\">\n                    <input class=\"inpField noRadious\" type=\"text\" name=\"gender\" value=\"{{userData.gender | genderName}}\"\n                      placeholder=\"Gender\" readonly>\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"formTabsInpWrap\">\n                <input class=\"inpField noRadious\" type=\"email\" name=\"email\" value=\"{{userData.email}}\"\n                  placeholder=\"Email\" readonly>\n              </div>\n\n              <div class=\"formTabsInpWrap\">\n                <input class=\"inpField noRadious\" type=\"text\" name=\"phone\" value=\"{{userData.mobile_no}}\"\n                  placeholder=\"Mobile No\" readonly>\n              </div>\n              <div class=\"formTabsInpWrap\">\n                  <input class=\"inpField noRadious\" type=\"text\" name=\"phone\" value=\"{{userData.website}}\"\n                    placeholder=\"Mobile No\" readonly>\n                </div>\n\n            </ng-template>\n          </ngb-tab>\n          <ngb-tab *ngIf=\"display.education\" (click)=\"educationDetails()\">\n            <ng-template ngbTabTitle><span (click)=\"educationDetails()\"><i class=\"fa fa-book\" aria-hidden=\"true\"></i>\n                {{ 'PROFILE.EDUCATION' | translate }}</span></ng-template>\n            <ng-template ngbTabContent>\n              <div *ngIf=\"loader.education\" class=\"loader-p\"><i class=\"fa fa-cog fa-spin\"></i></div>\n              <ul class=\"list-group\">\n\n                <li class=\"list-group-item\" *ngFor=\"let education of allEducations\">\n                  <h5>{{education?.degreeDetails?.details[0].name}}</h5>\n\n                  <p>{{education?.from_year}} - {{education?.to_year}}</p>\n                  <p>{{education?.degreeFieldDetails?.details[0].name}}</p>\n\n\n                </li>\n\n                <li *ngIf=\"allEducations.length == 0\">\n                  <span>\n                    {{ \"PROFILEEDIT.NO_RECORD_FOUND\" |translate }}\n                  </span>\n                </li>\n              </ul>\n            </ng-template>\n          </ngb-tab>\n          <ngb-tab *ngIf=\"display.skill\" (click)=\"skillDetails()\">\n            <ng-template ngbTabTitle><span (click)=\"skillDetails()\"><i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n                {{ 'PROFILE.SKILLS' | translate }}</span></ng-template>\n            <ng-template ngbTabContent>\n              <div *ngIf=\"loader.skills\" class=\"loader-p\"><i class=\"fa fa-cog fa-spin\"></i></div>\n              <ul class=\"list-group\">\n\n                <li class=\"list-group-item\" *ngFor=\"let skill of allSkills\">\n                  <h5>\n                    <h5>{{skill?.details[0].name}}</h5>\n                  </h5>\n                  <p *ngIf=\"skill?.status === 1\">{{ \"PROFILEEDIT.SKILLS_STATUS_EXCELLENT\"|translate }}</p>\n                  <p *ngIf=\"skill?.status === 2\">{{ \"PROFILEEDIT.SKILLS_STATUS_VERY_GOOD\"|translate }}</p>\n                  <p *ngIf=\"skill?.status === 3\">{{ \"PROFILEEDIT.SKILLS_STATUS_GOOD\"|translate }}</p>\n                  <p *ngIf=\"skill?.status === 4\">{{ \"PROFILEEDIT.SKILLS_STATUS_FRESH\"|translate }}</p>\n\n                </li>\n\n                <li *ngIf=\"allSkills.length == 0\">\n                  <span>\n                    {{ \"PROFILEEDIT.NO_RECORD_FOUND\" |translate }}\n                  </span>\n                </li>\n              </ul>\n            </ng-template>\n          </ngb-tab>\n          <ngb-tab *ngIf=\"display.experience\" (click)=\"experienceDetails()\">\n            <ng-template ngbTabTitle><span (click)=\"experienceDetails()\"><i class=\"fa fa-suitcase\"\n                  aria-hidden=\"true\"></i> {{ 'PROFILE.EXPERIENCE' | translate }}</span></ng-template>\n            <ng-template ngbTabContent>\n              <div *ngIf=\"loader.experience\" class=\"loader-p\"><i class=\"fa fa-cog fa-spin\"></i></div>\n              <ul class=\"list-group\">\n\n                <li class=\"list-group-item\" *ngFor=\"let experience of allExperiences\">\n                  <h5>{{experience?.company_name}}</h5>\n                  <p *ngIf=\"experience?.is_current === 1; else elseBlock\">\n                    {{experience?.from_year}} - <span\n                      *ngIf=\"experience?.is_current === 1\">{{ 'PROFILE.EXPERIENCE_CURRENT'| translate }}</span>\n                  </p>\n                  <ng-template #elseBlock>{{experience?.from_year}} - {{experience?.to_year}}</ng-template>\n                  <p>{{experience?.position?.details[0].name}}</p>\n                  <p>{{experience?.summery}}</p>\n\n\n                </li>\n\n                <li *ngIf=\"allExperiences.length == 0\">\n                  <span>\n                    {{ \"PROFILEEDIT.NO_RECORD_FOUND\" |translate }}\n                  </span>\n                </li>\n              </ul>\n            </ng-template>\n          </ngb-tab>\n          <ngb-tab *ngIf=\"display.certificate\" (click)=\"certificateDetails()\">\n            <ng-template ngbTabTitle><span (click)=\"certificateDetails()\"><i class=\"fa fa-graduation-cap\"\n                  aria-hidden=\"true\"></i> {{ 'PROFILE.CERTIFICATE' | translate }}</span></ng-template>\n            <ng-template ngbTabContent>\n              <div *ngIf=\"loader.certificate\" class=\"loader-p\"><i class=\"fa fa-cog fa-spin\"></i></div>\n              <ul class=\"list-group\">\n\n                <li class=\"list-group-item\" *ngFor=\"let certificate of allCertificates\">\n                  <h5>{{certificate.certificate_name}}</h5>\n                  <p>From Year : {{certificate.from_year}} - {{certificate.to_year}}</p>\n                  <p>{{certificate.summery}}</p>\n                  <p *ngIf=\"certificate.picture\"><img [src]=\"( certificate.picture)| picturepath:'certificate'\" alt=\"\">\n                  </p>\n                </li>\n\n                <li *ngIf=\"allCertificates.length == 0\">\n                  <span>\n                    {{ \"PROFILEEDIT.NO_RECORD_FOUND\" |translate }}\n                  </span>\n                </li>\n              </ul>\n            </ng-template>\n          </ngb-tab>\n          <ngb-tab *ngIf=\"display.project\" (click)=\"projectDetails()\">\n            <ng-template ngbTabTitle><span (click)=\"projectDetails()\"><i class=\"fa fa-graduation-cap\"\n                  aria-hidden=\"true\"></i> {{ 'PROFILE.PROJECT' | translate }}</span></ng-template>\n            <ng-template ngbTabContent>\n              <p *ngIf=\"loader.project\" class=\"loader-p\"><i class=\"fa fa-cog fa-spin\"></i></p>\n              <ul class=\"list-group\">\n\n                <li class=\"list-group-item\" *ngFor=\"let project of allProjects\">\n                  <h5>{{project.name}}</h5>\n                  <p>{{project.company.company_name}}</p>\n                  <p>{{project.from_date|date}} - {{project.to_date|date}}</p>\n\n                </li>\n\n                <li *ngIf=\"allProjects?.length == 0\">\n                  <span>\n                    {{ \"PROFILEEDIT.NO_RECORD_FOUND\" |translate }}\n                  </span>\n                </li>\n              </ul>\n            </ng-template>\n          </ngb-tab>\n        </ngb-tabset>\n      </div>\n\n\n      <div class=\"testimonialCarousal\">\n        <div class=\"profileMainBox\">\n          <h2>{{ 'PROFILE.TESTIMONIALS' | translate }} :</h2> <span class=\"addTestiBtn\"\n            (click)=\"openTestimonialForm()\" [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"testiCollapse\"><i\n              class=\"fa fa-reply\" aria-hidden=\"true\"></i> {{'TESTIMONIALS.ADD_TESTIMONY' | translate }}</span>\n          <form [formGroup]=\"testimonialForm\" novalidate (submit)=\"testimonialAction()\">\n            <div style=\"margin-top:25px;\" class=\"msg-wrp\">\n              <div class=\"alert alert-danger\" *ngIf=\"errorMessage\">{{errorMessage}}</div>\n              <div class=\"alert alert-success\" *ngIf=\"successMessage\">{{successMessage}}</div>\n            </div>\n            <div id=\"testiCollapse\" class=\"testiCollapse\" [ngbCollapse]=\"isCollapsed\">\n              <div class=\"testiClose\" (click)=\"isCollapsed = !isCollapsed\"></div>\n              <textarea name=\"message\" placeholder=\"Lorem ipsum dolor\" formControlName=\"message\"></textarea>\n              <div\n                *ngIf=\"testimonialForm.controls['message'].invalid && (testimonialForm.controls['message'].dirty || testimonialForm.controls['message'].touched)\"\n                class=\"alert alert-danger\">\n                <div *ngIf=\"testimonialForm.controls['message'].errors.required\">\n                  {{ 'TESTIMONIALS.ADD_ERROR'| translate}}</div>\n              </div>\n              <div class=\"testiCollapseFooter\">\n                <div class=\"row\">\n                  <div class=\"col-6\">\n                    <span class=\"tooltipYellow\" placement=\"left\"\n                      ngbTooltip=\"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy \"><i\n                        class=\"fa fa-exclamation-triangle\" aria-hidden=\"true\"></i></span>\n                    <label class=\"customCheck\"> {{'TESTIMONIALS.ANONYMOUS' | translate }}\n                      <input checked=\"checked\" type=\"checkbox\" name=\"anonymous\" id=\"anonymous\" value=\"1\"\n                        formControlName=\"anonymous\"><span class=\"checkmark\"></span>\n                    </label>\n                  </div>\n                  <div class=\"col-6\">\n                    <div class=\"text-right\">\n\n                      <button type=\"submit\"\n                        [disabled]=\"testimonialForm.pristine || testimonialForm.invalid || (testimonialForm.valid && testimonailFormSubmitStatus)\">{{'TESTIMONIALS.SEND' | translate }}\n                        <i class=\"fa fa-paper-plane\" aria-hidden=\"true\"></i> </button>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </form>\n          <div *ngIf=\"allTestimonials?.length > 0 \">\n            <owl-carousel [options]=\"testimonialCaro\" [items]=\"allTestimonials\"\n              [carouselClasses]=\"['owl-theme', 'sliding']\">\n\n              <div class=\"item\" *ngFor=\"let testimonial of allTestimonials\">\n                <div class=\"testimonialHead\">\n                  <div class=\"testimonialHeadLeft\" >\n                      <img *ngIf=\"testimonial.is_anonymous != 1 && testimonial.fromuser.profile_pic\"\n                      [src]=\"testimonial.fromuser.profile_pic| picturepath:'users'\" alt=\"\">\n                    <img class=\"no-pro-pic\" *ngIf=\"testimonial.is_anonymous != 1 && !testimonial.fromuser.profile_pic && testimonial.fromuser.gender=='F'\" src=\"assets/images/female.jpg\" alt=\"\">\n                    <img class=\"no-pro-pic\" *ngIf=\"testimonial.is_anonymous != 1 && !testimonial.fromuser.profile_pic && testimonial.fromuser.gender=='M'\" src=\"assets/images/male.jpg\" alt=\"\">\n                    <img class=\"no-pro-pic\" *ngIf=\"testimonial.is_anonymous == 1\" src=\"assets/images/testimonial_no_img.jpg\" alt=\"\">\n\n                  </div>\n                  \n                  <div class=\"testimonialHeadRight\">\n                    <div *ngIf=\"testimonial.is_anonymous == 0\">\n                      <h3>{{(testimonial.fromuser.first_name+' '+testimonial.fromuser.last_name)}}</h3>\n                      <h4 *ngIf=\"testimonial.fromuser.position\">{{testimonial.fromuser.position.details[0].name}}</h4>\n                    </div>\n                    <div *ngIf=\"testimonial.is_anonymous == 1\">\n                      <h3>{{ 'TESTIMONIALS.ANONYMOUS'|translate }}</h3>\n                    </div>\n                  </div>\n                </div>\n                <p>{{testimonial.message}}</p>\n              </div>\n\n            </owl-carousel>\n          </div>\n\n          <div *ngIf=\"allTestimonials?.length == 0\" style=\"margin-top:25px;\">\n            <span>\n              {{ \"TESTIMONIALS.NO_RECORD_FOUND\" |translate }}\n            </span>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"managerLink alt\">\n        <div class=\"profileMainBox\" *ngIf=\"activeUserId\">\n          <h2 class=\"rowDiv\">\n          <span class=\"manager-text\">{{ 'PROFILE.CAREERY_MANAGER' |translate }} </span>\n          <span (click)=\"openCareeryManagerModal()\" class=\"icon\"></span>\n          </h2>\n        </div>\n      </div>\n\n    </div>\n\n  </div>\n</div>\n<app-blocksmodal></app-blocksmodal>\n<!-- USER POINT MODAL -->\n<ng-template #pointsModal let-modal id=\"modalPopup\">\n  <h2><span>{{ 'PROFILE.POINTS' |translate }}</span></h2>\n  <span class=\"modalClose\" (click)=\"modal.dismiss('Cross click')\"></span>\n  <div class=\"modal-body\">\n    <div id=\"pointContents\" class=\"graphModal\">\n      <div class=\"user-details\">\n        <ul>\n          <li><small>{{ 'PROFILE.NAME' |translate }}</small>\n            <span>{{ (userData.first_name+' '+userData.last_name) }}</span></li>\n          <li><small>{{ 'PROFILE.CPP' |translate }}</small> <span>{{ (userData.cpp) }}</span></li>\n        </ul>\n      </div>\n      <canvas *ngIf=\"pieChartData.length > 0\" baseChart id=\"pointCanvas\" [data]=\"pieChartData\" [labels]=\"pieChartLabels\" [colors]=\"pieChartColors\"\n        [chartType]=\"pieChartType\" [options]=\"pieOptions\"></canvas>\n        <div class=\"no-record-msg\" *ngIf=\"pieChartData.length == 0\">{{ 'COMMON.NO_USER_POINTS' | translate }}</div>\n    </div>\n    <div class=\"chart-actions\" *ngIf=\"pieChartData.length > 0\">\n      <ul ngbDropdown>\n        <li><a (click)=\"downloadCanvas($event)\" id=\"downloadChartLink\"><i class=\"fa fa-floppy-o\"></i></a></li>\n        <li><a (click)=\"printChart()\"><i class=\"fa fa-print\"></i></a></li>\n        <li id=\"dropdownBasic3\" ngbDropdownToggle><a><i class=\"fa fa-share-alt\" aria-hidden=\"true\"></i></a></li>\n        <div ngbDropdownMenu aria-labelledby=\"dropdownBasic3\">\n          <ul>\n            <li>\n              <share-button button=\"facebook\" [url]=\"baseOrigin+'/user/chart/'+userData.cpp\"></share-button> <span>Facebook</span>\n            </li>\n            <li>\n              <share-button button=\"twitter\" [url]=\"baseOrigin+'/user/chart/'+userData.cpp\"></share-button> <span>Twitter</span>\n            </li>\n            <li>\n              <share-button button=\"whatsapp\" [url]=\"baseOrigin+'/user/chart/'+ userData.cpp\"></share-button> <span>WhatsApp</span>\n            </li>\n            <!-- <li><a href=\"#\"><i class=\"fa fa-link\" aria-hidden=\"true\"></i></a> <span>Copy Link</span></li> -->\n          </ul>\n        </div>\n      </ul>\n    </div>\n  </div>\n</ng-template>\n\n<!-- send message modal-->\n<ng-template #messageSendModal let-modal id=\"messageModalPopup\">\n  <h2><span>{{ 'PROFILE.SEND_MESSAGE' |translate }}</span></h2>\n  <span class=\"modalClose\" (click)=\"modal.dismiss('Cross click')\"></span>\n  <div class=\"modal-body\">\n    <div class=\"alert alert-success\" *ngIf=\"messageSuccessMsg\">{{ messageSuccessMsg }}</div>\n    <div class=\"alert alert-danger\" *ngIf=\"messageErrorMsg\">{{ messageErrorMsg }}</div>\n    <div class=\"proEdit\">\n      <div class=\"formWrap alt\">\n        <textarea class=\"inpField fullWidth\" [(ngModel)]=\"messageForm.message\"\n          placeholder=\"{{ 'PROFILE.MESSAGE' |translate }}\"></textarea>\n      </div>\n      <div class=\"buttonGr\">\n        <div class=\"text-center\">\n          <button type=\"button\" class=\"btnOrange\" name=\"button\" (click)=submitSendMessageFrom()>\n            <i class=\"fa fa-cog fa-spin\" *ngIf=\"loader.messageSend\"></i> {{ 'PROFILE.SEND' | translate }}\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</ng-template>\n\n\n\n<ng-template #careeryPathModal let-modal id=\"careeryPathModal\">\n  <!-- <h2><span>{{ 'PROFILE.POINTS' |translate }}</span></h2> -->\n  <span class=\"modalClose\" (click)=\"modal.dismiss('Cross click')\"></span>\n  <div class=\"modal-body noPad\">\n    <div style=\"\" class=\"profileDesc\">\n      <div class=\"row\">\n        <div class=\"col-md-6 col-xs-12\"><a class=\"modBtn\" [routerLink]=\"['/cv/build']\">{{ 'PROFILE.CV_BUILDER_LINK' | translate }}</a></div>\n        <div class=\"col-md-6 col-xs-12\"><a class=\"modBtn\" [routerLink]=\"['/card/build']\">{{ 'PROFILE.CARD_BUILDER_LINK' | translate }}</a></div>\n        <div class=\"col-md-6 col-xs-12\"><a class=\"modBtn\" [routerLink]=\"['/profile/edit']\">{{ 'PROFILE.EDIT_PROF_LINK' | translate }}</a></div>\n      </div>\n      \n      \n      \n    </div>\n  </div>\n</ng-template>\n<ng-template #careeryMyVideoModal let-modal id=\"careeryPathModal\">\n    <!-- <h2><span>{{ 'PROFILE.POINTS' |translate }}</span></h2> -->\n    <span class=\"modalClose\" (click)=\"modal.dismiss('Cross click')\"></span>\n    <div class=\"modal-body noPad text-center\">\n        <iframe *ngIf=\"profile_video_link\" width=\"560\" height=\"315\" [src]=\"profile_video_link\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n    </div>\n  </ng-template>"

/***/ }),

/***/ "./src/app/profile/publicprofile/publicprofile.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/profile/publicprofile/publicprofile.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHVibGljcHJvZmlsZS9wdWJsaWNwcm9maWxlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/profile/publicprofile/publicprofile.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/profile/publicprofile/publicprofile.component.ts ***!
  \******************************************************************/
/*! exports provided: PublicprofileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicprofileComponent", function() { return PublicprofileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _globalConfig__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../globalConfig */ "./src/app/globalConfig.ts");
/* harmony import */ var _services_testimonial_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/testimonial.service */ "./src/app/services/testimonial.service.ts");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _services_cvcard_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/cvcard.service */ "./src/app/services/cvcard.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _global_blocksmodal_blocksmodal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../global/blocksmodal/blocksmodal.component */ "./src/app/global/blocksmodal/blocksmodal.component.ts");
/* harmony import */ var _global_picturepath_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../global/picturepath.pipe */ "./src/app/global/picturepath.pipe.ts");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _loader_loader_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../loader/loader.service */ "./src/app/loader/loader.service.ts");
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-owl-carousel */ "./node_modules/ngx-owl-carousel/index.js");
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_16__);
/*****************************************************
# Company Name          :
# Author                :
# Created Date          : 04-02-2019
# Module                : PublicprofileComponent
# Object name           : PublicprofileComponent
# Functionality         : public user profile details
# Purpose               : constructor, ngOnInit, checkDisplayMode, testimonialAction, educationDetails, skillDetails, experienceDetails, certificateDetails
*******************************************************/

















var PublicprofileComponent = /** @class */ (function () {
    /* Function Name : constructor
      * Author :
      * Created Date : 04-02-2019
      * Modified Date : *
      * Purpose : to define the all helpful objects and define the languages data
      * PARAMS : route, authService, fb, testimonialService, usersService, translate, cService
      */
    function PublicprofileComponent(route, activeRoute, fb, testimonialService, usersService, translate, cService, modalService, filePathPipe, cvCardService, sanitizer, loderService) {
        this.route = route;
        this.activeRoute = activeRoute;
        this.fb = fb;
        this.testimonialService = testimonialService;
        this.usersService = usersService;
        this.translate = translate;
        this.cService = cService;
        this.modalService = modalService;
        this.filePathPipe = filePathPipe;
        this.cvCardService = cvCardService;
        this.sanitizer = sanitizer;
        this.loderService = loderService;
        this.pieChartLabels = [];
        this.pieChartData = [];
        this.pieChartColors = [];
        this.pieOptions = null;
        this.pieChartType = 'pie'; // points chart type
        this.testimonailFormSubmitStatus = false;
        this.errorMessage = ""; //set error message
        this.currentDate = new Date(); // set current date
        this.activeUserId = ''; // set active user id
        this.userId = null; // set user id
        this.userData = {}; // set user data
        this.profilePic = ''; // set profile pic
        this.connection_count = null; // connection count
        this.points = null; // user points 
        this.rank = null; // get user rank
        this.recommendations = null; // user recommendations count
        this.userPrivicySettings = []; // set user privicy settings
        this.allEducations = []; // all user education data
        this.allSkills = []; // all user skills data
        this.allExperiences = []; // all user experience data
        this.allCertificates = []; // all user certificate data
        this.allProjects = []; // all projects data
        this.imagePath = _globalConfig__WEBPACK_IMPORTED_MODULE_6__["s3URL"] + 'userspic/'; // set image path
        this.errorMsg = ""; // set error message 
        this.is_anonymous = null; // check anouymous
        this.currentDay = new Date(); // set current date
        this.images = null; // set images
        this.siteSettings = null;
        this.profile_video_link = '';
        this.display = {
            "block": true,
            "personalInfo": true,
            "education": true,
            "skill": true,
            "experience": true,
            "certificate": true,
            "project": true,
            "cv": true,
            "card": true
        };
        this.loader = {
            'personal': false,
            'education': false,
            'skills': false,
            'experience': false,
            'certificate': false,
            "stat": false,
            "messageSend": false,
            "card": false
        };
        this.messageForm = {
            "id": null,
            "message": ""
        };
        this.messageErrorMsg = "";
        this.messageSuccessMsg = "";
        this.userCardList = [];
        this.mySlideOptions = { items: 1, dots: false, nav: true }; // slider settings
        this.testimonialCaro = { items: 1, dots: true, nav: true }; // set testimonial slider settings 
        this.isCollapsed = true; // check is collapsed
        this.baseOrigin = null;
        this.qrCodeUrl = document.location.origin;
        this.cService.activelang.subscribe(function (lang) {
            // this language will be used as a fallback when a translation isn't found in the current language
            translate.setDefaultLang(lang);
            // the lang to use, if the lang isn't available, it will use the current loader to get them
            translate.use(lang);
        });
        this.createTestimonialForm();
        var loggedUserData = this.cService.getLoggedUserData();
        if (loggedUserData) {
            this.activeUserId = loggedUserData._i;
        }
    }
    /* Function Name : checkDisplayMode
      * Author :
      * Created Date : 04-02-2019
      * Modified Date : *
      * Purpose : to check block privacy
      * PARAMS : blockName
      */
    PublicprofileComponent.prototype.checkDisplayMode = function (blockName) {
        var loggedInUser = this.cService.getLoggedUserData();
        var option = this.userPrivicySettings.find(function (e) {
            return e.option == blockName;
        });
        if (option === undefined) {
            return true;
        }
        if (option && option.option === 'view-my-profile' && option.show_status == 0) {
            this.route.navigate(["access-deny"]);
        }
        if (!loggedInUser && option && option.option === 'guest-view-my-profile' && option.show_status == 0) {
            this.route.navigate(["access-deny"]);
        }
        if (option && (option.settings === 'public' || option.settings === '')) {
            return true;
        }
        if (option && option.settings === 'only-for-me' && loggedInUser && loggedInUser._i == this.userData.id) {
            return true;
        }
        if (option && option.settings === 'my-connections' && loggedInUser && this.userData.connectionExist == 1) {
            return true;
        }
        if (option && option.settings === 'specific' && loggedInUser) {
            var specificUser = option.specific_users;
            if (specificUser) {
                var specificUsers = JSON.parse(specificUser);
                var checkUser = specificUsers.find(function (item) {
                    return item.id == loggedInUser._i;
                });
                if (checkUser) {
                    return true;
                }
            }
        }
        return false;
    };
    /* Function Name : ngOnInit
      * Author :
      * Created Date : 04-02-2019
      * Modified Date : *
      * Purpose : to get data after html load
      * PARAMS :
      */
    PublicprofileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.baseOrigin = window.location.origin;
        localStorage.setItem('_sp', 'profile_user');
        this.loader.personal = true;
        this.activeRoute.params.subscribe(function (params) {
            _this.usersService.userDetailsByCPP(params.userCPP).subscribe(function (response) {
                _this.userCPP = params.userCPP;
                if (response.statustext == 'success') {
                    _this.userData = response.data;
                    if (response['data'].video_link) {
                        var videoUrl = _this.cService.getYoutubeEmbedUrl(response['data'].video_link);
                        _this.profile_video_link = (response['data'].video_link) ? _this.sanitizer.bypassSecurityTrustResourceUrl(videoUrl) : '';
                    }
                    if (_this.userData.id) {
                        _this.userPrivicySettings = _this.userData.settings;
                        _this.siteSettings = _this.userData.site_settings.user_point_tooltip_text;
                        // console.log(this.userPrivicySettings);
                        //*****///
                        _this.display.personalInfo = _this.checkDisplayMode('see-personal-info-tab');
                        _this.display.education = _this.checkDisplayMode('see-education-tab');
                        _this.display.skill = _this.checkDisplayMode('see-skill-tab');
                        _this.display.experience = _this.checkDisplayMode('see-experience-tab');
                        _this.display.certificate = _this.checkDisplayMode('see-certificates-tab');
                        _this.display.project = _this.checkDisplayMode('see-project-tab');
                        _this.display.cv = _this.checkDisplayMode('download-cv');
                        _this.display.card = _this.checkDisplayMode('download-business-card');
                        if (_this.display.education) {
                            _this.educationDetails();
                        }
                        if (_this.display.experience) {
                            _this.experienceDetails();
                        }
                        if (_this.display.skill) {
                            _this.skillDetails();
                        }
                        if (_this.display.certificate) {
                            _this.certificateDetails();
                        }
                        if (_this.display.project) {
                            _this.projectDetails();
                        }
                        _this.getTestimonials();
                        _this.statDetails();
                        if (_this.userData.profile_pic) {
                            _this.profilePic = _globalConfig__WEBPACK_IMPORTED_MODULE_6__["s3URL"] + 'userspic/' + _this.userData.profile_pic;
                        }
                        _this.usersService.updateProfileViewer({
                            "_ru": btoa(_this.userData.id)
                        }).subscribe(function (response) { });
                        if (localStorage.getItem("_user")) { // get loggedin user details
                            _this.getLoggedUserDetails();
                        }
                    }
                    else {
                        _this.route.navigate(["access-deny"]);
                    }
                }
                else {
                    _this.route.navigate(["access-deny"]);
                }
                _this.loader.personal = false;
                _this.getUserCardList();
                if (localStorage.getItem("_user")) { // is loggedin
                    _this.cService.emitNotification(_this.userData.cpp, 'PS');
                }
            });
        });
        this.blockModal.closeBlock.subscribe(function (res) {
            if (res == 'unblock') {
                _this.display.block = true;
            }
            _this.getLoggedUserDetails();
        });
    };
    /* Function Name : statDetails
      * Author :
      * Created Date : 05-03-2019
      * Modified Date : *
      * Purpose : to get user  stat details
      * PARAMS :
      */
    PublicprofileComponent.prototype.statDetails = function () {
        var _this = this;
        this.loader.stat = true;
        var postData = {
            id: btoa(this.userData.id)
        };
        this.usersService.userStatDetails(postData).subscribe(function (response) {
            _this.loader.stat = false;
            if (response.statustext == 'success') {
                _this.connection_count = response.data.connection_count;
                _this.points = response.data.points;
                _this.recommendations = response.data.recommendations;
                _this.rank = response.data.rank;
            }
        });
    };
    /* Function Name : getLoggedUserDetails
    * Author :
    * Created Date : 05-02-2019
    * Modified Date : *
    * Purpose : to get the loggedin user data
    * PARAMS :
    */
    PublicprofileComponent.prototype.getLoggedUserDetails = function () {
        var _this = this;
        this.usersService.userDetails().subscribe(function (response) {
            var blockUsers = response.data.blocksIds;
            if (blockUsers.blocks_ids) {
                var blockIds = blockUsers.blocks_ids.split(",");
                if (blockIds.indexOf(_this.userData.id.toString()) > -1) {
                    _this.display.block = false;
                }
                else {
                    _this.display.block = true;
                }
            }
        });
    };
    /* Function Name : createTestimonialForm
      * Author :
      * Created Date : 04-02-2019
      * Modified Date : *
      * Purpose : to create the testimonial form
      * PARAMS :
      */
    PublicprofileComponent.prototype.createTestimonialForm = function () {
        this.testimonialForm = this.fb.group({
            id: [],
            message: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            anonymous: ['']
        });
    };
    /* Function Name : testimonialAction
    * Author :
    * Created Date : 05-02-2019
    * Modified Date : *
    * Purpose : to submit testimonial formm
    * PARAMS :
    */
    PublicprofileComponent.prototype.testimonialAction = function () {
        var _this = this;
        var formPostData = {
            "to_user_id": this.userData.id,
            "message": this.testimonialForm.value.message,
            "is_anonymous": Number(this.testimonialForm.value.anonymous),
            "post_on": this.currentDate
        };
        this.testimonailFormSubmitStatus = true;
        this.testimonialService.addTestimonial(formPostData).subscribe(function (response) {
            if ((response['statustext'] === 'success') && (response['status'] == 200)) {
                _this.cService.emitNotification(_this.userData.cpp, 'T');
                _this.translate.get('COMMON.SUCCESS').subscribe(function (tData) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_14___default()({
                        title: tData,
                        text: response['message'],
                        icon: 'success'
                    });
                });
            }
            else {
                _this.translate.get('COMMON.ERROR').subscribe(function (tData) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_14___default()({
                        title: tData,
                        text: response['message'],
                        icon: 'success'
                    });
                });
            }
            _this.testimonailFormSubmitStatus = false;
            _this.testimonialForm.reset();
            _this.isCollapsed = true;
        });
    };
    /* Function Name : educationDetails
    * Author :
    * Created Date : 05-02-2019
    * Modified Date : *
    * Purpose : to get education details
    * PARAMS :
    */
    PublicprofileComponent.prototype.educationDetails = function () {
        var _this = this;
        this.loader.education = true;
        var type = 'education';
        var cpp = this.userData.cpp;
        this.usersService.userDetailsByCppType(cpp, type).subscribe(function (response) {
            if ((response['statustext'] === 'success')) {
                var count = response['data']['degree'].length;
                if (count >= 1) {
                    _this.allEducations = response['data']['degree'];
                }
                else {
                    _this.allEducations = [];
                }
            }
            _this.loader.education = false;
        });
    };
    /* Function Name : skillDetails
    * Author :
    * Created Date : 05-02-2019
    * Modified Date : *
    * Purpose : to get skill details
    * PARAMS :
    */
    PublicprofileComponent.prototype.skillDetails = function () {
        var _this = this;
        this.loader.skills = true;
        var type = 'skills';
        var cpp = this.userData.cpp;
        this.usersService.userDetailsByCppType(cpp, type).subscribe(function (response) {
            if ((response['statustext'] === 'success')) {
                var count = response['data']['skills'].length;
                if (count >= 1) {
                    _this.allSkills = response['data']['skills'];
                }
                else {
                    _this.allSkills = [];
                }
            }
            _this.loader.skills = false;
        });
    };
    /* Function Name : experienceDetails
    * Author :
    * Created Date : 05-02-2019
    * Modified Date : *
    * Purpose : to get experience details
    * PARAMS :
    */
    PublicprofileComponent.prototype.experienceDetails = function () {
        var _this = this;
        this.loader.experience = true;
        var type = 'experience';
        var cpp = this.userData.cpp;
        this.usersService.userDetailsByCppType(cpp, type).subscribe(function (response) {
            if ((response['statustext'] === 'success')) {
                var count = response['data']['experience'].length;
                if (count >= 1) {
                    _this.allExperiences = response['data']['experience'];
                }
                else {
                    _this.allExperiences = [];
                }
            }
            _this.loader.experience = false;
        });
    };
    /* Function Name : certificateDetails
    * Author :
    * Created Date : 05-02-2019
    * Modified Date : *
    * Purpose : to get certificate details
    * PARAMS :
    */
    PublicprofileComponent.prototype.certificateDetails = function () {
        var _this = this;
        this.loader.certificate = true;
        var type = 'certificate';
        var cpp = this.userData.cpp;
        this.usersService.userDetailsByCppType(cpp, type).subscribe(function (response) {
            if ((response['statustext'] === 'success')) {
                _this.allCertificates = response['data']['certificates'];
            }
            _this.loader.certificate = false;
        });
    };
    /* Function Name : projectDetails
  * Author :
  * Created Date : 14-03-2019
  * Modified Date : *
  * Purpose : to get user project detaills
  * PARAMS :
  */
    PublicprofileComponent.prototype.projectDetails = function () {
        var _this = this;
        var type = 'project';
        this.loader.project = true;
        var cpp = this.userData.cpp;
        this.usersService.userDetailsByCppType(cpp, type).subscribe(function (response) {
            if ((response['statustext'] === 'success')) {
                _this.allProjects = response['data']['projects'];
            }
            else {
                console.log('error in certificate details');
            }
            _this.loader.project = false;
        });
    };
    /* Function Name : openBlock
      * Author :
      * Created Date : 04-02-2019
      * Modified Date : *
      * Purpose : open block modal
      * PARAMS :
      */
    PublicprofileComponent.prototype.openBlock = function () {
        this.blockModal.openBlockReasonModal(this.userData.id);
    };
    /* Function Name : unblock
      * Author :
      * Created Date : 04-02-2019
      * Modified Date : *
      * Purpose : to unblock a user
      * PARAMS :
      */
    PublicprofileComponent.prototype.unblock = function () {
        this.blockModal.unblockUser(this.userData.id);
    };
    /* Function Name : getTestimonials
    * Author :
    * Created Date : 25-02-2019
    * Modified Date : *
    * Purpose : to get user specfic testimonial details
    * PARAMS :
    */
    PublicprofileComponent.prototype.getTestimonials = function () {
        var _this = this;
        var formPostData = {
            "id": btoa(this.userData.id)
        };
        // console.log(formPostData);
        this.testimonialService.publicTestimonial(formPostData).subscribe(function (response) {
            if ((response['statustext'] === 'success')) {
                _this.allTestimonials = response.data;
            }
        });
    };
    /* Function Name : recommendationSend
    * Author :
    * Created Date : 27-02-2019
    * Modified Date : *
    * Purpose : to send recommendation
    * PARAMS : id, userData, formPostData
    */
    PublicprofileComponent.prototype.recommendationSend = function () {
        var _this = this;
        if (btoa(this.userData.id) != localStorage.getItem('_u')) {
            var formPostData = {
                "id": btoa(this.userData.id)
            };
            this.usersService.recommendationSends(formPostData).subscribe(function (response) {
                if ((response['statustext'] === 'success')) {
                    _this.cService.emitNotification(_this.userData.cpp, 'R');
                    _this.successMsg = response.message;
                    _this.userData.recommendations += 1;
                    _this.statDetails();
                    _this.translate.get('COMMON.SUCCESS').subscribe(function (tData) {
                        sweetalert__WEBPACK_IMPORTED_MODULE_14___default()({
                            title: tData,
                            text: response['message'],
                            icon: 'success'
                        });
                    });
                }
                else {
                    _this.translate.get('COMMON.ERROR').subscribe(function (tData) {
                        sweetalert__WEBPACK_IMPORTED_MODULE_14___default()({
                            title: tData,
                            text: response['message'],
                            icon: 'error'
                        });
                    });
                }
            });
        }
    };
    /* Function Name : openPointModal
      * Author :
      * Created Date : 26-02-2019
      * Modified Date : *
      * Purpose : to open points modal
      * PARAMS :
      */
    PublicprofileComponent.prototype.openPointModal = function (pointModal) {
        var _this = this;
        this.pieChartLabels = [];
        this.pieChartData = [];
        this.pieChartColors = [
            {
                backgroundColor: ['#26bfb5', '#5bc78c', '#fc9772', '#ff4a5f', '#adc72a'],
            }
        ];
        this.usersService.getUserPoints(btoa(this.userData.id))
            .subscribe(function (responseData) {
            if (responseData.data) {
                _this.pieOptions = {
                    pieceLabel: {
                        render: function (args) {
                            var label = args.label, value = args.value;
                            return value + ' points';
                        },
                        fontColor: '#FFFFFF',
                        fontSize: 13,
                        fontStyle: 'bold'
                    },
                    legend: { position: 'right' },
                    elements: {
                        arc: {
                            borderWidth: 0
                        }
                    }
                };
                responseData.data.forEach(function (element) {
                    _this.pieChartLabels.push(element.point_name);
                    _this.pieChartData.push(element.total_point);
                });
                _this.modalService.open(pointModal, { size: 'lg', centered: true, windowClass: 'DefaultModal' });
            }
        });
    };
    /* Function Name : printChart
      * Author :
      * Created Date : 26-02-2019
      * Modified Date : *
      * Purpose : to print point chart
      * PARAMS :
      */
    PublicprofileComponent.prototype.printChart = function () {
        window.print();
    };
    /* Function Name : downloadCanvas
      * Author :
      * Created Date : 26-02-2019
      * Modified Date : *
      * Purpose : to download teh chart image
      * PARAMS :
      */
    PublicprofileComponent.prototype.downloadCanvas = function (event) {
        var anchor = document.getElementById('downloadChartLink');
        var canvas = document.getElementById('pointCanvas');
        var img = new Image();
        img.src = canvas.toDataURL();
        var context = canvas.getContext('2d');
        context.drawImage(img, 0, 0, 200, 200);
        var dataUrl = canvas.toDataURL('image/jpeg', 1);
        anchor['href'] = dataUrl;
        anchor['download'] = "chart.jpg";
    };
    /* Function Name : connectionSend
    * Author :
    * Created Date : 05-03-2019
    * Modified Date : *
    * Purpose : to send connection request
    * PARAMS :
    */
    PublicprofileComponent.prototype.connectionSend = function (toId) {
        var _this = this;
        this.loader.mayContact = true;
        this.usersService.connectionRequestSend(toId)
            .subscribe(function (responseData) {
            _this.loader.mayContact = false;
            if (responseData.statustext == 'success') {
                _this.cService.emitNotification(_this.userData.cpp, 'CS');
                _this.translate.get('COMMON.SUCCESS').subscribe(function (tData) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_14___default()({
                        title: tData,
                        text: responseData['message'],
                        icon: 'success'
                    });
                });
            }
            else if (responseData.statustext == 'error') {
                _this.translate.get('COMMON.ERROR').subscribe(function (tData) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_14___default()({
                        title: tData,
                        text: responseData['message'],
                        icon: 'error'
                    });
                });
            }
        });
    };
    /* Function Name : openSendMessageModal
    * Author :
    * Created Date : 13-03-2019
    * Modified Date : *
    * Purpose : to open send message modal
    * PARAMS :
    */
    PublicprofileComponent.prototype.openSendMessageModal = function (modal) {
        this.modalService.open(modal, { size: 'lg', centered: true, windowClass: 'DefaultModal' });
    };
    /* Function Name : submitSendMessageFrom
    * Author :
    * Created Date : 13-03-2019
    * Modified Date : *
    * Purpose : to send message  to a user
    * PARAMS :
    */
    PublicprofileComponent.prototype.submitSendMessageFrom = function () {
        var _this = this;
        if (this.messageForm.message) {
            this.loader.messageSend = true;
            this.messageForm.id = btoa(this.userData.id);
            this.usersService.sendMessage(this.messageForm)
                .subscribe(function (responsData) {
                if (responsData.statustext === 'success') {
                    _this.translate.get('COMMON.SUCCESS').subscribe(function (tData) {
                        sweetalert__WEBPACK_IMPORTED_MODULE_14___default()({
                            title: tData,
                            text: responsData['message'],
                            icon: 'success'
                        }).then(function () {
                            _this.modalService.dismissAll();
                        });
                    });
                    _this.loader.messageSend = false;
                    _this.messageForm.id = null;
                    _this.messageForm.message = null;
                }
            });
        }
        else {
            this.translate.get('PROFILE.MESSAGE_REQUIRED').subscribe(function (tData) {
                _this.messageErrorMsg = tData;
                setTimeout(function () {
                    _this.messageErrorMsg = '';
                }, 3000);
            });
        }
    };
    /* Function Name : openCareeryManagerModal
    * Author :
    * Created Date : 03-04-2019
    * Modified Date : *
    * Purpose : to open career path modal
    * PARAMS :
    */
    PublicprofileComponent.prototype.openCareeryManagerModal = function () {
        this.modalService.open(this.careeryPathModal, { size: 'lg', centered: true, windowClass: 'DefaultModal' });
    };
    PublicprofileComponent.prototype.gotToCard = function (card) {
        var loggedInUser = this.cService.getLoggedUserData();
        if (loggedInUser && card.user_id != loggedInUser._i) {
            this.usersService.sendNotification({
                "id": btoa(card.user_id),
                "type": "DCA"
            }).subscribe(function (responseData) { });
        }
        var cardPath = this.filePathPipe.transform(card.file, 'card');
        var win = window.open(cardPath, '_blank');
        win.focus();
    };
    PublicprofileComponent.prototype.getUserCardList = function () {
        var _this = this;
        this.loader.card = true;
        this.cvCardService.getCardList({
            id: btoa(this.userData.id),
            "only_default": 1
        }).subscribe(function (responseData) {
            if (responseData.statustext == 'success') {
                var cardList = responseData.data.list;
                _this.userCardList = [];
                if (cardList.length > 0) {
                    _this.userCardList = cardList.map(function (item) {
                        var details = null;
                        if (item.card_details) {
                            details = JSON.parse(item.card_details);
                        }
                        return {
                            id: item.id,
                            user_id: item.user_id,
                            details: details,
                            file: item.card_file
                        };
                    });
                }
                _this.cardOwl.reInit();
                _this.loader.card = false;
            }
        });
    };
    PublicprofileComponent.prototype.openTestimonialForm = function () {
        var _this = this;
        if (localStorage.getItem("_user")) {
            this.isCollapsed = (this.isCollapsed) ? false : true;
            if (this.isCollapsed == false) {
                this.testimonailFormSubmitStatus = false;
            }
        }
        else {
            this.translate.get(['COMMON.ERROR', 'COMMON.TESTIMONIAL_AUTH_ERROR']).subscribe(function (tData) {
                sweetalert__WEBPACK_IMPORTED_MODULE_14___default()({
                    title: tData['COMMON.ERROR'],
                    text: tData['COMMON.TESTIMONIAL_AUTH_ERROR'],
                    icon: 'error'
                }).then(function () {
                    _this.route.navigate(['/']);
                });
            });
        }
    };
    /* Function Name : copyLink
    * Author :
    * Created Date : 23-07-2019
    * Modified Date : *
    * Purpose : to copy profile link
    * PARAMS :
    */
    PublicprofileComponent.prototype.copyLink = function () {
        var copyText = document.createElement('input');
        copyText.value = window.location.href;
        document.body.appendChild(copyText);
        copyText.select();
        document.execCommand('copy');
        document.body.removeChild(copyText);
        this.translate.get(['COMMON.SUCCESS', 'COMMON.LINK_COPY']).subscribe(function (tData) {
            sweetalert__WEBPACK_IMPORTED_MODULE_14___default()({
                title: tData['COMMON.SUCCESS'],
                text: tData['COMMON.LINK_COPY'],
                icon: 'success'
            });
        });
    };
    PublicprofileComponent.prototype.openVideoModal = function () {
        this.modalService.open(this.careeryMyVideoModal, { size: 'lg', centered: true, windowClass: 'DefaultModal' });
    };
    /* Function Name : gotToCV
    * Author :
    * Created Date : 30-07-2019
    * Modified Date : *
    * Purpose : to redirect to cv
    * PARAMS :
    */
    PublicprofileComponent.prototype.gotToCV = function () {
        var _this = this;
        this.cvCardService.saveDefaultCV({
            user_id: btoa(this.userData.id)
        })
            .subscribe(function (responseData) {
            if (responseData.statustext == 'success') {
                setTimeout(function () {
                    _this.loderService.show();
                }, 100);
                setTimeout(function () {
                    _this.loderService.hide();
                    var cvPath = _this.filePathPipe.transform('careery-' + _this.userData.id + '-cv.pdf', 'cv');
                    var win = window.open(cvPath, '_blank');
                    win.focus();
                }, 3000);
            }
        });
    };
    /* Function Name : downloadDefaultCardFile
  * Author :
  * Created Date : 31-07-2019
  * Modified Date : *
  * Purpose : to download default careery card
  * PARAMS :
  */
    PublicprofileComponent.prototype.downloadDefaultCardFile = function () {
        var _this = this;
        this.cvCardService.saveDefaultCard({
            user_id: btoa(this.userData.id)
        })
            .subscribe(function (responseData) {
            setTimeout(function () {
                _this.loderService.show();
            }, 100);
            setTimeout(function () {
                _this.loderService.hide();
                var cvPath = _this.filePathPipe.transform('careery-' + _this.userData.id + '-card.pdf', 'card');
                var win = window.open(cvPath, '_blank');
                win.focus();
            }, 3000);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_global_blocksmodal_blocksmodal_component__WEBPACK_IMPORTED_MODULE_12__["BlocksmodalComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _global_blocksmodal_blocksmodal_component__WEBPACK_IMPORTED_MODULE_12__["BlocksmodalComponent"])
    ], PublicprofileComponent.prototype, "blockModal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('pointsModal'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PublicprofileComponent.prototype, "pointsModal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('careeryPathModal'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PublicprofileComponent.prototype, "careeryPathModal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('careeryMyVideoModal'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PublicprofileComponent.prototype, "careeryMyVideoModal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('cardOwl'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_16__["OwlCarousel"])
    ], PublicprofileComponent.prototype, "cardOwl", void 0);
    PublicprofileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-publicprofile',
            template: __webpack_require__(/*! ./publicprofile.component.html */ "./src/app/profile/publicprofile/publicprofile.component.html"),
            providers: [_global_picturepath_pipe__WEBPACK_IMPORTED_MODULE_13__["PicturepathPipe"]],
            styles: [__webpack_require__(/*! ./publicprofile.component.scss */ "./src/app/profile/publicprofile/publicprofile.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _services_testimonial_service__WEBPACK_IMPORTED_MODULE_7__["TestimonialService"],
            _services_users_service__WEBPACK_IMPORTED_MODULE_8__["UsersService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"],
            _services_common_service__WEBPACK_IMPORTED_MODULE_9__["CommonService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"],
            _global_picturepath_pipe__WEBPACK_IMPORTED_MODULE_13__["PicturepathPipe"],
            _services_cvcard_service__WEBPACK_IMPORTED_MODULE_10__["CvcardService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"],
            _loader_loader_service__WEBPACK_IMPORTED_MODULE_15__["LoaderService"]])
    ], PublicprofileComponent);
    return PublicprofileComponent;
}());



/***/ }),

/***/ "./src/app/profile/seemorenotifications/seemorenotifications.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/profile/seemorenotifications/seemorenotifications.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"profileMain\">\n  <h2 class=\"withLine withmergin\">\n    <span>{{ 'NOTIFICATIONS.ALL_NOTIFICATION'|translate }}</span>\n    <small class=\"withLine-link\"><a [routerLink]=\"['/notification-settings']\"><i class=\"fa fa-cog\"></i> {{ 'COMMON.SETTINGS' | translate }}</a></small>\n  </h2>\n  <div class=\"row\">\n    <div class=\"col-md-9 col-xs-12\">\n        <div class=\"notificatiListBlock\">\n\n\n            <div *ngFor=\"let notificationList of allNotifications | keyvalue\">\n              <p class=\"key\" *ngIf=\"notificationList.value.length > 0\"><strong>{{ (notificationList.key == '0')? ('COMMON.TODAY' | translate) : ((notificationList.key == '1')? ('COMMON.YESTERDAY' | translate): ('COMMON.BEFORE' | translate)) }}</strong></p>\n              <div class=\"notification-row alt\" *ngFor=\"let notification of notificationList.value; let i = index\"\n                >\n                <div class=\"notificationImg\" *ngIf=\"!notification.testimonial || (notification.testimonial && notification.testimonial.is_anonymous != 1)\" [class.boxSinglenoImg]=\"!notification?.sender.profile_pic\">\n                  <img\n                    *ngIf=\"notification?.sender.profile_pic\" [src]=\"(notification?.sender.profile_pic) | picturepath:'users'\"\n                    alt=\"\">\n\n                     <img  *ngIf=\"notification?.sender && !notification?.sender.profile_pic && notification?.sender.gender && notification?.sender.experience_level\" src=\"assets/images/charachter/{{ notification?.sender.gender+'_'+notification?.sender.experience_level }}.png\" alt=\"\">\n\n                     <span class=\"status\" [class.active]=\"(currentTime - notification?.sender.last_active_time) < (5*60) \"></span>\n                  </div>\n                  <div class=\"notificationImg\" *ngIf=\"notification.testimonial && notification.testimonial.is_anonymous == 1 \">\n                      <img   src=\"assets/images/testimonial_no_img.jpg\" alt=\"\">\n                  </div>\n                <div class=\"notificationBody\">\n                  <h3 *ngIf=\"notification.testimonial && notification.testimonial.is_anonymous == 1 \">{{ 'TESTIMONIALS.ANONYMOUS'|translate }}</h3>\n                  <h3 *ngIf=\"!notification.testimonial || (notification.testimonial && notification.testimonial.is_anonymous != 1)\">{{notification.sender.first_name+' '+ notification.sender.last_name}}</h3>\n\n                  <p class=\"tXt\"><i class=\"fa fa-bell\"></i> {{ 'NOTIFICATIONS.'+notification?.type | translate }}</p>\n                </div>\n                <div class=\"notificationTime\">\n                  <p class=\"time\">{{ (notification.posted_on < yesterdayStartTimestamp) ? (notification.posted_on*1000|date:'MMM, dd | hh:mm a'): (notification.posted_on*1000|date:'hh:mm a') }}</p>\n                </div>\n              </div>\n            </div>\n            <ngx-pager [config]=\"paginationConfig\" [totalrow]='totalRows' class=\"defaultPagination\"></ngx-pager>\n          </div>\n    </div>\n    <div class=\"col-md-3 col-xs-12\">\n        <app-notifications [nonvisable]=\"'notification'\"></app-notifications>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/profile/seemorenotifications/seemorenotifications.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/profile/seemorenotifications/seemorenotifications.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvc2VlbW9yZW5vdGlmaWNhdGlvbnMvc2VlbW9yZW5vdGlmaWNhdGlvbnMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/profile/seemorenotifications/seemorenotifications.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/profile/seemorenotifications/seemorenotifications.component.ts ***!
  \********************************************************************************/
/*! exports provided: SeemorenotificationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeemorenotificationsComponent", function() { return SeemorenotificationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_5__);






var SeemorenotificationsComponent = /** @class */ (function () {
    function SeemorenotificationsComponent(cService, translate, route) {
        this.cService = cService;
        this.translate = translate;
        this.route = route;
        this.currentTime = null;
        this.yesterdayStartTimestamp = null;
        this.allNotifications = {}; // all notifications 
        this.paginationConfig = null; // set pagination config
        this.totalRows = null;
        this.totaAllInvitations = null;
        this.allInvitations = []; // all invitaions
        this.successMessage = ''; // set success message
        this.cService.activelang.subscribe(function (lang) {
            // this language will be used as a fallback when a translation isn't found in the current language
            translate.setDefaultLang(lang);
            // the lang to use, if the lang isn't available, it will use the current loader to get them
            translate.use(lang);
        });
        this.yesterdayStartTimestamp = new Date();
        this.yesterdayStartTimestamp = this.yesterdayStartTimestamp.setDate(this.yesterdayStartTimestamp.getDate() - 1);
        this.yesterdayStartTimestamp = new Date(new Date(this.yesterdayStartTimestamp).setHours(0, 0, 0, 0)).getTime() / 1000;
    }
    SeemorenotificationsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.paginationConfig = {
            perPage: 10,
            render: function (page) {
                var formPostData = {
                    "type": "T,TR,PS,DCV,DCA,R,CS,CA,CD",
                    "status": 0,
                    "page": page
                };
                _this.cService.notificationList(formPostData).subscribe(function (response) {
                    //console.log("after", response);
                    _this.currentTime = new Date().getTime() / 1000;
                    if ((response['statustext'] === 'success')) {
                        var notificationList = response.data.list;
                        var todayTimeStampGroup_1 = {
                            start: new Date(new Date().setHours(0, 0, 0, 0)).getTime() / 1000,
                            end: new Date(new Date().setHours(23, 59, 59, 0)).getTime() / 1000
                        };
                        var yesterdayTimeStampGroup_1 = {
                            start: todayTimeStampGroup_1.start - 86400,
                            end: todayTimeStampGroup_1.end - 86400,
                        };
                        var resultList_1 = {
                            "0": [],
                            "1": [],
                            "2": []
                        };
                        notificationList.forEach(function (element) {
                            if (element.posted_on >= todayTimeStampGroup_1.start && element.posted_on <= todayTimeStampGroup_1.end) {
                                resultList_1['0'].push(element);
                            }
                            else if (element.posted_on >= yesterdayTimeStampGroup_1.start && element.posted_on <= yesterdayTimeStampGroup_1.end) {
                                resultList_1['1'].push(element);
                            }
                            else {
                                resultList_1['2'].push(element);
                            }
                        });
                        _this.allNotifications = resultList_1;
                        _this.totalRows = response.data.pagination.rowCount;
                    }
                });
            }
        };
        this.connectionInvitations();
    };
    /* Function Name : connectionInvitations
    * Author :
    * Created Date : 20-03-2019
    * Modified Date : *
    * Purpose : to get all connection invitations
    * PARAMS :
    */
    SeemorenotificationsComponent.prototype.connectionInvitations = function () {
        var _this = this;
        this.cService.connectionInvitationList().subscribe(function (response) {
            if ((response['statustext'] === 'success')) {
                _this.allInvitations = response.data.list;
                _this.totaAllInvitations = _this.allInvitations.length;
            }
        });
    };
    /* Function Name : acceptInvitation
    * Author :
    * Created Date : 22-03-2019
    * Modified Date : *
    * Purpose : to accept invitaion
    * PARAMS : formPostData,friend_id
    */
    SeemorenotificationsComponent.prototype.acceptInvitation = function (friend_id) {
        var _this = this;
        var formPostData = {
            "to_id": btoa(friend_id),
            "status": 1
        };
        this.cService.connectionRequest(formPostData).subscribe(function (response) {
            if ((response['statustext'] === 'success')) {
                _this.translate.get('COMMON.SUCCESS').subscribe(function (tData) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_5___default()({
                        title: tData,
                        text: response['message'],
                        icon: 'success'
                    });
                });
                _this.connectionInvitations();
            }
        });
    };
    /* Function Name : ignoreInvitation
    * Author :
    * Created Date : 22-03-2019
    * Modified Date : *
    * Purpose : to ignore invitaion
    * PARAMS : friend_id, formPostData
    */
    SeemorenotificationsComponent.prototype.ignoreInvitation = function (friend_id) {
        var _this = this;
        var formPostData = {
            "to_id": btoa(friend_id),
            "status": 2
        };
        this.cService.connectionRequest(formPostData).subscribe(function (response) {
            if ((response['statustext'] === 'success')) {
                _this.translate.get('COMMON.SUCCESS').subscribe(function (tData) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_5___default()({
                        title: tData,
                        text: response['message'],
                        icon: 'success'
                    });
                });
                _this.connectionInvitations();
            }
        });
    };
    SeemorenotificationsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-seemorenotifications',
            template: __webpack_require__(/*! ./seemorenotifications.component.html */ "./src/app/profile/seemorenotifications/seemorenotifications.component.html"),
            styles: [__webpack_require__(/*! ./seemorenotifications.component.scss */ "./src/app/profile/seemorenotifications/seemorenotifications.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], SeemorenotificationsComponent);
    return SeemorenotificationsComponent;
}());



/***/ }),

/***/ "./src/app/profile/testimonial/testimonial.component.html":
/*!****************************************************************!*\
  !*** ./src/app/profile/testimonial/testimonial.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"testiWrap\">\n  <div>\n    <div class=\"alert alert-success\" *ngIf=\"successMessage\">{{ successMessage }}</div>\n  </div>\n  <h2 class=\"withLine\"><span>{{ 'PROFILE.TESTIMONIALS' |translate }}</span></h2>\n  <div class=\"testiTabs\">\n    <ngb-tabset (tabChange)=\"changeTabEvent($event)\">\n      <ngb-tab id=\"incoming\">\n        <ng-template ngbTabTitle>{{ 'TESTIMONIALS.INCOMING' | translate }}</ng-template>\n        <ng-template ngbTabContent>\n\n            <div class=\"text-center\"  *ngIf=\"loader.testimonial.incoming\" class=\"loader-p\"><i class=\"fa fa-cog fa-spin\" ></i> {{ 'PROFILE.PLEASE_WAIT' | translate }}</div>\n\n          \n            <div class=\"notification-row\" *ngFor=\"let testimonial of allTestimonials\">\n              <div class=\"notificationImg\" *ngIf=\"testimonial.is_anonymous == 0\">\n                <img *ngIf=\"testimonial?.fromuser?.profile_pic\" alt=\"\" [src]=\"(testimonial?.fromuser?.profile_pic)| picturepath:'users'\">\n                \n                <img  *ngIf=\"testimonial.fromuser && !testimonial.fromuser.profile_pic && testimonial.fromuser.gender && testimonial.fromuser.experience_level\" src=\"assets/images/charachter/{{ testimonial.fromuser.gender+'_'+testimonial.fromuser.experience_level }}.png\" alt=\"\">\n              </div>\n              <div class=\"notificationImg\" *ngIf=\"testimonial.is_anonymous == 1\">\n                  <img   src=\"assets/images/testimonial_no_img.jpg\" alt=\"\">\n              </div>\n              <div class=\"notificationBody\">\n                <h3 *ngIf=\"testimonial.is_anonymous == 0\">{{testimonial.fromuser.first_name}} {{testimonial.fromuser.last_name}}</h3>\n                <h3 *ngIf=\"testimonial.is_anonymous == 1\">{{ 'TESTIMONIALS.ANONYMOUS'|translate }}</h3>\n                <p class=\"tXt\">{{testimonial.message}}</p>\n              </div>\n              <div class=\"notificationTime\">\n                  <p class=\"time\">{{ (testimonial.posted_on < yesterdayStartTimestamp) ? (testimonial.posted_on*1000|date:'MMM, dd | hh:mm a'): (testimonial.posted_on*1000|date:'hh:mm a') }}</p>\n                  <div class=\"settingsSingleButton\">\n                \n                      <button type=\"button\" (click)=\"acceptRefuseTestimonial(testimonial,1)\">{{ 'TESTIMONIALS.ACCEPT' | translate }}</button>\n                      <button type=\"button\" (click)=\"acceptRefuseTestimonial(testimonial,2)\" class=\"btnRefuse\"><span *ngIf=\"loader.testimonial.refuse\" class=\"loader-p\"><i class=\"fa fa-cog fa-spin\" ></i></span>{{ 'TESTIMONIALS.REFUSE' | translate }}</button>\n                    </div>\n              </div>\n              \n            </div>\n          <div class=\"settingsSingle\" *ngIf=\"!loader.testimonial.incoming && allTestimonials.length == 0\">\n            <p class=\"text-center\">\n                 {{ 'TESTIMONIALS.INCOMING_MESSAGE' | translate }}\n            </p>\n          </div>\n          <ngx-pager  [config]=\"paginationConfigIncoming\"  [totalrow]='totalRows'></ngx-pager>\n          \n        </ng-template>\n      </ngb-tab>\n      <ngb-tab id=\"accepted\">\n        <ng-template ngbTabTitle >{{ 'TESTIMONIALS.ACCEPTED' | translate }}</ng-template>\n     \n        <ng-template ngbTabContent  >\n            <div class=\"text-center\"  *ngIf=\"loader.testimonial.accepted\" class=\"loader-p\"><i class=\"fa fa-cog fa-spin\" ></i> {{ 'PROFILE.PLEASE_WAIT' | translate }}</div>\n          <div class=\"text-right\"><span>{{ 'TESTIMONIALS.SHOW_ON_PROFILE_LBL' | translate }}</span></div>\n          <div class=\"notification-row\" *ngFor=\"let accepted of acceptedTestimonials\">\n\n            <div class=\"notificationImg\" *ngIf=\"accepted.is_anonymous == 0\">\n              <img *ngIf=\"accepted?.fromuser?.profile_pic\" alt=\"\" [src]=\"(accepted?.fromuser?.profile_pic)| picturepath:'users'\">\n\n              <img  *ngIf=\"accepted.fromuser && !accepted.fromuser.profile_pic && accepted.fromuser.gender && accepted.fromuser.experience_level\" src=\"assets/images/charachter/{{ accepted.fromuser.gender+'_'+accepted.fromuser.experience_level }}.png\" alt=\"\">\n            \n            </div>\n            <div class=\"notificationImg\" *ngIf=\"accepted.is_anonymous == 1\"><img   src=\"assets/images/testimonial_no_img.jpg\" alt=\"\"></div>\n            <div class=\"notificationBody\">\n\n              <h3 *ngIf=\"accepted.is_anonymous == 0\">{{accepted.fromuser.first_name}}</h3>\n              <h3 *ngIf=\"accepted.is_anonymous == 1\">{{ 'TESTIMONIALS.ANONYMOUS'|translate }}</h3>\n              <p class=\"tXt\">{{accepted.message}}</p>\n            </div>\n            <div class=\"notificationTime\">\n                <p class=\"time\">{{ (accepted.posted_on < yesterdayStartTimestamp) ? (accepted.posted_on*1000|date:'MMM, dd | hh:mm a'): (accepted.posted_on*1000|date:'hh:mm a') }}</p>\n            <div class=\"settingsSingleButton\">\n                <button type=\"button\" [disabled]=\"accepted.reply.id\" (click)=\"replyTestimonial(accepted)\">{{ 'TESTIMONIALS.REPLY' | translate }}</button>\n              <button *ngIf='accepted.is_show==1' type=\"button\" class=\"btnRefuse\" (click)=\"showHideTestimonial(accepted.id,0)\" class=\"btnRefuse\"><i class=\"fa fa-eye-slash\" aria-hidden=\"true\"></i> {{ 'TESTIMONIALS.HIDE_ON_PROFILE' | translate }}</button>\n\n              <button *ngIf='accepted.is_show==0' type=\"button\" class=\"btnRefuse\" (click)=\"showHideTestimonial(accepted.id,1)\" class=\"btnRefuse\"><i class=\"fa fa-eye-slash\" aria-hidden=\"true\"></i> {{ 'TESTIMONIALS.SHOW_ON_PROFILE' | translate }}</button>\n              \n            </div>\n          </div>\n          </div>\n          <div class=\"settingsSingle\" *ngIf=\"!loader.testimonial.accepted && acceptedTestimonials.length == 0\">\n              <p class=\"text-center\">\n                  {{ 'TESTIMONIALS.ACCEPTED_MESSAGE' | translate }}\n              </p>\n          </div>\n          <ngx-pager  [config]=\"paginationConfigAccepted\"  [totalrow]='totalRows'></ngx-pager>\n\n        </ng-template>\n      </ngb-tab>\n      <ngb-tab id=\"own\">\n        <ng-template ngbTabTitle>{{ 'TESTIMONIALS.MY_TESTIMONY' | translate }}</ng-template>\n        <ng-template ngbTabContent>\n            <div class=\"text-center\"  *ngIf=\"loader.testimonial.own\" class=\"loader-p\"><i class=\"fa fa-cog fa-spin\" ></i> {{ 'PROFILE.PLEASE_WAIT' | translate }}</div>\n              <div class=\"notification-row\" *ngFor=\"let own of ownTestimonials\">\n\n                <div   *ngIf=\"!own.replyParent || (own.replyParent && own.to_user_id != own.replyParent.to_user_id)\" class=\"notificationImg\" [class.inactive]=\"(currentTime - own.fromuser.last_active_time) > (5*60) \">\n                  <img *ngIf=\"own.fromuser.profile_pic\" alt=\"\" [src]=\"(own?.fromuser?.profile_pic)| picturepath:'users'\">\n\n                  <img  *ngIf=\"own.fromuser && !own.fromuser.profile_pic && own.fromuser.gender && own.fromuser.experience_level\" src=\"assets/images/charachter/{{ own.fromuser.gender+'_'+own.fromuser.experience_level }}.png\" alt=\"\">\n\n                </div>\n\n                <div *ngIf=\"(own.replyParent && own.to_user_id == own.replyParent.to_user_id)\"  class=\"notificationImg\" [class.inactive]=\"(currentTime - own.touser.last_active_time) > (5*60) \"><img *ngIf=\"own.touser.profile_pic\" alt=\"\" [src]=\"(own?.touser?.profile_pic)| picturepath:'users'\">\n\n                  <img  *ngIf=\"own.touser && !own.touser.profile_pic && own.touser.gender && own.touser.experience_level\" src=\"assets/images/charachter/{{ own.touser.gender+'_'+own.touser.experience_level }}.png\" alt=\"\">\n                </div>\n\n                  <div class=\"notificationBody\">\n                      <h3  *ngIf=\"!own.replyParent || (own.replyParent && own.to_user_id != own.replyParent.to_user_id)\" >{{own.fromuser.first_name}} {{own.fromuser.last_name}}</h3>\n                    <h3 *ngIf=\"(own.replyParent && own.to_user_id == own.replyParent.to_user_id)\">{{own.touser.first_name}} {{own.touser.last_name}}</h3>\n\n                <p  *ngIf=\"own.replyParent && own.replyParent.id\">\n                    {{ 'TESTIMONIALS.REPLIED_TO' | translate }}\n                    <br/>\n                  {{ own.replyParent.message }}\n                </p>\n                <p [class.reply]=\"own.replyParent\">\n                  {{own.message}}\n                  <strong *ngIf=\"own.replyParent\"> - {{ own.posted_on | date }}</strong>\n                </p>\n              </div>\n              <div class=\"notificationTime\">\n                  {{ ((own.replyParent)? own.replyParent.posted_on  : own.posted_on) | date  }}\n                </div>\n              </div>\n        <div class=\"settingsSingle\" *ngIf=\"!loader.testimonial.own && ownTestimonials &&  ownTestimonials.length == 0\">\n            <p class=\"text-center\">\n                {{ 'TESTIMONIALS.OWN_MESSAGE' | translate }}\n            </p>\n        </div>\n        <ngx-pager  [config]=\"paginationConfigOwn\"  [totalrow]='totalRows'></ngx-pager>\n        </ng-template>\n      </ngb-tab>\n    </ngb-tabset>\n  </div>\n</div>\n\n<!-- edit testimonial --> \n  <ng-template #editModal let-modal>\n    <h2><span>{{ 'TESTIMONIALS.EDIT_TESTIMONIAL' | translate}}:</span></h2>\n    <span class=\"modalClose\" (click)=\"modal.dismiss('Cross click')\"></span>\n    <div class=\"modal-body\">\n      <div>\n     \n        <div class=\"alert alert-danger\" *ngIf=\"errorMessage\">{{ errorMessage }}</div>\n      </div>\n\n      <div class=\"proEdit\">\n\n        <div class=\"formWrap alt\">\n           <textarea class=\"inpField fullWidth\" [(ngModel)]=\"testimonialForm.message\" placeholder=\"Testimonial message\"></textarea>\n          <div *ngIf=\"testimonialForm.submit && (testimonialForm.message==null || testimonialForm.message =='')\" class=\"alert alert-danger\">\n            {{ 'TESTIMONIALS.REQUIRED' | translate }}\n          </div>\n        </div>\n        <div class=\"buttonGr\">\n          <div class=\"text-center\">\n            <button type=\"button\" class=\"btnOrange\" name=\"button\" (click)=submitEditTestimonialForm(testimonialForm.id)>{{ 'TESTIMONIALS.BTN_UPDATE' | translate }}</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </ng-template>\n\n  <ng-template #replyModal let-modal>\n      <h2><span>{{ 'TESTIMONIALS.REPLY_TESTIMONIAL' | translate}}:</span></h2>\n      <span class=\"modalClose\" (click)=\"modal.dismiss('Cross click')\"></span>\n      <div class=\"modal-body\">\n        <div>\n       \n          <div class=\"alert alert-danger\" *ngIf=\"errorMessage\">{{ errorMessage }}</div>\n        </div>\n  \n        <div class=\"proEdit\">\n  \n          <div class=\"formWrap alt\">\n             <textarea class=\"inpField fullWidth\" [(ngModel)]=\"testimonialReplyForm.message\" placeholder=\"{{ 'TESTIMONIALS.REPLY_TESTIMONIAL_MESSAGE' | translate}}\"></textarea>\n            <div *ngIf=\"testimonialReplyForm.submit && (testimonialReplyForm.message==null || testimonialReplyForm.message =='')\" class=\"alert alert-danger\">\n              {{ 'TESTIMONIALS.REQUIRED' | translate }}\n            </div>\n          </div>\n          <div class=\"buttonGr\">\n            <div class=\"text-center\">\n              <button [disabled]=\"testimonialReplyForm.submit\" type=\"button\" class=\"btnOrange\" name=\"button\" (click)=submitReplyTestimonialForm()>{{ 'TESTIMONIALS.SEND' | translate }}</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </ng-template>\n\n"

/***/ }),

/***/ "./src/app/profile/testimonial/testimonial.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/profile/testimonial/testimonial.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvdGVzdGltb25pYWwvdGVzdGltb25pYWwuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/profile/testimonial/testimonial.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/profile/testimonial/testimonial.component.ts ***!
  \**************************************************************/
/*! exports provided: TestimonialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestimonialComponent", function() { return TestimonialComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _services_testimonial_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/testimonial.service */ "./src/app/services/testimonial.service.ts");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _globalConfig__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../globalConfig */ "./src/app/globalConfig.ts");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_8__);
/*****************************************************
# Company Name          :
# Author                :
# Created Date          : 22-02-2019
# Module                : TestimonialComponent
# Object name           : TestimonialComponent
# Functionality         : user testimonials
# Purpose               : constructor, ngOnInit,
*******************************************************/









var TestimonialComponent = /** @class */ (function () {
    /* Function Name : constructor
      * Author :
      * Created Date : 22-02-2019
      * Modified Date : *
      * Purpose : to define the all helpful objects and define the languages data
      * PARAMS : tService, cService, modalService, route, translate
      */
    function TestimonialComponent(tService, cService, modalService, route, translate) {
        this.tService = tService;
        this.cService = cService;
        this.modalService = modalService;
        this.route = route;
        this.translate = translate;
        this.allTestimonials = []; // all testimonials 
        this.acceptedTestimonials = []; // all accepted testimonials 
        this.ownTestimonials = []; // all own posted testimonials 
        this.imagePath = null; // set image path
        this.message = ''; // set message
        this.editData = null; // get edit data of a testimonial
        this.successMessage = ''; // set success message
        this.errorMessage = ''; // set error message
        this.showMessage = ''; // show message
        this.hideMessage = ''; // hide message
        this.currentTime = (new Date()).getTime() / 1000; // set current time
        this.paginationConfigIncoming = null;
        this.paginationConfigAccepted = null;
        this.paginationConfigOwn = null;
        this.activeTab = 'incoming';
        this.totalRows = null;
        this.testimonialForm = {
            "id": null,
            "message": '',
            "error": 0,
            "submit": false
        };
        this.testimonialReplyForm = {
            "id": null,
            "message": '',
            "error": 0,
            "submit": false
        };
        this.loader = {
            'testimonial': {
                'incoming': false,
                'accepted': false,
                'own': false,
                'accepteorrefuse': false,
                'edit': false,
                'delete': false,
                'reply': false,
            }
        };
        this.todayTimeStampGroup = {};
        this.yesterdayTimeStampGroup = {};
        this.yesterdayStartTimestamp = null;
        this.cService.activelang.subscribe(function (lang) {
            // this language will be used as a fallback when a translation isn't found in the current language
            translate.setDefaultLang(lang);
            // the lang to use, if the lang isn't available, it will use the current loader to get them
            translate.use(lang);
        });
        this.yesterdayStartTimestamp = new Date();
        this.yesterdayStartTimestamp = this.yesterdayStartTimestamp.setDate(this.yesterdayStartTimestamp.getDate() - 1);
        this.yesterdayStartTimestamp = new Date(new Date(this.yesterdayStartTimestamp).setHours(0, 0, 0, 0)).getTime() / 1000;
        this.todayTimeStampGroup = {
            start: new Date(new Date().setHours(0, 0, 0, 0)).getTime() / 1000,
            end: new Date(new Date().setHours(23, 59, 59, 0)).getTime() / 1000
        };
        this.yesterdayTimeStampGroup = {
            start: this.todayTimeStampGroup.start - 86400,
            end: this.todayTimeStampGroup.end - 86400,
        };
    }
    /* Function Name : ngOnInit
      * Author :
      * Created Date : 22-02-2019
      * Modified Date : *
      * Purpose : to get data after html load
      * PARAMS :
      */
    TestimonialComponent.prototype.ngOnInit = function () {
        var _this = this;
        //localStorage.setItem('_sp', 'profile_user');
        this.testimonialDetails();
        localStorage.setItem('_sp', 'profile_user');
        this.paginationConfigIncoming = {
            perPage: 10,
            render: function (page) {
                _this.testimonialDetails(page);
            }
        };
        this.paginationConfigAccepted = {
            perPage: 10,
            render: function (page) {
                _this.acceptedTestimonial(page);
            }
        };
        this.paginationConfigOwn = {
            perPage: 10,
            render: function (page) {
                _this.ownTestimonial(page);
            }
        };
    };
    /* Function Name : changeTabEvent
    * Author :
    * Created Date : 22-02-2019
    * Modified Date : *
    * Purpose : to get data on tab change
    * PARAMS : e
    */
    TestimonialComponent.prototype.changeTabEvent = function (e) {
        this.activeTab = e.nextId;
        localStorage.removeItem('_nxp');
        // switch (e.nextId) {
        // 	case "incoming":
        // 		this.testimonialDetails();
        // 		break;
        // 	case "accepted":
        // 		this.acceptedTestimonial();
        // 		break;
        // 	case "own":
        // 		this.ownTestimonial();
        // 		break;
        // }
    };
    /* Function Name : testimonialDetails
    * Author :
    * Created Date : 22-02-2019
    * Modified Date : *
    * Purpose : to get all testimonials
    * PARAMS :
    */
    TestimonialComponent.prototype.testimonialDetails = function (page) {
        var _this = this;
        if (page === void 0) { page = 1; }
        var formPostData = {
            "type": "pending",
            "page": page
        };
        this.loader.testimonial.incoming = true;
        this.tService.listTestimonial(formPostData).subscribe(function (response) {
            _this.loader.testimonial.incoming = false;
            if ((response['statustext'] === 'success')) {
                _this.allTestimonials = response.data.list;
                _this.totalRows = response.data.pager.rowCount;
            }
        });
    };
    /* Function Name : acceptedTestimonial
    * Author :
    * Created Date : 22-02-2019
    * Modified Date : *
    * Purpose : to get accepted testimonial
    * PARAMS :
    */
    TestimonialComponent.prototype.acceptedTestimonial = function (page) {
        var _this = this;
        if (page === void 0) { page = 1; }
        var formPostData = {
            "type": "accepted",
            "page": page
        };
        this.loader.testimonial.accepted = true;
        this.tService.listTestimonial(formPostData).subscribe(function (response) {
            _this.loader.testimonial.accepted = false;
            if ((response['statustext'] === 'success')) {
                _this.acceptedTestimonials = response.data.list;
                _this.totalRows = response.data.pager.rowCount;
                _this.imagePath = _globalConfig__WEBPACK_IMPORTED_MODULE_7__["s3URL"] + 'userspic/';
                //this.testimonialDetails();
            }
        });
    };
    /* Function Name : ownTestimonial
    * Author :
    * Created Date : 22-02-2019
    * Modified Date : *
    * Purpose : to check own testimonial
    * PARAMS :
    */
    TestimonialComponent.prototype.ownTestimonial = function (page) {
        var _this = this;
        if (page === void 0) { page = 1; }
        var formPostData = {
            "type": "own",
            "page": page
        };
        this.loader.testimonial.own = true;
        this.tService.listTestimonial(formPostData).subscribe(function (response) {
            _this.loader.testimonial.own = false;
            if ((response['statustext'] === 'success')) {
                _this.ownTestimonials = response.data.list;
                _this.totalRows = response.data.pager.rowCount;
                _this.imagePath = _globalConfig__WEBPACK_IMPORTED_MODULE_7__["s3URL"] + 'userspic/';
                //console.log(this.ownTestimonials);
            }
        });
    };
    TestimonialComponent.prototype.clickPager = function (type, event) {
        var page = event;
        if (type == 'accept') {
            this.acceptedTestimonial(page);
        }
        else if (type == 'pending') {
            this.testimonialDetails(page);
        }
        else if (type == 'own') {
            this.ownTestimonial(page);
        }
    };
    /* Function Name : openEditTestimonial
    * Author :
    * Created Date : 22-02-2019
    * Modified Date : *
    * Purpose : open edit testimonial modal
    * PARAMS :  editId,content
    */
    TestimonialComponent.prototype.openEditTestimonial = function (editId, content) {
        var _this = this;
        //this.loader.testimonial.edit = true;
        var formPostData = {
            "id": btoa(editId),
            "message": content
        };
        this.tService.editTestimonial(formPostData).subscribe(function (responseData) {
            if (responseData) {
                _this.editData = responseData.data;
                _this.testimonialForm.message = responseData.data.message;
                _this.testimonialForm.id = responseData.data.id;
                //console.log(responseData);
            }
        });
        this.modalService.open(this.editModal, { size: 'lg', centered: true, windowClass: 'DefaultModal' });
    };
    /* Function Name : submitEditTestimonialForm
     * Author :
     * Created Date : 22-02-2019
     * Modified Date : *
     * Purpose : to update testimonial
     * PARAMS :  id
     */
    TestimonialComponent.prototype.submitEditTestimonialForm = function (id) {
        var _this = this;
        this.loader.testimonial.edit = true;
        this.testimonialForm.submit = true;
        this.testimonialForm.message = this.testimonialForm.message.trim();
        if (this.testimonialForm.message == '') {
            this.testimonialForm.error = 1;
        }
        else {
            this.testimonialForm.error = 0;
            this.errorMessage = '';
        }
        //console.log(this.testimonialForm.message); return false;
        if (this.testimonialForm.error == 0) {
            var formPostData = {
                "id": btoa(id),
                "message": this.testimonialForm.message
            };
            //console.log(formPostData); return false;
            this.tService.editTestimonial(formPostData)
                .subscribe(function (response) {
                if (response.statustext === 'success') {
                    _this.modalService.dismissAll();
                    _this.errorMessage = '';
                    _this.ownTestimonial();
                }
            });
        }
    };
    /* Function Name : deleteTestimonial
    * Author :
    * Created Date : 22-02-2019
    * Modified Date : *
    * Purpose : to soft delete testimonial
    * PARAMS :  id
    */
    TestimonialComponent.prototype.deleteTestimonial = function (id) {
        var _this = this;
        this.translate.get('Are you sure delete testimonmial').subscribe(function (tData) {
            var c = confirm(tData);
            if (c) {
                _this.loader.testimonial.delete = true;
                var formPostData = {
                    "id": btoa(id)
                };
                _this.tService.deleteTestimonial(formPostData).subscribe(function (responseData) {
                    if (responseData.statustext === 'success') {
                        _this.translate.get(['COMMON.SUCCESS']).subscribe(function (tData) {
                            sweetalert__WEBPACK_IMPORTED_MODULE_8___default()({
                                title: tData['COMMON.SUCCESS'],
                                text: responseData.message,
                                icon: 'success'
                            });
                        });
                    }
                });
            }
        });
    };
    /* Function Name : acceptRefuseTestimonial
    * Author :
    * Created Date : 22-02-2019
    * Modified Date : *
    * Purpose : to accept or refuse a testimonial
    * PARAMS :  testimonial, status
    */
    TestimonialComponent.prototype.acceptRefuseTestimonial = function (testimonial, status) {
        var _this = this;
        var msg = '';
        if (status === 1) {
            msg = 'TESTIMONIALS.ACCEPTED_CONFIRM_MSG';
        }
        else {
            msg = 'TESTIMONIALS.REFUSE_CONFIRM_MSG';
        }
        this.translate.get(['COMMON.ARE_YOU_SURE', msg]).subscribe(function (tData) {
            sweetalert__WEBPACK_IMPORTED_MODULE_8___default()({
                title: tData['COMMON.ARE_YOU_SURE'],
                text: tData[msg],
                icon: 'warning',
                buttons: {
                    cancel: true,
                    confirm: true
                }
            }).then(function (result) {
                if (result) {
                    _this.loader.testimonial.accepteorrefuse = true;
                    var formPostData = {
                        "id": btoa(testimonial.id),
                        "type": "status",
                        "status": status
                    };
                    _this.tService.acceptTestimonial(formPostData).subscribe(function (responseData) {
                        _this.loader.testimonial.accepteorrefuse = false;
                        if (responseData.statustext === 'success') {
                            _this.translate.get(['COMMON.SUCCESS']).subscribe(function (tData) {
                                sweetalert__WEBPACK_IMPORTED_MODULE_8___default()({
                                    title: tData['COMMON.SUCCESS'],
                                    text: responseData.message,
                                    icon: 'success'
                                });
                            });
                            _this.testimonialDetails();
                        }
                    });
                }
            });
        });
    };
    /* Function Name : showHideTestimonial
    * Author :
    * Created Date : 25-02-2019
    * Modified Date : *
    * Purpose : to show hide testimonial in profile
    * PARAMS :  id, is_show
    */
    TestimonialComponent.prototype.showHideTestimonial = function (id, is_show) {
        var _this = this;
        if (is_show == 1) {
            this.showMessage = 'TESTIMONIALS.SHOW';
        }
        else {
            this.showMessage = 'TESTIMONIALS.HIDE';
        }
        this.translate.get(this.showMessage).subscribe(function (tData) {
            sweetalert__WEBPACK_IMPORTED_MODULE_8___default()({
                title: '',
                text: tData,
                icon: "warning",
                buttons: {
                    cancel: true,
                    confirm: true,
                },
            }).then(function (willDelete) {
                if (willDelete) {
                    var formPostData = {
                        "id": btoa(id),
                        "type": "profile",
                        'status': is_show
                    };
                    _this.tService.acceptTestimonial(formPostData).subscribe(function (responseData) {
                        if (responseData.statustext === 'success') {
                            _this.translate.get(['COMMON.SUCCESS']).subscribe(function (tData) {
                                sweetalert__WEBPACK_IMPORTED_MODULE_8___default()({
                                    title: tData['COMMON.SUCCESS'],
                                    text: responseData.message,
                                    icon: 'success'
                                });
                            });
                            _this.acceptedTestimonial();
                            setTimeout(function () {
                                _this.successMessage = '';
                            }, 5000);
                            _this.testimonialDetails();
                        }
                    });
                }
            });
        });
    };
    /* Function Name : replyTestimonial
    * Author :
    * Created Date : 17-06-2019
    * Modified Date : *
    * Purpose : to reply a incoming testimonial
    * PARAMS :  testimonial
    */
    TestimonialComponent.prototype.replyTestimonial = function (testimonial) {
        this.testimonialReplyForm.id = testimonial.id;
        this.testimonialReplyForm.submit = false;
        this.modalService.open(this.replyModal, { size: 'lg', centered: true, windowClass: 'DefaultModal' });
    };
    /* Function Name : submitReplyTestimonialForm
    * Author :
    * Created Date : 17-06-2019
    * Modified Date : *
    * Purpose : to submit reply of a incoming testimonial
    * PARAMS :
    */
    TestimonialComponent.prototype.submitReplyTestimonialForm = function () {
        var _this = this;
        this.loader.testimonial.reply = true;
        this.testimonialReplyForm.message = this.testimonialReplyForm.message.trim();
        if (this.testimonialReplyForm.message == '') {
            this.testimonialReplyForm.error = 1;
        }
        else {
            this.testimonialReplyForm.error = 0;
            this.errorMessage = '';
        }
        if (this.testimonialReplyForm.error == 0) {
            this.testimonialReplyForm.submit = true;
            var formPostData = {
                "id": btoa(this.testimonialReplyForm.id),
                "message": this.testimonialReplyForm.message
            };
            //console.log(formPostData); return false;
            this.tService.replyTestimonial(formPostData)
                .subscribe(function (response) {
                _this.testimonialReplyForm.submit = false;
                if (response.statustext === 'success') {
                    var selectedTestimonialIndex = _this.acceptedTestimonials.findIndex(function (item) {
                        return item.id == _this.testimonialReplyForm.id;
                    });
                    _this.acceptedTestimonials[selectedTestimonialIndex]['reply']['id'] = _this.testimonialReplyForm.id + '-' + selectedTestimonialIndex;
                    _this.modalService.dismissAll();
                    _this.errorMessage = '';
                    _this.translate.get(['COMMON.SUCCESS']).subscribe(function (tData) {
                        sweetalert__WEBPACK_IMPORTED_MODULE_8___default()({
                            title: tData['COMMON.SUCCESS'],
                            text: response.message,
                            icon: 'success'
                        });
                    });
                    _this.testimonialDetails();
                    setTimeout(function () {
                        _this.successMessage = '';
                    }, 5000);
                }
            });
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('editModal'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TestimonialComponent.prototype, "editModal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('replyModal'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TestimonialComponent.prototype, "replyModal", void 0);
    TestimonialComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-testimonial',
            template: __webpack_require__(/*! ./testimonial.component.html */ "./src/app/profile/testimonial/testimonial.component.html"),
            styles: [__webpack_require__(/*! ./testimonial.component.scss */ "./src/app/profile/testimonial/testimonial.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_testimonial_service__WEBPACK_IMPORTED_MODULE_3__["TestimonialService"],
            _services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]])
    ], TestimonialComponent);
    return TestimonialComponent;
}());



/***/ }),

/***/ "./src/app/services/testimonial.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/testimonial.service.ts ***!
  \*************************************************/
/*! exports provided: TestimonialService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestimonialService", function() { return TestimonialService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _globalConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../globalConfig */ "./src/app/globalConfig.ts");

/*****************************************************
# Company Name          :
# Author                :
# Created Date          : 25-02-2019
# Module                : TestimonialService
# Object name           : TestimonialService
# Functionality         : all api calls for testimonials
# Purpose               : constructor,addTestimonial,listTestimonial,editTestimonial,deleteTestimonial,acceptTestimonial,publicTestimonial
*******************************************************/



var TestimonialService = /** @class */ (function () {
    /* Function Name : constructor
    * Author :
    * Created Date : 10-01-2019
    * Modified Date : *
    * Purpose : to define the all helpful objects and define the languages data
    * PARAMS : http
    */
    function TestimonialService(http) {
        this.http = http;
    }
    /* Function Name : addTestimonial
    * Author :
    * Created Date : 25-02-2019
    * Modified Date : *
    * Purpose : to add new testimonial
    * PARAMS : formData
    */
    TestimonialService.prototype.addTestimonial = function (formData) {
        return this.http.post(_globalConfig__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + 'testimonial/add', _globalConfig__WEBPACK_IMPORTED_MODULE_3__["APPEND_REQUEST_DATA"](formData));
    };
    /* Function Name : listTestimonial
    * Author :
    * Created Date : 25-02-2019
    * Modified Date : *
    * Purpose : to get list of testimonial
    * PARAMS : formData
    */
    TestimonialService.prototype.listTestimonial = function (formData) {
        return this.http.post(_globalConfig__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + 'testimonial/list', _globalConfig__WEBPACK_IMPORTED_MODULE_3__["APPEND_REQUEST_DATA"](formData));
    };
    /* Function Name : editTestimonial
    * Author :
    * Created Date : 25-02-2019
    * Modified Date : *
    * Purpose : to edit own testimonial
    * PARAMS : formData
    */
    TestimonialService.prototype.editTestimonial = function (formData) {
        return this.http.post(_globalConfig__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + 'testimonial/edit', _globalConfig__WEBPACK_IMPORTED_MODULE_3__["APPEND_REQUEST_DATA"](formData));
    };
    /* Function Name : deleteTestimonial
    * Author :
    * Created Date : 25-02-2019
    * Modified Date : *
    * Purpose : to delete a testimonial
    * PARAMS : formData
    */
    TestimonialService.prototype.deleteTestimonial = function (formData) {
        return this.http.post(_globalConfig__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + 'testimonial/delete', _globalConfig__WEBPACK_IMPORTED_MODULE_3__["APPEND_REQUEST_DATA"](formData));
    };
    /* Function Name : acceptTestimonial
    * Author :
    * Created Date : 25-02-2019
    * Modified Date : *
    * Purpose : to accept testimonial
    * PARAMS : formData
    */
    TestimonialService.prototype.acceptTestimonial = function (formData) {
        return this.http.post(_globalConfig__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + 'testimonial/status-change', _globalConfig__WEBPACK_IMPORTED_MODULE_3__["APPEND_REQUEST_DATA"](formData));
    };
    /* Function Name : publicTestimonial
    * Author :
    * Created Date : 25-02-2019
    * Modified Date : *
    * Purpose : to get testimonial list
    * PARAMS : formData
    */
    TestimonialService.prototype.publicTestimonial = function (formData) {
        return this.http.post(_globalConfig__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + 'testimonial/public', _globalConfig__WEBPACK_IMPORTED_MODULE_3__["APPEND_REQUEST_DATA"](formData));
    };
    /* Function Name : replyTestimonial
* Author :
* Created Date :17-06-2019
* Modified Date : *
* Purpose : to sen reply of  testimonial
* PARAMS : formData
*/
    TestimonialService.prototype.replyTestimonial = function (formData) {
        return this.http.post(_globalConfig__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + 'testimonial/send-reply', _globalConfig__WEBPACK_IMPORTED_MODULE_3__["APPEND_REQUEST_DATA"](formData));
    };
    TestimonialService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], TestimonialService);
    return TestimonialService;
}());



/***/ }),

/***/ "./src/app/setupprofile.guard.ts":
/*!***************************************!*\
  !*** ./src/app/setupprofile.guard.ts ***!
  \***************************************/
/*! exports provided: SetupprofileGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetupprofileGuard", function() { return SetupprofileGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! crypto-js */ "./node_modules/crypto-js/index.js");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_6__);







var SetupprofileGuard = /** @class */ (function () {
    function SetupprofileGuard(uService, router, cService) {
        this.uService = uService;
        this.router = router;
        this.cService = cService;
    }
    SetupprofileGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        var user = null;
        if (localStorage.getItem("_user")) {
            user = this.cService.getLoggedUserData();
            user = parseInt(user._i);
            user = crypto_js__WEBPACK_IMPORTED_MODULE_6__["AES"].encrypt(JSON.stringify(user), 'careery');
            user = user.toString();
        }
        else if (localStorage.getItem('_tmpu')) {
            user = localStorage.getItem('_tmpu');
        }
        return this.uService.userpreviewCvInfo({ cv_user: user })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (responseData) {
            if (responseData.statustext === 'success') {
                var userData = responseData.data;
                if (userData.experience_level &&
                    userData.email &&
                    userData.mobile_no &&
                    userData.country_id &&
                    userData.city_id &&
                    userData.nationality_id &&
                    userData.dream_job_id &&
                    userData.dream_job_location_id &&
                    userData.dream_job_type
                // &&
                // userData.degree.length > 0 &&
                // userData.experience.length > 0 &&
                // userData.skills.length > 0
                ) {
                    return true;
                }
                else {
                    _this.router.navigate['/setup-profile'];
                    return false;
                }
            }
            else {
                return false;
            }
        }));
    };
    SetupprofileGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]])
    ], SetupprofileGuard);
    return SetupprofileGuard;
}());



/***/ })

}]);
//# sourceMappingURL=profile-profile-module.js.map