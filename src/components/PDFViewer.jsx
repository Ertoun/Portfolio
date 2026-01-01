import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Maximize2, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

// Configure the worker
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

const PDFViewer = ({ file, title }) => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [scale, setScale] = useState(1.0);
    const [loading, setLoading] = useState(true);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
        setLoading(false);
    }

    const changePage = (offset) => {
        setPageNumber(prevPageNumber => prevPageNumber + offset);
    };

    const previousPage = () => changePage(-1);
    const nextPage = () => changePage(1);

    return (
        <div className="flex flex-col gap-4 w-full max-w-4xl mx-auto">
            {/* Controls Header */}
            <div className="flex flex-wrap items-center justify-between gap-4 bg-secondary/50 backdrop-blur-sm p-4 rounded-t-2xl border border-secondary">
                <div className="font-semibold text-primary truncate max-w-[200px]">
                    {title || "Document"}
                </div>
                
                <div className="flex items-center gap-2">
                     <div className="flex items-center bg-background rounded-lg border border-secondary overflow-hidden">
                        <button
                            onClick={() => setScale(s => Math.max(0.5, s - 0.1))}
                            className="p-2 hover:bg-secondary text-primary transition-colors"
                            title="Zoom Out"
                        >
                            <ZoomOut className="w-4 h-4" />
                        </button>
                        <span className="px-2 text-xs font-mono text-muted border-x border-secondary w-12 text-center">
                            {Math.round(scale * 100)}%
                        </span>
                        <button
                            onClick={() => setScale(s => Math.min(2.0, s + 0.1))}
                            className="p-2 hover:bg-secondary text-primary transition-colors"
                            title="Zoom In"
                        >
                            <ZoomIn className="w-4 h-4" />
                        </button>
                    </div>

                    <div className="flex items-center bg-background rounded-lg border border-secondary overflow-hidden">
                        <button
                            disabled={pageNumber <= 1}
                            onClick={previousPage}
                            className="p-2 hover:bg-secondary text-primary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <ChevronLeft className="w-4 h-4" />
                        </button>
                        <span className="px-3 text-sm text-primary border-x border-secondary min-w-[3rem] text-center">
                            {pageNumber} / {numPages || '--'}
                        </span>
                        <button
                            disabled={pageNumber >= numPages}
                            onClick={nextPage}
                            className="p-2 hover:bg-secondary text-primary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <ChevronRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Document Container */}
            <div className="bg-secondary/20 rounded-b-2xl border-x border-b border-secondary p-4 md:p-8 h-[80vh] flex justify-center overflow-auto">
                <Document
                    file={file}
                    onLoadSuccess={onDocumentLoadSuccess}
                    loading={
                        <div className="flex flex-col items-center gap-2 text-muted">
                            <Loader2 className="w-8 h-8 animate-spin text-accent" />
                            <p>Loading PDF...</p>
                        </div>
                    }
                    error={
                        <div className="text-red-500 text-center">
                            <p>Failed to load PDF.</p>
                            <p className="text-sm opacity-80 mt-1">Please check if the file exists.</p>
                        </div>
                    }
                    className="shadow-2xl"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                        key={`page-${pageNumber}`} // Re-animate on page change
                    >
                        <Page 
                            pageNumber={pageNumber} 
                            scale={scale} 
                            className="bg-white text-black shadow-lg" // Force white bg for the paper itself
                            renderTextLayer={false} 
                            renderAnnotationLayer={false}
                        />
                    </motion.div>
                </Document>
            </div>
        </div>
    );
};

export default PDFViewer;
