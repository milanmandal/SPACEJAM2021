log = console.log.bind(console);
var firstPart;

// Huffmann code from here till line 122-No alteration required..
var Heap = function(fn) {
  this.fn = fn || function(e) {
    return e;
  };
  this.items = [];
};

Heap.prototype = {
  swap: function(i, j) {
    this.items[i] = [
      this.items[j],
      this.items[j] = this.items[i]
    ][0];
  },
  bubble: function(index) {
    var parent = ~~((index - 1) / 2);
    if (this.item(parent) < this.item(index)) {
      this.swap(index, parent);
      this.bubble(parent);
    }
  },
  item: function(index) {
    return this.fn(this.items[index]);
  },
  pop: function() {
    return this.items.pop();
  },
  sift: function(index, end) {
    var child = index * 2 + 1;
    if (child < end) {
      if (child + 1 < end && this.item(child + 1) > this.item(child)) {
        child++;
      }
      if (this.item(index) < this.item(child)) {
        this.swap(index, child);
        return this.sift(child, end);
      }
    }
  },
  push: function() {
    var lastIndex = this.items.length;
    for (var i = 0; i < arguments.length; i++) {
      this.items.push(arguments[i]);
      this.bubble(lastIndex++);
    }
  },
  get length() {
    return this.items.length;
  }
};

var Huffman = {
  encode: function(data) {
    var prob = {};
    var tree = new Heap(function(e) {
      return e[0];
    });
    for (var i = 0; i < data.length; i++) {
      if (prob.hasOwnProperty(data[i])) {
        prob[data[i]]++;
      } else {
        prob[data[i]] = 1;
      }
    }
    Object.keys(prob).sort(function(a, b) {
      return ~~(Math.random() * 2);
    }).forEach(function(e) {
      tree.push([prob[e], e]);
    });
    while (tree.length > 1) {
      var first = tree.pop(),
          second = tree.pop();
      tree.push([first[0] + second[0], [first[1], second[1]]]);
    }
    var dict = {};
    var recurse = function(root, string) {
      if (root.constructor === Array) {
        recurse(root[0], string + '0');
        recurse(root[1], string + '1');
      } else {
        dict[root] = string;
      }
    };
    tree.items = tree.pop()[1];
    recurse(tree.items, '');
    var result = '';
    for (var i = 0; i < data.length; i++) {
      result += dict[data.charAt(i)];
    }
    var header = Object.keys(dict).map(function(e) {
      return e.charCodeAt(0) + '|' + dict[e];
    }).join('-') + '/';
    return header + result;
  },
  decode: function(string) {
    string = string.split('/');
    var data = string[1].split(''),
        header = {};
    string[0].split('-').forEach(function(e) {
      var values = e.split('|');
      header[values[1]] = String.fromCharCode(values[0]);
    });
    var result = '';
    while (data.length) {
      var i = 0,
          cur = '';
      while (data.length) {
        cur += data.shift();
        if (header.hasOwnProperty(cur)) {
          result += header[cur];
          break;
        }
      }
    }
    return result;
  }
};
// Huffmann coding till here- No need to alter or change

// getting the binary code from the returned huffmann encoded string i.e after the character '/'
function getSecondPart(enc) {
    firstPart = enc.split('/')[0];
    return enc.split('/')[1];
}
// Takes the binary enocoded message previosly split and converts it into the DNA single strand message (Encoding Part)
function binaryToDNA(binary){
        // find the length of a string
        const len = binary.length;
        log(len);
        var DNAstr = '';
        if(len%2!=0){
            binary='0'+binary; // incase the binary message has odd length
        }
        for (let i = 0; i < len ; i+=2) {
            if (binary[i]==='1' && binary[i+1]==='1') {
              DNAstr=DNAstr+'A';
            }
            else if(binary[i]==='0' && binary[i+1]==='0'){
              DNAstr=DNAstr+'T';
            }
            else if(binary[i]==='0' && binary[i+1]==='1'){
              DNAstr=DNAstr+'G';
            }
            else{
              DNAstr=DNAstr+'C';
            }
        }
            if(len%2==0)// Adding a character to DNA strand to signify whether message was even or odd
            {
                DNAstr='A'+DNAstr;
            }
            else{
                DNAstr='T'+DNAstr;
            }
        return DNAstr;
    }
    // Function to Convert given DNa strand to its corresponding binary counterpart (Decoding Part)
    function DNAtobinary(finalDNAstr){
        var len;
        var finalDNAtoBinary = '';
        if(finalDNAstr[0]==='A'){
            finalDNAstr = finalDNAstr.substring(1);
            len = finalDNAstr.length;
            log(finalDNAstr+'-inDNAtoBinary');
            for(var i=0;i<len;i++){
                if(finalDNAstr[i]==='A'){
                    finalDNAtoBinary+='11';
                }
                else if(finalDNAstr[i]==='T'){
                    finalDNAtoBinary+='00';
                }
                else if(finalDNAstr[i]==='G'){
                    finalDNAtoBinary+='01';
                }
                else {
                    finalDNAtoBinary+='10';
                }
                // log(i);
            }
            
        }
        else{
            finalDNAstr=finalDNAstr.substring(1);
            log(finalDNAstr);
            len = finalDNAstr.length;
            for(var i=0;i<len;i++){
                if(finalDNAstr[i]==='A'){
                    finalDNAtoBinary+='11';
                }
                else if(finalDNAstr[i]==='T'){
                    finalDNAtoBinary+='00';
                }
                else if(finalDNAstr[i]==='G'){
                    finalDNAtoBinary+='01';
                }
                else {
                    finalDNAtoBinary+='10';
                }
            }
            finalDNAtoBinary= finalDNAtoBinary.substring(1);
        }
        return finalDNAtoBinary;
    }
var enc = Huffman.encode('Malayalam');// Returns the huffmann code for the given string
var binary=getSecondPart(enc);//Gets the binary part of the enocoded huffmann string
log(binary+"-Binary");
var finalDNAstr=binaryToDNA(binary);//encodes the given binary string to its DNA strand
log(finalDNAstr+'-DNAstr');
var finalDNAtoBinary = DNAtobinary(finalDNAstr);// Decodes the DNA strand to its binary
log(finalDNAtoBinary);
// var dec = Huffman.decode(enc);
// log(dec);