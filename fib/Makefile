FCT=fib

wasm: $(FCT).c
        sed 's|NELUA_STATIC_ASSERT(sizeof(void\*)|//NELUA_STATIC_ASSERT(sizeof(void\*)|' -i $(FCT).c
        emcc -Os -s $(FCT).c -o $(FCT).js -s WASM=1 -s EXPORTED_FUNCTIONS=_$(FCT) -s EXPORTED_RUNTIME_METHODS=cwrap


$(FCT).c: $(FCT).nelua
        nelua -c $(FCT).nelua -o $(FCT).c


clean:
        rm $(FCT).c $(FCT).wasm  $(FCT).js 
