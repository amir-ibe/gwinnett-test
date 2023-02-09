var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_gwinnett28_1 = new ol.format.GeoJSON();
var features_gwinnett28_1 = format_gwinnett28_1.readFeatures(json_gwinnett28_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_gwinnett28_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gwinnett28_1.addFeatures(features_gwinnett28_1);
var lyr_gwinnett28_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_gwinnett28_1, 
                style: style_gwinnett28_1,
                interactive: true,
    title: 'gwinnett28<br />\
    <img src="styles/legend/gwinnett28_1_0.png" /> 0.0 - 0.0<br />\
    <img src="styles/legend/gwinnett28_1_1.png" /> 0.0 - 0.0<br />\
    <img src="styles/legend/gwinnett28_1_2.png" /> 1 - 25000<br />\
    <img src="styles/legend/gwinnett28_1_3.png" /> 25000 - 50000<br />\
    <img src="styles/legend/gwinnett28_1_4.png" /> 50000 - 80000<br />\
    <img src="styles/legend/gwinnett28_1_5.png" /> 80000 - 120000<br />\
    <img src="styles/legend/gwinnett28_1_6.png" /> 120000 - 213730<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_gwinnett28_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_gwinnett28_1];
lyr_gwinnett28_1.set('fieldAliases', {'GEOID': 'GEOID', 'Census': 'Census', 'State': 'State', 'County': 'County', 'OBJECTID': 'OBJECTID', 'ACRES': 'ACRES', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'MHI': 'MHI', });
lyr_gwinnett28_1.set('fieldImages', {'GEOID': 'TextEdit', 'Census': 'TextEdit', 'State': 'TextEdit', 'County': 'TextEdit', 'OBJECTID': 'TextEdit', 'ACRES': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'MHI': 'Range', });
lyr_gwinnett28_1.set('fieldLabels', {'GEOID': 'inline label', 'Census': 'inline label', 'State': 'inline label', 'County': 'inline label', 'OBJECTID': 'inline label', 'ACRES': 'inline label', 'Shape_Leng': 'inline label', 'Shape_Area': 'inline label', 'MHI': 'header label', });
lyr_gwinnett28_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});