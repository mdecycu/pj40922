var tipuesearch = {"pages": [{'title': 'About', 'text': '有限元素法在四足機器人設計上的應用 \n Application of Finite Element Method to Quadruped Robot Design \n https://github.com/mdecycu/pj40922 \n https://mdecycu.github.io/pj40922 \n \n https://github.com/NGSolve/ngsolve \xa0 \n https://www.math.uzh.ch/compmath/fileadmin/user/stas/compmath/Abschlussarbeiten/Arnold_Noam/myManual.pdf \xa0 \n https://www.asc.tuwien.ac.at/~lehrenfeld/Talks/Vancouver_Session1.pdf \xa0 \n https://www.asc.tuwien.ac.at/~schoeberl/wiki/talks/ng_oslo.pdf \xa0 \n https://www.researchgate.net/publication/266797024_C11_Implementation_of_Finite_Elements_in_NGSolve \xa0 \n https://guriang.unpad.ac.id/workshop/slides/fem.pdf \xa0 \n https://buildmedia.readthedocs.org/media/pdf/ngs-py/latest/ngs-py.pdf \xa0 \n 專題成員: \n 40923231 \n 40923233 \n 40923235 \n 40923240', 'tags': '', 'url': 'About.html'}, {'title': 'Project', 'text': 'https://github.com/SJ-YI/PADWQ_open_source \n PADWQ_open_source-main.zip \n ㄐ \n', 'tags': '', 'url': 'Project.html'}, {'title': '結構分析', 'text': '一种四足步行机器人结构设计与分析.pdf  (雙自由度平面並聯五連桿設計) \n 建立運動模型 \n 正運動學分析 \n 位置分析 \n 速度分析 \n 加速度分析 \n 逆運動學分析 \n 位置分析 \n 速度分析 \n 加速度分析 \n 輸出軌跡規劃 \n 建立步行機構模型 \n 整體結構設計 \n 六足機器人跨越非連續地形之行走策略.pdf \n', 'tags': '', 'url': '結構分析.html'}, {'title': 'Femap', 'text': 'Femap Basics 1: UI Overview - YouTube \n Femap Basics 2: Geometry Preparation - YouTube \n Femap Basics 3: Properties, Loads and Boundary Conditions - YouTube \n Introducing Simcenter Femap 2021 - YouTube \n Introduction to running a FEMAP model - YouTube \n Femap Tutorial 3: Plate Analysis - YouTube', 'tags': '', 'url': 'Femap.html'}, {'title': 'CoppeliaSim', 'text': '', 'tags': '', 'url': 'CoppeliaSim.html'}, {'title': 'Compile', 'text': '編譯 CoppeliaSim 4.1.0 教育版： \n \n 啟動隨身程式系統 - compile_copsim_for_pj2022.7z (download file size 4 GB, uncompressed file size 14 GB) \n y:\\tmp>mkdir cop410 \n y:\\tmp\\>cd cop410 \n y:\\tmp\\cop410>git clone --recurse-submodules  https://github.com/CoppeliaRobotics/CoppeliaSimLib.git \n y:\\tmp\\cop410>mkdir programming \n y:\\tmp\\cop410>cd programming \n y:\\tmp\\cop410\\programming>git clone --recurse-submodules  https://github.com/CoppeliaRobotics/coppeliaSimClientApplication.git \n y:\\tmp\\cop410\\programming>git clone --recurse-submodules  https://github.com/CoppeliaRobotics/include.git \n y:\\tmp\\cop410\\programming>git clone --recurse-submodules  https://github.com/CoppeliaRobotics/common.git \n y:\\tmp\\cop410\\programming>git clone --recurse-submodules  https://github.com/CoppeliaRobotics/simMath.git \n y:\\tmp\\cop410\\programming>git clone --recurse-submodules  https://github.com/CoppeliaRobotics/libPlugin.git \n y:\\tmp\\cop410\\programming>git clone --recurse-submodules  https://github.com/CoppeliaRobotics/simExtAssimp.git \n y:\\tmp\\cop410\\programming>git clone --recurse-submodules  https://github.com/CoppeliaRobotics/simExtIK.git \n y:\\tmp\\cop410\\programming>git clone --recurse-submodules  https://github.com/CoppeliaRobotics/simExtGeom.git \n y:\\tmp\\cop410\\programming>git clone --recurse-submodules  https://github.com/CoppeliaRobotics/simExtRemoteApi.git \n y:\\tmp\\cop410\\programming>git clone --recurse-submodules  https://github.com/CoppeliaRobotics/remoteApiBindings.git \n y:\\tmp\\cop410\\programming>git clone --recurse-submodules  https://github.com/CoppeliaRobotics/bluezero.git  (因為沒有 coppeliasim-v4.1.0 版, 因此使用最新版) \n y:\\tmp\\cop410\\programming>git clone --recurse-submodules  https://github.com/CoppeliaRobotics/simExtCodeEditor.git \n \n 以上取得的倉儲都是當下最新版本, 因為要編譯 coppeliasim-v4.1.0 版本, 因此以 CoppeliaSimLib 倉儲為例, 必須 checkout coppeliasim-v4.1.0 版本內容: \n \n Y:\\tmp\\cop410>cd CoppeliaSimLib \n Y:\\tmp\\cop410\\CoppeliaSimLib>git checkout coppeliasim-v4.1.0 \n 查驗目前倉儲所在的版本號, 可以使用 Y:\\tmp\\cop410\\CoppeliaSimLib>git show \n \n 其餘 c:\\tmp\\cop410\\programming 目錄下的各倉儲也必須取出對應的 coppeliasim-v4.1.0 版本內容. \n 執行 CoppeliaSimLib 的編譯, 需要 config.pri 中的相關設定: \n # location of boost headers:\n    BOOST_INCLUDEPATH = "Y:/msys64_20210419/mingw64/include/boost"\n \n# location of lua headers:\n    LUA_INCLUDEPATH = "Y:/lua-5.1.5/src"\n \n# lua libraries to link:\n    LUA_LIBS = "y:/lua-5.1.5/src/liblua.a"\n  \n# qscintilla location:\n    QSCINTILLA_DIR = "y:/QScintilla_gpl-2.11.2"\n \n# qscintilla headers:\n    QSCINTILLA_INCLUDEPATH = "$${QSCINTILLA_DIR}/include" "$${QSCINTILLA_DIR}/Qt4Qt5"\n  \n# qscintilla libraries to link:\n    QSCINTILLA_LIBS = "$${QSCINTILLA_DIR}/libqscintilla2_qt5.dll.a"\n \n# Make sure if a config.pri is found one level above, that it will be used instead of this one:\n    exists(../config.pri) { include(../config.pri) } \n 由上列 config.pri 設定檔案可以得知必須要先編譯 lua-5.1.5 與 QScintilla_gpl-2.11.2, 分別取得對應的程式庫之後, 再編譯 CoppeliaSimLib. \n 設定完成後, 執行 Y:\\tmp\\cop410\\CoppeliaSimLib>qmake -o Makefile coppeliaSimLib.pro \n 接著執行 Y:\\tmp\\cop410\\CoppeliaSimLib>mingw32-make -f Makefile.Release \n 編譯結束後, 可以在 Release 目錄中建立 coppeliaSim.dll, 這是 CoppeliaSim 的主要動態連結程式庫. \n 接著為了執行自行編譯的 CoppeliaSim 4.1.0, 在 Y:\\tmp\\cop410 中建立 coppeliasim410 目錄, 用來存放編譯完成的檔案, 並且配合 CoppeliaSim 啟動時所需的相關設定內容進行後續的設定. \n Y:\\tmp\\cop410>mkdir coppeliasim410 \n 將前面已經編譯完成的 coppeliaSim.dll 放入 Y:\\tmp\\cop410\\coppeliasim410 目錄中, 接著進入 Y:\\tmp\\cop410\\programming\\coppeliaSimClientApplication 目錄, 以下列命令建立 coppeliaSim.exe 執行檔. \n 而在建立 coppeliaSim.exe 之前, 需要再編輯 coppeliaSim_resource.rc 檔案, 下載 coppeliaSim.ico, 並且開啟 coppeliaSim.pro 中第 42 行 RC_ICONS += coppeliaSim.ico 設定, 以便將 coppeliaSim.ico 圖像編譯後放入 coppeliaSim.exe, coppeliaSim_resource.rc 設定內容如下: \n #include <windows.h>\n \nIDI_ICON1   ICON    DISCARDABLE "Y:/tmp/cop410/programming/coppeliaSimClientApplication/coppeliaSim.ico"\n \nVS_VERSION_INFO VERSIONINFO\n    FILEVERSION 0,0,0,0\n    PRODUCTVERSION 0,0,0,0\n    FILEFLAGSMASK 0x3fL\n#ifdef _DEBUG\n    FILEFLAGS VS_FF_DEBUG\n#else\n    FILEFLAGS 0x0L\n#endif\n    FILEOS VOS__WINDOWS32\n    FILETYPE VFT_DLL\n    FILESUBTYPE 0x0L\n    BEGIN\n        BLOCK "StringFileInfo"\n        BEGIN\n            BLOCK "040904b0"\n            BEGIN\n                VALUE "CompanyName", "\\0"\n                VALUE "FileDescription", "\\0"\n                VALUE "FileVersion", "0.0.0.0\\0"\n                VALUE "LegalCopyright", "\\0"\n                VALUE "OriginalFilename", "coppeliaSim.exe\\0"\n                VALUE "ProductName", "coppeliaSim\\0"\n                VALUE "ProductVersion", "0.0.0.0\\0"\n            END\n        END\n        BLOCK "VarFileInfo"\n        BEGIN\n            VALUE "Translation", 0x0409, 1200\n        END\n    END\n/* End of Version info */ \n Y:\\tmp\\cop410\\programming\\coppeliaSimClientApplication>qmake -o Makefile coppeliaSim.pro \n Y:\\tmp\\cop410\\programming\\coppeliaSimClientApplication>mingw32-make -f Makefile.Release \n 編譯完成後可以在 Y:\\tmp\\cop410\\programming\\coppeliaSimClientApplication\\release 目錄中建立 coppeliaSim.exe 執行檔. \n 將 coppeliaSim.exe 與 coppeliaSim.dll 放入 Y:\\tmp\\cop410\\coppeliasim410 目錄後, 在可攜系統的命令列中, 執行 Y:\\tmp\\cop410\\coppeliasim410\\coppeliaSim 已經可以開啟 coppeliaSim 4.1.0 版, 且首次啟動, coppeliaSim.exe 會自動建立 system 目錄以及其中的 usrset.txt 使用者設定檔案. \n 接下來必須在 Y:\\tmp\\cop410\\coppeliasim410 目錄加上以下倉儲的內容: \n https://github.com/CoppeliaRobotics/scenes.git \n https://github.com/CoppeliaRobotics/models.git \n https://github.com/CoppeliaRobotics/lua.git \n https://github.com/CoppeliaRobotics/helpFiles.git \n 分別取下各倉儲內容後, 也是必須進行 git checkout coppeliasim-v4.1.0, 簽出與 coppeliaSim.exe 及 coppeliasim.dll 系統對應的版本. \n 編譯流程到這個階段, 再從命令列中啟動 coppeliaSim.exe 已經可以在看到圖型介面中的 Model browser 區域已經載入 models 目錄中的 .ttm, 但是 default 場景還無法顯示, 因為在 system 系統目錄中, 還需要有 dfltscn.ttt 內定場景檔案 (標示在  simFlavor.cpp 檔案中第 203 行 ), 隨後還需要加入更多的延伸模組程式庫, 所編譯完成的 CoppeliaSim 4.1.0 程式套件, 才能配合接下來的電腦輔助設計實習與協同產品設計實習課程使用. \n', 'tags': '', 'url': 'Compile.html'}, {'title': 'Brython', 'text': 'ROC 國旗規格   PROC 國旗規格   USA 國旗規格 \n Gist Brython scripts \n 解題練習 \n Cango \n \n \n \n \n  for ggame  \n \n \n \n \n \n \n \n \n  Cango 程式庫  \n \n \n \n \n \n \n \n \n  for Konva 程式庫  \n \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["py_src"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n add 1 to 100 p261 ROC flag PROC flag USA flag Draw Grid Random Rect Rect Walk Rect U Walk Rect rev U Walk 單節貪食蛇 5 個紅點方塊 Snake BSnake auto_guess ball bezier big_lotto brython_kw bunny cango_spur cango_spur1 cango_three_gears clear clock convert_temp deepmerge display_stl draw ex1 ex2 ex3 ex4 fibo fourbar guess_a_number hw1_1 hw1_2 Keycode knova1 merge3 power_lotto spur spur_w_form stl_binary_ascii stl_writer Tetris turtle1 turtle2 turtle3 turtle4 turtle5 turtle6 turtle7 turtle8 twl_link_ik webcam websocket ycqsort \n  ######################  editor1 開始 ######################  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div 作為切入位置  \n  這裡的畫布 id 為 brython_div  \n \n  graphics-column is for ggame  \n \n  ######################  editor1 結束 ######################  \n  以下可以開始利用 editor1 的設定編寫對應 Brython 程式  \n \n  以上為內建程式, 頁面可透過 ?src=gist_url 執行  \n  add 1 to 100 開始  \n \n', 'tags': '', 'url': 'Brython.html'}]};