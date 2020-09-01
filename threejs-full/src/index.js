import * as THREE from 'three';

import { OrbitControls } from './jsm/controls/OrbitControls.js';
import { CSS3DRenderer, CSS3DObject } from './jsm/renderers/CSS3DRenderer.js';
import { CSS2DRenderer, CSS2DObject } from './jsm/renderers/CSS2DRenderer.js';

(function(window){
  window.THREE = THREE;
  window.OrbitControls = OrbitControls;
  window.CSS3DRenderer = CSS3DRenderer;
  window.CSS3DObject = CSS3DObject;
  window.CSS2DRenderer = CSS2DRenderer;
  window.CSS2DObject = CSS2DObject;
})(window)