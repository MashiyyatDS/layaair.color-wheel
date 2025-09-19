{
  "_$ver": 1,
  "_$id": "lx8mwule",
  "_$preloads": [
    "res://9afe09c5-f71a-4316-b995-9ca0ddfd73f6",
    "res://ba31ea19-00bc-49e1-862b-0f2840abdf6b",
    "res://d6cd86bb-bcb8-4e38-975c-9f828b02d502",
    "res://59b60604-b5eb-4c54-a4f3-4506dd407c9f",
    "res://9059767f-68f2-4ab0-a161-10055ddc79e6",
    "res://57063b9a-0b1b-4bb6-9e9a-25424ec2a323",
    "res://91551022-12a3-4742-b315-59d4de942d25",
    "res://cfeef2b9-a4ce-40cb-adbb-1e6d5a2a2cf9",
    "res://78ea024e-0f97-405a-9e4c-029e0ce67fcf",
    "res://3942d77a-6443-41c1-b277-7dbf5f31812c",
    "res://d5bad2fd-7c73-4d38-8906-bdecec227feb",
    "res://2e82b8fe-a4f2-4496-8215-0e26502e2b1f"
  ],
  "_$type": "Scene",
  "left": 0,
  "right": 0,
  "top": 0,
  "bottom": 0,
  "name": "MainScene",
  "width": 720,
  "height": 1080,
  "_$comp": [
    {
      "_$type": "a34a42bf-76bf-4225-823b-846ac4165c50",
      "scriptPath": "../src/scenes/MainScene.ts",
      "balance": {
        "_$ref": "vngk18y8"
      },
      "wheel": {
        "_$ref": "sajhwqah"
      },
      "bettingAreaContainer": {
        "_$ref": "nyaf6d40"
      },
      "coinsContainer": {
        "_$ref": "7si7qkkh"
      },
      "gameButtons": {
        "_$ref": "rigfoz01"
      }
    }
  ],
  "_$child": [
    {
      "_$id": "z4lp6uve",
      "_$type": "Image",
      "name": "Background",
      "x": 360,
      "y": 540,
      "width": 720,
      "height": 1280,
      "anchorX": 0.5,
      "anchorY": 0.5,
      "_mouseState": 2,
      "skin": "res://ba31ea19-00bc-49e1-862b-0f2840abdf6b",
      "useSourceSize": true,
      "color": "#ffffff"
    },
    {
      "_$id": "2ap8152r",
      "_$type": "ViewStack",
      "name": "Toolbar",
      "x": 361,
      "y": 80,
      "width": 720,
      "height": 200,
      "anchorX": 0.5,
      "anchorY": 0.5,
      "selectedIndex": null,
      "_$child": [
        {
          "_$id": "bu55gh1r",
          "_$type": "Image",
          "name": "Image",
          "x": 359,
          "y": 56,
          "width": 720,
          "height": 112,
          "anchorX": 0.5,
          "anchorY": 0.5,
          "skin": "res://d5bad2fd-7c73-4d38-8906-bdecec227feb",
          "color": "#ffffff"
        }
      ]
    },
    {
      "_$id": "sajhwqah",
      "_$type": "ViewStack",
      "name": "Wheel",
      "x": 360,
      "y": 469,
      "width": 691,
      "height": 691,
      "anchorX": 0.5,
      "anchorY": 0.5,
      "selectedIndex": null,
      "_$comp": [
        {
          "_$type": "2bc9e3b3-9502-4c5e-8125-ca644d06ff67",
          "scriptPath": "../src/components/Wheel.ts",
          "wheel": {
            "_$ref": "sajhwqah"
          },
          "wheelImage": {
            "_$ref": "9qj9y4om"
          }
        }
      ],
      "_$child": [
        {
          "_$id": "9qj9y4om",
          "_$type": "Image",
          "name": "Image",
          "x": 345,
          "y": 345,
          "width": 691,
          "height": 691,
          "anchorX": 0.5,
          "anchorY": 0.5,
          "skin": "res://2e82b8fe-a4f2-4496-8215-0e26502e2b1f",
          "color": "#ffffff"
        },
        {
          "_$id": "yniq9ucz",
          "_$type": "Image",
          "name": "Image_1",
          "x": 345,
          "y": 29,
          "width": 131,
          "height": 131,
          "anchorX": 0.5,
          "anchorY": 0.5,
          "skin": "res://9afe09c5-f71a-4316-b995-9ca0ddfd73f6",
          "color": "#ffffff"
        }
      ]
    },
    {
      "_$id": "7si7qkkh",
      "_$type": "ViewStack",
      "name": "CoinsContainer",
      "x": 360,
      "y": 1016,
      "width": 720,
      "height": 100,
      "anchorX": 0.5,
      "anchorY": 0.5,
      "selectedIndex": null,
      "_$comp": [
        {
          "_$type": "7d7998f4-94f0-4178-8571-949f12e8b74e",
          "scriptPath": "../src/components/CoinsContainer.ts",
          "coinPrefab": {
            "_$uuid": "a8a2fdf5-2876-45d8-a572-e24930dbd8b5",
            "_$type": "Prefab"
          },
          "coinsContainer": {
            "_$ref": "7si7qkkh"
          },
          "editCoinsButton": {
            "_$ref": "srdohqal"
          },
          "coinsEditor": {
            "_$ref": "y7x4djaw"
          }
        }
      ],
      "_$child": [
        {
          "_$id": "srdohqal",
          "_$type": "ViewStack",
          "name": "EditButton",
          "x": 671,
          "y": 50,
          "width": 70,
          "height": 70,
          "anchorX": 0.5,
          "anchorY": 0.5,
          "selectedIndex": null,
          "_$child": [
            {
              "_$id": "ndamotn5",
              "_$type": "Image",
              "name": "Image",
              "x": 35,
              "y": 35,
              "width": 70,
              "height": 70,
              "anchorX": 0.5,
              "anchorY": 0.5,
              "skin": "res://91551022-12a3-4742-b315-59d4de942d25",
              "color": "#ffffff"
            },
            {
              "_$id": "6oyr2ab0",
              "_$type": "Label",
              "name": "Label",
              "x": 35,
              "y": 35,
              "width": 70,
              "height": 70,
              "anchorX": 0.5,
              "anchorY": 0.5,
              "text": "Edit\nCoins",
              "font": "res://f677a37b-de39-486f-934f-bee419c1cb6e",
              "fontSize": 16,
              "color": "#ffffff",
              "align": "center",
              "valign": "middle",
              "stroke": 2
            }
          ]
        },
        {
          "_$id": "8knnoxvu",
          "_$prefab": "a8a2fdf5-2876-45d8-a572-e24930dbd8b5",
          "name": "Coin1",
          "active": true,
          "x": 80,
          "y": 50,
          "visible": true
        },
        {
          "_$id": "thxys8au",
          "_$prefab": "a8a2fdf5-2876-45d8-a572-e24930dbd8b5",
          "name": "Coin2",
          "active": true,
          "x": 180,
          "y": 50,
          "visible": true
        },
        {
          "_$id": "fc28cvsx",
          "_$prefab": "a8a2fdf5-2876-45d8-a572-e24930dbd8b5",
          "name": "Coin3",
          "active": true,
          "x": 280,
          "y": 50,
          "visible": true
        },
        {
          "_$id": "9pcvbjtd",
          "_$prefab": "a8a2fdf5-2876-45d8-a572-e24930dbd8b5",
          "name": "Coin4",
          "active": true,
          "x": 380,
          "y": 50,
          "visible": true
        },
        {
          "_$id": "9ra98adz",
          "_$prefab": "a8a2fdf5-2876-45d8-a572-e24930dbd8b5",
          "name": "Coin5",
          "active": true,
          "x": 480,
          "y": 50,
          "visible": true
        },
        {
          "_$id": "fhgwa7id",
          "_$prefab": "a8a2fdf5-2876-45d8-a572-e24930dbd8b5",
          "name": "Coin6",
          "active": true,
          "x": 580,
          "y": 50,
          "visible": true
        }
      ]
    },
    {
      "_$id": "rigfoz01",
      "_$type": "ViewStack",
      "name": "GameButtons",
      "x": 360,
      "y": 911,
      "width": 720,
      "height": 75,
      "anchorX": 0.5,
      "anchorY": 0.5,
      "selectedIndex": null,
      "_$comp": [
        {
          "_$type": "1459c9c7-66ee-4dd0-825a-526b95e0df98",
          "scriptPath": "../src/components/GameButtons.ts",
          "cancelButton": {
            "_$ref": "zjeigyrm"
          },
          "rebetButton": {
            "_$ref": "pp3m37fm"
          },
          "confirmButton": {
            "_$ref": "i2rcup2b"
          },
          "bettingAreaContainer": {
            "_$ref": "nyaf6d40"
          }
        }
      ],
      "_$child": [
        {
          "_$id": "zjeigyrm",
          "_$type": "ViewStack",
          "name": "CancelButton",
          "x": 130,
          "y": 37,
          "width": 220,
          "height": 75,
          "anchorX": 0.5,
          "anchorY": 0.5,
          "selectedIndex": null,
          "_$child": [
            {
              "_$id": "7xqmnunl",
              "_$type": "Image",
              "name": "Image",
              "x": 109,
              "y": 37,
              "width": 220,
              "height": 78,
              "anchorX": 0.5,
              "anchorY": 0.5,
              "skin": "res://78ea024e-0f97-405a-9e4c-029e0ce67fcf",
              "color": "#ffffff"
            },
            {
              "_$id": "hvkvn7ah",
              "_$type": "Label",
              "name": "Label",
              "x": 110,
              "y": 31,
              "width": 220,
              "height": 63,
              "anchorX": 0.5,
              "anchorY": 0.5,
              "text": "Cancel",
              "font": "res://48b1be50-44cc-46f7-9198-613e7378b9e1",
              "fontSize": 30,
              "color": "#ffffff",
              "align": "center",
              "valign": "middle",
              "stroke": 4,
              "strokeColor": "#058441"
            }
          ]
        },
        {
          "_$id": "pp3m37fm",
          "_$type": "ViewStack",
          "name": "RebetButton",
          "x": 360,
          "y": 37,
          "width": 220,
          "height": 75,
          "anchorX": 0.5,
          "anchorY": 0.5,
          "selectedIndex": null,
          "_$child": [
            {
              "_$id": "02z6otk3",
              "_$type": "Image",
              "name": "Image",
              "x": 109,
              "y": 37,
              "width": 220,
              "height": 78,
              "anchorX": 0.5,
              "anchorY": 0.5,
              "skin": "res://78ea024e-0f97-405a-9e4c-029e0ce67fcf",
              "color": "#ffffff"
            },
            {
              "_$id": "pv7b7rv1",
              "_$type": "Label",
              "name": "Label",
              "x": 110,
              "y": 31,
              "width": 220,
              "height": 63,
              "anchorX": 0.5,
              "anchorY": 0.5,
              "text": "Rebet",
              "font": "res://48b1be50-44cc-46f7-9198-613e7378b9e1",
              "fontSize": 30,
              "color": "#ffffff",
              "align": "center",
              "valign": "middle",
              "stroke": 4,
              "strokeColor": "#058441"
            }
          ]
        },
        {
          "_$id": "i2rcup2b",
          "_$type": "ViewStack",
          "name": "ConfirmButton",
          "x": 590,
          "y": 37,
          "width": 220,
          "height": 75,
          "anchorX": 0.5,
          "anchorY": 0.5,
          "selectedIndex": null,
          "_$child": [
            {
              "_$id": "5q6edgnn",
              "_$type": "Image",
              "name": "Image",
              "x": 109,
              "y": 37,
              "width": 220,
              "height": 78,
              "anchorX": 0.5,
              "anchorY": 0.5,
              "skin": "res://78ea024e-0f97-405a-9e4c-029e0ce67fcf",
              "color": "#ffffff"
            },
            {
              "_$id": "me84s620",
              "_$type": "Label",
              "name": "Label",
              "x": 110,
              "y": 31,
              "width": 220,
              "height": 63,
              "anchorX": 0.5,
              "anchorY": 0.5,
              "text": "Confirm",
              "font": "res://48b1be50-44cc-46f7-9198-613e7378b9e1",
              "fontSize": 30,
              "color": "#ffffff",
              "align": "center",
              "valign": "middle",
              "stroke": 4,
              "strokeColor": "#058441"
            }
          ]
        }
      ]
    },
    {
      "_$id": "nyaf6d40",
      "_$type": "ViewStack",
      "name": "BettingAreaContainer",
      "x": 360,
      "y": 709,
      "width": 673,
      "height": 314,
      "anchorX": 0.5,
      "anchorY": 0.5,
      "selectedIndex": null,
      "_$comp": [
        {
          "_$type": "5fbde25e-edd6-4b73-bc1e-dbad9cebdb04",
          "scriptPath": "../src/components/BettingAreaContainer.ts",
          "text": ""
        }
      ],
      "_$child": [
        {
          "_$id": "01skejcn",
          "_$type": "Image",
          "name": "Image",
          "x": 336,
          "y": 157,
          "width": 673,
          "height": 314,
          "anchorX": 0.5,
          "anchorY": 0.5,
          "skin": "res://d6cd86bb-bcb8-4e38-975c-9f828b02d502",
          "color": "#ffffff"
        },
        {
          "_$id": "53zit5xs",
          "_$prefab": "4dc5689f-a7e3-4148-936a-05fee3000c99",
          "name": "x1",
          "active": true,
          "x": 0,
          "y": 0,
          "visible": true,
          "_$comp": [
            {
              "_$override": "42063f47-a303-45f4-9818-664d73fa0350",
              "type": "x1",
              "bettingArea": {
                "_$ref": "53zit5xs"
              }
            }
          ]
        },
        {
          "_$id": "eppdcg1f",
          "_$prefab": "4dc5689f-a7e3-4148-936a-05fee3000c99",
          "name": "x2",
          "active": true,
          "x": 226,
          "y": 0,
          "visible": true,
          "_$comp": [
            {
              "_$override": "42063f47-a303-45f4-9818-664d73fa0350",
              "type": "x2",
              "bettingArea": {
                "_$ref": "eppdcg1f"
              }
            }
          ]
        },
        {
          "_$id": "n38diojz",
          "_$prefab": "4dc5689f-a7e3-4148-936a-05fee3000c99",
          "name": "x5",
          "active": true,
          "x": 453,
          "y": 0,
          "visible": true,
          "_$comp": [
            {
              "_$override": "42063f47-a303-45f4-9818-664d73fa0350",
              "type": "x5",
              "bettingArea": {
                "_$ref": "n38diojz"
              }
            }
          ]
        },
        {
          "_$id": "o3f9l8dp",
          "_$prefab": "4dc5689f-a7e3-4148-936a-05fee3000c99",
          "name": "x10",
          "active": true,
          "x": 0,
          "y": 159,
          "visible": true,
          "_$comp": [
            {
              "_$override": "42063f47-a303-45f4-9818-664d73fa0350",
              "type": "x10",
              "bettingArea": {
                "_$ref": "o3f9l8dp"
              }
            }
          ],
          "_$child": [
            {
              "_$id": "2gju76m9",
              "_$prefab": "a8a2fdf5-2876-45d8-a572-e24930dbd8b5",
              "name": "Coin",
              "active": true,
              "x": 57,
              "y": 306,
              "visible": false
            }
          ]
        },
        {
          "_$id": "z7182fo3",
          "_$prefab": "4dc5689f-a7e3-4148-936a-05fee3000c99",
          "name": "x20",
          "active": true,
          "x": 226,
          "y": 159,
          "visible": true,
          "_$comp": [
            {
              "_$override": "42063f47-a303-45f4-9818-664d73fa0350",
              "type": "x20",
              "bettingArea": {
                "_$ref": "z7182fo3"
              }
            }
          ]
        },
        {
          "_$id": "0nyuph6x",
          "_$prefab": "4dc5689f-a7e3-4148-936a-05fee3000c99",
          "name": "x40",
          "active": true,
          "x": 453,
          "y": 159,
          "visible": true,
          "_$comp": [
            {
              "_$override": "42063f47-a303-45f4-9818-664d73fa0350",
              "type": "x40",
              "bettingArea": {
                "_$ref": "0nyuph6x"
              }
            }
          ]
        }
      ]
    },
    {
      "_$id": "vngk18y8",
      "_$type": "Label",
      "name": "Balance",
      "x": 360,
      "y": 30,
      "width": 664,
      "height": 50,
      "anchorX": 0.5,
      "anchorY": 0.5,
      "text": "0",
      "font": "res://48b1be50-44cc-46f7-9198-613e7378b9e1",
      "fontSize": 40,
      "color": "#ffffff",
      "align": "right",
      "stroke": 6,
      "strokeColor": "#b56339"
    },
    {
      "_$id": "h837d5dc",
      "_$type": "Label",
      "name": "BalanceLabel",
      "x": 646,
      "y": 58,
      "width": 92,
      "height": 40,
      "anchorX": 0.5,
      "anchorY": 0.5,
      "text": "Balance",
      "font": "res://48b1be50-44cc-46f7-9198-613e7378b9e1",
      "fontSize": 20,
      "color": "#ffffff",
      "align": "right",
      "valign": "middle",
      "stroke": 3,
      "strokeColor": "#b56339"
    },
    {
      "_$id": "y7x4djaw",
      "_$prefab": "2ffcd984-9262-4176-8758-b3ec459a9208",
      "name": "CoinsEditor",
      "active": true,
      "x": 110,
      "y": 190,
      "visible": false,
      "alpha": 0
    },
    {
      "_$id": "upey8gzf",
      "_$type": "ViewStack",
      "name": "Snackbar",
      "x": 360,
      "y": 70,
      "width": 250,
      "height": 92,
      "anchorX": 0.5,
      "anchorY": 0.5,
      "selectedIndex": null,
      "_$comp": [
        {
          "_$type": "7352bd1e-da11-434a-bee5-3c7d377063af",
          "scriptPath": "../src/components/Snackbar.ts",
          "snackbar": {
            "_$ref": "upey8gzf"
          },
          "message": {
            "_$ref": "d7rpc9x4"
          }
        }
      ],
      "_$child": [
        {
          "_$id": "9njg6jeh",
          "_$type": "Image",
          "name": "Image",
          "x": 125,
          "y": 46,
          "width": 250,
          "height": 92,
          "anchorX": 0.5,
          "anchorY": 0.5,
          "skin": "res://3942d77a-6443-41c1-b277-7dbf5f31812c",
          "color": "#ffffff"
        },
        {
          "_$id": "d7rpc9x4",
          "_$type": "Label",
          "name": "Message",
          "x": 125,
          "y": 42,
          "width": 250,
          "height": 84,
          "anchorX": 0.5,
          "anchorY": 0.5,
          "text": "Bet\nSuccessfull",
          "font": "res://48b1be50-44cc-46f7-9198-613e7378b9e1",
          "fontSize": 25,
          "color": "#ffffff",
          "align": "center",
          "valign": "middle",
          "stroke": 5,
          "strokeColor": "#bb762e"
        }
      ]
    }
  ]
}