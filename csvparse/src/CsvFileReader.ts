import fs from 'fs';

interface FileReaderOptions {
  encoding: string;
  flat?: string | undefined;
}

export class CsvFileReader {
  data: string[][] = [];
  options: string | FileReaderOptions = {
    encoding: 'utf-8'
  };

  constructor(public filename: string, options?: string | FileReaderOptions) {}

  read(): void {
    this.data = fs
      .readFileSync('original.csv', this.options)
      .split('\n')
      .map((row: string): string[] => {
        return row.split(',');
      });
  }
}
